import React from "react";
import { View } from "react-native";
import CharacterCard from "./CharacterCard";

const ListItem = ({ item }) => {
  return (
    <View>
      <CharacterCard item={item} />
    </View>
  );
};

export default ListItem;
