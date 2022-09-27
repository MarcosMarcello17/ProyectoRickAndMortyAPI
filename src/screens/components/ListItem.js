import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Modal,
  Image,
  Dimensions,
} from "react-native";

const WIDTH = Dimensions.get("window").width;

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
      <StatusBar animated={true} backgroundColor="#353D48" />
      <ImageBackground style={styles.image} source={{ uri: image }} />
      <Button title={name} onPress={handleModal} />
      <Modal visible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Image style={styles.imageModal} source={{ uri: image }} />
          <Text>Name: {name}</Text>
          <Text>Status: {status}</Text>
          <Text>Species: {species}</Text>
          <Text>Type: {type}</Text>
          <Text>Gender: {gender}</Text>
          <Text>Origin: {origin.name}</Text>
          <Text>Location: {location.name}</Text>
          <Button styles={styles.button} title="Close" onPress={handleModal} />
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
    backgroundColor: "#353D48",
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 5,
    padding: 20,
    marginTop: 5,
  },
  image: {
    flex: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    alignItems: "center",
  },
  imageModal: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#353D48",
  },
});

export default ListItem;
