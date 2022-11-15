import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Information from "./Information";
import CharacterCardStyle from "./styles/CharacterCardStyle";

const CharacterCard = ({ item, cardType = "normal" }) => {
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
    <View style={CharacterCardStyle.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleModal} style={CharacterCardStyle.image}>
        <ImageBackground
          style={CharacterCardStyle.image}
          imageStyle={{ borderRadius: 18 }}
          source={{ uri: image }}
        >
          <View style={CharacterCardStyle.overlay}>
            <TouchableHighlight
              style={
                status == "Alive"
                  ? CharacterCardStyle.aliveCircle
                  : status == "Dead"
                  ? CharacterCardStyle.deadCircle
                  : CharacterCardStyle.unknownCircle
              }
              underlayColor="#ccc"
            >
              <Text></Text>
            </TouchableHighlight>

            <Text style={CharacterCardStyle.baseText}>{name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide">
        <Information item={item} onReturn={handleModal} cardType={cardType} />
      </Modal>
    </View>
  );
};

export default CharacterCard;
