import React from "react";
import { Text, TouchableOpacity } from "react-native";
import ButtonStyle from "./styles/ButtonStyle";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={ButtonStyle.buttonStyle}>
      <Text style={ButtonStyle.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
