import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Modal, TouchableOpacity } from "react-native";
import ListItem from "./components/ListItem";
import Button from "./components/Button";
import { styles, texts } from "./components/styles/HomeScreenStyle.js";
import FilterScreen from "./components/FilterScreen";

const HomeScreen = () => {
  const [characters, setcharacters] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [pagsTotal, setPagsTotal] = useState(0);
  const [searchPageVisible, setSearchPageVisible] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [currentSpecies, setCurrentSpecies] = useState("");
  const [currentStatus, setCurrentStatus] = useState({ id: 0, name: "" });
  const [currentGender, setCurrentGender] = useState({ id: 0, name: "" });
  const [currentType, setCurrentType] = useState("");
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
    console.log(searchurl);
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
    console.log(newGender.name);
    setCurrentData(newName, newSpecies, newType, newStatus, newGender);
    setSearchPageVisible(false);
    setcurrentPage(1);
    filterResults(newName, newSpecies, newStatus, newGender, newType);
    console.log(currentGender);
  };

  const defaultSearch = () => {
    setSearchPageVisible(false);
    setcurrentPage(1);
    filterResults();
  };

  return (
    <View style={{ backgroundColor: "#212226", alignItems: "stretch" }}>
      <View style={styles.header}>
        <TouchableOpacity style={texts.logo}>
          <Text style={texts.base}>R&M</Text>
        </TouchableOpacity>
        <Button>Favoritos</Button>
      </View>
      <View>
        <Button onPress={filterButtonAction}>Filters</Button>
      </View>
      <FlatList
        data={characters}
        renderItem={({ item, index }) => <ListItem item={item} />}
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

export default HomeScreen;
