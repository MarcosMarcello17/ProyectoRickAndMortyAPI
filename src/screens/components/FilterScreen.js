import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import filters from "./styles/FilterScreenStyle";
import Dropdown from "./Dropdown.js";
import Button from "./Button";

const FilterScreen = ({ onReturn = () => {}, onAbort = () => {} }) => {
  var name = "";
  const [searchSpecies, setSearchSpecies] = useState("");
  const [searchType, setSearchType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState({ id: 0, name: "" });
  const [selectedGender, setSelectedGender] = useState({ id: 0, name: "" });
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
  const selectStatus = (item) => {
    setSelectedStatus(item);
  };
  const selectGender = (item) => {
    setSelectedGender(item);
  };
  return (
    <View
      style={{ flex: 1, backgroundColor: "#212226", alignItems: "stretch" }}
    >
      <View style={filters.filterHeader}>
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
              defaultValue={""}
              placeholder="Name"
              onChangeText={(newName) => {
                name = newName;
              }}
            />
            <TextInput
              style={filters.textInput}
              placeholder="Species"
              defaultValue={""}
              onChangeText={(newSpecies) => {
                setSearchSpecies(newSpecies);
              }}
            />
            <TextInput
              style={filters.textInput}
              placeholder="Type"
              defaultValue={""}
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
          <Button
            onPress={() => {
              onReturn(
                name,
                searchSpecies,
                searchType,
                selectedStatus,
                selectedGender
              );
            }}
          >
            Search
          </Button>
        </View>

        <Button onPress={onAbort}>Volver</Button>
      </View>
    </View>
  );
};

export default FilterScreen;
