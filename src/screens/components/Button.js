import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: "stretch",
    backgroundColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    maxHeight: 35,
    borderColor: "lightgreen",
    paddingHorizontal: 30,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  textStyle: {
    alignSelf: "center",
    color: "lightgreen",
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 8,
  },
};
export default Button;
