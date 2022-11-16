import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Modal, TouchableOpacity } from "react-native";
import ListItem from "./components/ListItem";
import Button from "./components/Button";
import { styles, texts } from "./components/styles/HomeScreenStyle.js";
import FilterScreen from "./components/FilterScreen";
import store from "./store";
import { get_favorites } from "./actions/actions";
import { connect } from "react-redux";

const HomeScreen = ({ navigation, charactersDB }) => {
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
  const [characters, setcharacters] = useState([]);

  const getCharacters = () => {
    fetch(searchurl)
      .then((res) => res.json())
      .then((res) => {
        setcharacters([...characters, ...res.results]);
        setPagsTotal(res.info.pages);
        setcurrentPage(currentPage + 1);
      });
  };

  useEffect(() => {
    filterFavorites();
  }, [characters]);

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
    filterFavorites();
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
    }, 2100);
  };

  useEffect(() => {
    const unsuscribe = navigation.addListener("focus", () => {
      filterResults("", "", { id: 0, name: "" }, { id: 0, name: "" }, "");
      filterFavorites();
    });
    return unsuscribe;
  }, [navigation]);

  const filterFavorites = () => {
    setNewCharacters([]);
    store.dispatch(get_favorites());
    store.getState().firebaseReducer.characters.forEach((element) => {
      charactersinDB.push(element.id);
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
        <View>
          <Button
            onPress={() => {
              navigation.navigate("Favorites", {});
            }}
          >
            Favoritos
          </Button>

          <Button onPress={filterButtonAction}>Filters</Button>
        </View>
        <TouchableOpacity style={texts.logo}>
          <Text style={texts.base}>R&M</Text>
        </TouchableOpacity>
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
      />
      <Modal visible={searchPageVisible} style={{ backgroundColor: "black" }}>
        <FilterScreen onReturn={setOptions} onAbort={defaultSearch} />
      </Modal>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    charactersDB: state.firebaseReducer.characters,
  };
};

export default connect(mapStateToProps, { get_favorites })(HomeScreen);
