import React, { useState } from "react";
import { Animated } from "react-native";
import CharacterCard from "./CharacterCard";

const ListItem = ({ item, type = "normal", onReturn = () => {} }) => {
  const [fadeOut, setFadeOut] = useState(new Animated.Value(1));
  const [move, setMove] = useState(new Animated.Value(0));
  const onDelete = () => {
    Animated.timing(fadeOut, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(move, {
      toValue: -1000,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    onReturn();
  };

  return (
    <Animated.View style={{ opacity: fadeOut, translateY: move }}>
      <CharacterCard item={item} cardType={type} onDelete={onDelete} />
    </Animated.View>
  );
};

export default ListItem;
