import React, { useState } from "react";
import { Animated } from "react-native";
import CharacterCard from "./CharacterCard";
const ANIMATION_DURATION = 250;

const ListItem = ({ item, type = "normal", onReturn = () => {} }) => {
  const [fadeOut, setFadeOut] = useState(new Animated.Value(1));
  const onDelete = () => {
    Animated.timing(fadeOut, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    onReturn();
  };

  return (
    <Animated.View style={{ opacity: fadeOut }}>
      <CharacterCard item={item} cardType={type} onDelete={onDelete} />
    </Animated.View>
  );
};

export default ListItem;
