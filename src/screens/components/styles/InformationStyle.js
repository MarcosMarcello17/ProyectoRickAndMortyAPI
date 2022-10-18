import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

const InformationStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,

    alignItems: "stretch",

    backgroundColor: "black",
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
  modalTextName: {
    fontSize: 50,
    justifyContent: "space-evenly",
    color: "darkgrey",
  },
  modalDescriptionContainer: {
    borderColor: "lightgreen",
    flex: 3,
    flexDirection: "column",
    backgroundColor: "black",
    alignContent: "space-between",
  },
  modalTextStatus: {
    margin: "5%",
    fontSize: 50,
    justifyContent: "space-evenly",
    color: "lightgreen",
  },
  modalText: {
    margin: "1%",
    padding: "1%",
    color: "lightgreen",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default InformationStyle;
