import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Dropdown from "./components/Dropdown";
import ListItem from "./components/ListItem";
import Button from "./components/Button";


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
    filterResults();
  };

  const filter = () => {
    setcurrentPage(1);
    filterResults();
  };

  const clear = () => {
    setcharacters([]);

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

  return (
    <View style={{ backgroundColor: "#212226", alignItems: "stretch" }}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.logoText} 
        >
          <Text style={styles.baseText}>R&M</Text>
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
        <View style={styles.filterHeader}>
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
                style={styles.textInput}
                defaultValue={searchName}
                placeholder="Name"
                onChangeText={(newName) => {
                  setSearchName(newName);
                }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Species"
                defaultValue={searchSpecies}
                onChangeText={(newSpecies) => {
                  setSearchSpecies(newSpecies);
                }}
              />
              <TextInput
                style={styles.textInput}
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
          <View style={styles.filterButtons}>
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
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: Dimensions.get("window").width / 12,
    color: "lightgreen",
    padding: 30,
    fontWeight: "bold",
  },
  logoText: {
    backgroundColor: "green",
    fontSize: Dimensions.get("window").width / 12,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "lightgreen",
  },

  imageBackground: {
    Color: "red",
  },

  header: {
    flexDirection: "row",
  },

  filterButtons: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
  },
  textInput: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  filterHeader: {
    backgroundColor: "black",
    paddingTop: 50,
    alignItems: "center",
  },
});
export default HomeScreen;
