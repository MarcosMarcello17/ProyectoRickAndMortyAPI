import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  imageBackground: {
    Color: "red",
  },
  header: {
    flexDirection: "row",
  },
});

const texts = StyleSheet.create({
  base: {
    fontSize: Dimensions.get("window").width / 12,
    color: "lightgreen",
    padding: 30,
    fontWeight: "bold",
  },
  logo: {
    backgroundColor: "green",
    fontSize: Dimensions.get("window").width / 12,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    color: "lightgreen",
  },
});

export { styles, texts };
