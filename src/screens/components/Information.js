import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./Button";
import InformationStyle from "./styles/InformationStyle";

const Information = ({ item, onReturn = () => {} }) => {
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
          <ScrollView>
            <Text style={InformationStyle.modalText}>
              Species: {item.species}
            </Text>
            <Text style={InformationStyle.modalText}>
              Gender: {item.gender}
            </Text>
            <Text style={InformationStyle.modalText}>
              Type: {item.type != "" ? item.type : "undefined"}
            </Text>
            <Text style={InformationStyle.modalText}>
              Origin: {item.origin.name}
            </Text>
            <Text style={InformationStyle.modalText}>
              Location: {item.location.name}
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
      <View style={{ backgroundColor: "black", margin: 20 }}>
        <Button onPress={onReturn}>Volver</Button>
      </View>
    </View>
  );
};

export default Information;
