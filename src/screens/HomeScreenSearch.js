import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Modal, Button, TextInput } from "react-native";
import Dropdown from "./components/Dropdown";
import ListItem from "./components/ListItem";

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
      });
  };

  const loadMoreCharacters = () => {
    console.log(searchurl);
    console.log(currentPage);
    console.log(pagsTotal);
    if (currentPage < pagsTotal) {
      setcurrentPage(currentPage + 1);
      console.log("Cambia pagina" + currentPage);
      filterResults();
    }
  };
  const filterResults = () => {
    console.log("Buscando");
    setSearchPageVisible(false);
    console.log(searchName);
    console.log(searchSpecies);
    console.log(selectedStatus.name);
    console.log(selectedGender.name);
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
    console.log(searchurl);
    getCharacters();
  };

  const selectStatus = (item) => {
    setSelectedStatus(item);
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

  const showAll = () => {
    clearModal();
    setcurrentPage(1);
    console.log(characters);
    filterResults();
  };

  const filter = () => {
    setcurrentPage(1);
    filterResults();
  };

  const clear = () => {
    setcharacters([]);
    setSearchPageVisible(false);
  };

  useEffect(() => {
    filterResults();
  }, []);
  return (
    <View style={{ backgroundColor: "#212226" }}>
      <Button
        title="filter"
        onPress={() => {
          setSearchPageVisible(true);
          clearModal;
        }}
      />
      <FlatList
        data={characters}
        renderItem={({ item, index }) => <ListItem item={item} />}
        keyExtractor={(item, index) => String(index)}
        onEndReached={loadMoreCharacters}
        onEndReachedThreshold={0.01}
        numColumns={2}
      />
      <Modal visible={searchPageVisible} style={{ flex: 1 }}>
        <View>
          <TextInput
            placeholder="Name"
            onChangeText={(newName) => {
              setSearchName(newName);
            }}
          />
          <TextInput
            placeholder="Species"
            onChangeText={(newSpecies) => {
              setSearchSpecies(newSpecies);
            }}
          />
          <TextInput
            placeholder="Type"
            onChangeText={(newType) => {
              setSearchType(newType);
            }}
          />
          <Text>Status</Text>
          <Dropdown
            value={selectedStatus}
            items={status}
            name={"Status"}
            onSelect={selectStatus}
            style={{ marginBottom: 10 }}
          />
          <Text>Gender</Text>
          <Dropdown
            value={selectedGender}
            items={gender}
            name={"Gender"}
            onSelect={selectGender}
            style={{ marginBottom: 10 }}
          />
          <Button title="Search" onPress={filter} />
          <Button
            title="Cancel"
            onPress={() => {
              setSearchPageVisible(false);
            }}
          />
          <Button title="Show All" onPress={showAll} />
          <Button title="Clear Characters" onPress={clear} />
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;
