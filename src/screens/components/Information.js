import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./Button";
import InformationStyle from "./styles/InformationStyle";
import SecondButton from "./SecondButton";
import Comment from "./Comment";
import Draggable from "./Draggable";

const Information = ({
  item,
  cardType,
  onReturn = () => {},
  onDelete = () => {},
}) => {
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
        <SecondButton
          type={cardType}
          item={item}
          onReturn={onReturn}
          onDelete={onDelete}
        />
        <View style={{ backgroundColor: "grey", borderRadius: 30 }}>
          <Draggable color={"darkgrey"} item={item} onDelete={onDelete} />
        </View>
      </View>
    </View>
  );
};

export default Information;
