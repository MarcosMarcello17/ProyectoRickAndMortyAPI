import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

const CharacterCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#353D48",
    marginBottom: "4%",
    marginRight: "2%",
    marginLeft: "1%",
    padding: "2%",
    width: windowWidth / 2 - 10,
  },
  modalContainer: {
    flex: 1,

    alignItems: "stretch",

    backgroundColor: "black",
  },
  image: {
    flex: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  unknownModalImage: {
    margin: "3%",
    marginTop: "12%",
    borderRadius:
      Math.round(windowWidth / 4 + Dimensions.get("window").height) / 2,
    borderWidth: 5,
    borderColor: "orange",
    width: "50%",
    height: "50%",
    aspectRatio: 1,

    alignItems: "center",
  },
  aliveModalImage: {
    margin: "3%",
    marginTop: "12%",
    borderRadius:
      Math.round(windowWidth / 4 + Dimensions.get("window").height) / 2,
    borderWidth: 5,
    borderColor: "green",
    width: "50%",
    height: "50%",
    aspectRatio: 1,
    alignItems: "center",
  },
  deadModalImage: {
    margin: "3%",
    marginTop: "12%",
    borderRadius:
      Math.round(windowWidth / 4 + Dimensions.get("window").height) / 2,
    borderWidth: 5,
    borderColor: "red",
    width: "50%",
    height: "50%",
    aspectRatio: 1,
    alignItems: "center",
  },

  button: {
    backgroundColor: "#353D48",
  },

  overlay: {
    flexDirection: "row",
    borderRadius: 20,
    marginTop: "80%",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,.6)",
  },
  baseText: {
    flex: 1,
    color: "lightgrey",
    fontSize: 15,
  },

  aliveCircle: {
    borderRadius:
      Math.round(windowWidth / 4 + Dimensions.get("window").height) / 2,
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "3%",
  },

  deadCircle: {
    borderRadius:
      Math.round(windowWidth / 4 + Dimensions.get("window").height) / 2,
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "3%",
  },

  unknownCircle: {
    borderRadius:
      Math.round(windowWidth / 4 + Dimensions.get("window").height) / 2,
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "3%",
  },
  modalCharacterContainer: {
    borderRadius: 50,
    flex: 5,
    borderWidth: 3,
    borderColor: "lightgreen",
    backgroundColor: "grey",
    position: "relative",
    justifyContent: "space-evenly",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  modalDescriptionContainer: {
    borderColor: "lightgreen",
    flex: 3,
    flexDirection: "column",
    backgroundColor: "black",
    alignContent: "space-between",
  },
  modalText: {
    margin: "1%",
    padding: "1%",
    color: "lightgreen",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
  modalTextName: {
    fontSize: 50,
    justifyContent: "space-evenly",
    color: "darkgrey",
  },
  modalTextStatus: {
    margin: "5%",
    fontSize: 50,
    justifyContent: "space-evenly",
    color: "lightgreen",
  },
});

export default CharacterCardStyle;
