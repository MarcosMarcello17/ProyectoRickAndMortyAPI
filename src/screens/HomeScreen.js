import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Dropdown from "./components/Dropdown";
import ListItem from "./components/ListItem";
import Button from "./components/Button";
import { styles, texts, filters } from "./components/styles/HomeScreenStyle.js";
import FilterScreen from "./components/FilterScreen";

const HomeScreen = () => {
  const status = [
    { id: 0, name: "" },
    { id: 1, name: "alive" },
    { id: 2, name: "dead" },
    { id: 3, name: "unknown" },
  ];
  const gender = [
    { id: 0, name: "" },
    { id: 1, name: "female" },
    { id: 2, name: "male" },
    { id: 3, name: "genderless" },
    { id: 4, name: "unknown" },
  ];
  const [characters, setcharacters] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [pagsTotal, setPagsTotal] = useState(0);
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchPageVisible, setSearchPageVisible] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState({ id: 0, name: "" });
  const [selectedGender, setSelectedGender] = useState({ id: 0, name: "" });
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
  const filterResults = () => {
    console.log("Buscando");
    setSearchPageVisible(false);
    searchurl =
      "https://rickandmortyapi.com/api/character/?page=" +
      currentPage +
      "&name=" +
      searchName +
      "&species=" +
      searchSpecies +
      "&status=" +
      selectedStatus.name +
      "&gender=" +
      selectedGender.name +
      "&type=" +
      searchType;

    getCharacters();
  };

  const selectGender = (item) => {
    setSelectedGender(item);
  };

  const clearModal = () => {
    setSearchName("");
    setSearchSpecies("");
    setSearchType("");
    setSelectedGender({ id: 0, name: "" });
    setSelectedStatus({ id: 0, name: "" });
  };

  const filter = () => {
    setcurrentPage(1);
    filterResults();
  };

  const filterButtonAction = () => {
    setcharacters([]);
    setSearchPageVisible(true);
    setcharacters([]);
    clearModal;
    setcharacters([]);
    setcurrentPage(1);
  };

  useEffect(() => {
    filterResults();
  }, []);

  const setOptions = (newName, newSpecies, newType, newStatus, newGender) => {
    setSearchName(newName);
    setSearchSpecies(newSpecies);
    setSearchType(newType);
    setSelectedStatus(newStatus);
    setSelectedGender(newGender);
    setSearchPageVisible(false);
    clearModal();
    setcurrentPage(1);
    filterResults();
  };

  const defaultSearch = () => {
    setSearchPageVisible(false);
    clearModal();
    setcurrentPage(1);
    filterResults();
  };

  return (
    <View style={{ backgroundColor: "#212226", alignItems: "stretch" }}>
      <View style={styles.header}>
        <TouchableOpacity style={texts.logo}>
          <Text style={texts.base}>R&M</Text>
        </TouchableOpacity>
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
        {/*<View style={filters.filterHeader}>
          <Text style={{ fontSize: 40, color: "white", margin: 20 }}>
            Character Filters
          </Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <View style={{ backgroundColor: "black", flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "black",
                alignItems: "stretch",
                flex: 1,
              }}
            >
              <TextInput
                style={filters.textInput}
                defaultValue={searchName}
                placeholder="Name"
                onChangeText={(newName) => {
                  setSearchName(newName);
                }}
              />
              <TextInput
                style={filters.textInput}
                placeholder="Species"
                defaultValue={searchSpecies}
                onChangeText={(newSpecies) => {
                  setSearchSpecies(newSpecies);
                }}
              />
              <TextInput
                style={filters.textInput}
                placeholder="Type"
                defaultValue={searchType}
                onChangeText={(newType) => {
                  setSearchType(newType);
                }}
              />
            </View>
            <View style={{ flex: 1, alignItems: "stretch" }}>
              <Text style={{ color: "white", fontSize: 30 }}>Status</Text>
              <Dropdown
                value={selectedStatus}
                items={status}
                name={"Status"}
                onSelect={selectStatus}
              />
              <Text style={{ color: "white", fontSize: 30 }}>Gender</Text>
              <Dropdown
                style={{ backgroundColor: "blue" }}
                value={selectedGender}
                items={gender}
                name={"Gender"}
                onSelect={selectGender}
              />
            </View>
          </View>
          <View style={filters.filterButtons}>
            <Button onPress={filter}>Search</Button>
          </View>

          <Button
            onPress={() => {
              setSearchPageVisible(false);
              clearModal();
              setcurrentPage(1);
              filterResults();
            }}
          >
            Volver
          </Button>
          </View>*/}
      </Modal>
    </View>
  );
};

export default HomeScreen;
