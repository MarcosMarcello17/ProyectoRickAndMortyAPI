import React from "react";
import { View } from "react-native";
import CharacterCard from "./CharacterCard";

const ListItem = ({ item, type = "normal" }) => {
  return (
    <View>
      <CharacterCard item={item} cardType={type} />
    </View>
  );
};

export default ListItem;
