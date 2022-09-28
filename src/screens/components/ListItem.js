import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import Button from "./Button";
const windowWidth = Dimensions.get("window").width;

const ListItem = ({ item }) => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  } = item;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity onPress={handleModal} style={styles.image}>
        <ImageBackground
          style={styles.image}
          imageStyle={{ borderRadius: 18 }}
          source={{ uri: image }}
        >
          <View style={styles.overlay}>
            <TouchableHighlight
              style={
                status == "Alive"
                  ? styles.aliveCircle
                  : status == "Dead"
                  ? styles.deadCircle
                  : styles.unknownCircle
              }
              underlayColor="#ccc"
            >
              <Text></Text>
            </TouchableHighlight>

            <Text style={styles.baseText}>{name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      {/* <Button title={name} onPress={handleModal} /> */}

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalCharacterContainer}>
            <Image
              style={
                status == "Alive"
                  ? styles.aliveModalImage
                  : status == "Dead"
                  ? styles.deadModalImage
                  : styles.unknownModalImage
              }
              source={{ uri: image }}
            />
            <View>
              <Text style={styles.modalTextName}>{name}</Text>
            </View>
          </View>
          <View style={styles.modalDescriptionContainer}>
            <Text style={styles.modalTextStatus}>Status: {status}</Text>
            <SafeAreaView style={styles.modalDescriptionContainer}>
              <ScrollView style={styles.scrollView}>
                <Text style={styles.modalText}>Species: {species}</Text>
                <Text style={styles.modalText}>Gender: {gender}</Text>
                <Text style={styles.modalText}>
                  Type: {type != "" ? type : "undefined"}
                </Text>
                <Text style={styles.modalText}>Origin: {origin.name}</Text>
                <Text style={styles.modalText}>Location: {location.name}</Text>
                <Text style={styles.modalText}> API ID: {id}</Text>
              </ScrollView>
            </SafeAreaView>
          </View>
          <View style={{ backgroundColor: "black", margin: 20 }}>
            <Button onPress={handleModal}>Volver</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#353D48",
    marginBottom: "2%",
    marginRight: "1%",
    marginLeft: "1%",
    padding: "2%",
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

export default ListItem;
