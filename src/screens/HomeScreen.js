import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Modal, TouchableOpacity } from "react-native";
import ListItem from "./components/ListItem";
import Button from "./components/Button";
import { styles, texts } from "./components/styles/HomeScreenStyle.js";
import FilterScreen from "./components/FilterScreen";
import characterDB from "./components/firebase-config";
import { onValue, ref } from "firebase/database";

const HomeScreen = ({ navigation }) => {
  const [characters, setcharacters] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [pagsTotal, setPagsTotal] = useState(0);
  const [searchPageVisible, setSearchPageVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [currentSpecies, setCurrentSpecies] = useState("");
  const [currentStatus, setCurrentStatus] = useState({ id: 0, name: "" });
  const [currentGender, setCurrentGender] = useState({ id: 0, name: "" });
  const [currentType, setCurrentType] = useState("");
  var charactersinDB = [];
  const [newCharacters, setNewCharacters] = useState([]);
  var searchurl = "https://rickandmortyapi.com/api/character/";

  const getCharacters = () => {
    fetch(searchurl)
      .then((res) => res.json())
      .then((res) => {
        setcharacters([...characters, ...res.results]);
        setPagsTotal(res.info.pages);
        setcurrentPage(currentPage + 1);
      });
  };

  const loadMoreCharacters = () => {
    if (currentPage < pagsTotal) {
      setcurrentPage(currentPage + 1);
      filterResults();
    }
  };
  const filterResults = (
    name = currentName,
    species = currentSpecies,
    status = currentStatus,
    gender = currentGender,
    type = currentType
  ) => {
    setSearchPageVisible(false);
    searchurl =
      "https://rickandmortyapi.com/api/character/?page=" +
      currentPage +
      "&name=" +
      name +
      "&species=" +
      species +
      "&status=" +
      status.name +
      "&gender=" +
      gender.name +
      "&type=" +
      type;
    getCharacters();
  };

  const filterButtonAction = () => {
    setcharacters([]);
    setSearchPageVisible(true);
    setcharacters([]);
    setcharacters([]);
    setcurrentPage(1);
  };

  useEffect(() => {
    filterResults("", "", { id: 0, name: "" }, { id: 0, name: "" }, "");
  }, []);

  const setCurrentData = (name, species, type, status, gender) => {
    setCurrentName(name);
    setCurrentSpecies(species);
    setCurrentStatus(status);
    setCurrentGender(gender);
    setCurrentType(type);
  };
  const setOptions = (newName, newSpecies, newType, newStatus, newGender) => {
    setCurrentData(newName, newSpecies, newType, newStatus, newGender);
    setSearchPageVisible(false);
    setcurrentPage(1);
    filterResults(newName, newSpecies, newStatus, newGender, newType);
  };

  const defaultSearch = () => {
    setSearchPageVisible(false);
    setcurrentPage(1);
    filterResults();
  };

  const onReturn = () => {
    setTimeout(() => {
      filterFavorites();
    }, 3100);
  };

  useEffect(() => {
    const unsuscribe = navigation.addListener("focus", () => {
      filterFavorites();
    });
    return unsuscribe;
  }, [navigation]);

  const filterFavorites = () => {
    setNewCharacters([]);
    onValue(ref(characterDB, "favorites/"), (snapshot) => {
      snapshot.forEach((doc) => {
        charactersinDB.push(doc.child("item/id"));
        var data = doc.toJSON();
        charactersinDB.push(data.item.id);
      });
    });
    var charToAdd = [];
    characters.forEach((element) => {
      var id = element.id;
      if (charactersinDB.includes(id)) {
      } else {
        charToAdd.push(element);
      }
    });
    setNewCharacters(charToAdd);
  };

  return (
    <View style={{ backgroundColor: "#212226", alignItems: "stretch" }}>
      <View style={styles.header}>
        <TouchableOpacity style={texts.logo}>
          <Text style={texts.base}>R&M</Text>
        </TouchableOpacity>
        <Button
          onPress={() => {
            navigation.navigate("Favorites", {});
          }}
        >
          Favoritos
        </Button>
      </View>
      <View>
        <Button onPress={filterButtonAction}>Filters</Button>
      </View>
      <FlatList
        data={newCharacters}
        renderItem={({ item, index }) => (
          <ListItem item={item} type="normal" onReturn={onReturn} />
        )}
        keyExtractor={(item, index) => String(index)}
        onEndReached={loadMoreCharacters}
        onEndReachedThreshold={0.01}
        numColumns={2}
        extraData={newCharacters}
      />
      <Modal visible={searchPageVisible} style={{ backgroundColor: "black" }}>
        <FilterScreen onReturn={setOptions} onAbort={defaultSearch} />
      </Modal>
    </View>
  );
};

export default HomeScreen;
