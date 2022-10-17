import { StyleSheet } from "react-native";

const filters = StyleSheet.create({
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

export default filters;
