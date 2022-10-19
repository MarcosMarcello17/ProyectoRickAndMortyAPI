import { StyleSheet } from "react-native";

const ButtonStyle = StyleSheet.create({
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
});

export default ButtonStyle;
