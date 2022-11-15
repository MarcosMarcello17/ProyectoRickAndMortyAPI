import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./Button";
import InformationStyle from "./styles/InformationStyle";
import { onValue, ref } from "firebase/database";
import characterDB from "./firebase-config";
import SecondButton from "./SecondButton";
import Comment from "./Comment";

const Information = ({ item, cardType, onReturn = () => {} }) => {
  const showComments = () => {
    if (cardType == "favorite") {
      onValue(ref(characterDB, "favorites/" + item.name), (snapshot) => {
        snapshot.forEach((doc) => {
          return doc.child("comments");
        });
      });
    }
  };
  return (
    <View style={InformationStyle.modalContainer}>
      <View style={InformationStyle.modalCharacterContainer}>
        <Image
          style={
            item.status == "Alive"
              ? InformationStyle.aliveModalImage
              : item.status == "Dead"
              ? InformationStyle.deadModalImage
              : InformationStyle.unknownModalImage
          }
          source={{ uri: item.image }}
        />
        <View>
          <Text style={InformationStyle.modalTextName}>{item.name}</Text>
        </View>
      </View>
      <View style={InformationStyle.modalDescriptionContainer}>
        <Text style={InformationStyle.modalTextStatus}>
          Status: {item.status}
        </Text>
        <SafeAreaView style={InformationStyle.modalDescriptionContainer}>
          <Comment
            style={InformationStyle.modalText}
            item={item}
            type={cardType}
          />
        </SafeAreaView>
      </View>
      <View style={{ backgroundColor: "black", margin: 20 }}>
        <Button onPress={onReturn}>Volver</Button>
        <SecondButton type={cardType} item={item} onReturn={onReturn} />
      </View>
    </View>
  );
};

export default Information;
