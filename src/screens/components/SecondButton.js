import React, { useState } from "react";
import { Modal, View, Text, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "./Button";
import SecondButtonStyle from "./styles/SecondButtonStyle";
import InformationStyle from "./styles/InformationStyle";
import {
  add_favorite,
  delete_from_favorites,
  add_comment,
} from "../actions/actions";
import { connect } from "react-redux";

const SecondButton = ({
  item,
  type,
  onReturn = () => {},
  imageURI,
  add_favorite,
  delete_from_favorites,
  add_comment,
  onDelete = () => {},
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const changeModalVisibility = () => setIsModalVisible(!isModalVisible);
  if (type == "normal") {
    /*return (
      <View>
        <Button
          onPress={() => {
            add_favorite(item);
            onDelete();
          }}
        >
          Añadir a Favoritos
        </Button>
      </View>
    );*/
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "lightgrey" }}>
          Desliza para añadir a favoritos
        </Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "center", backgroundColor: "black" }}>
        {/*<Modal visible={isModalVisible}>
          <TextInput
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            placeholder="Comentario"
            onChangeText={(newText) => setComment(newText)}
          />
          <Button
            onPress={() => {
              add_comment(item, comment);
              changeModalVisibility();
              onReturn();
            }}
          >
            Agregar comentario
          </Button>
        </Modal>*/}
        <Button onPress={changeModalVisibility}>Añadir Comentarios</Button>
        <Text style={{ color: "lightgrey" }}>
          Desliza para eliminar de favoritos
        </Text>
        {/*<Button
          onPress={() => {
            delete_from_favorites(item);
            onDelete();
          }}
        >
          Eliminar de Favoritos
        </Button>*/}
        <Modal visible={isModalVisible}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "black",
              margin: 0,
              padding: 0,
            }}
          >
            <Image
              style={InformationStyle.commentModalImage}
              source={{ uri: item.image }}
            />
            <TextInput
              style={SecondButtonStyle.textStyle}
              placeholder="Agregar Comentario"
              onChangeText={(newText) => setComment(newText)}
            />
          </View>
          <View style={SecondButtonStyle.modalContainer}>
            <Button
              onPress={() => {
                add_comment(item, comment);
                onReturn();
              }}
            >
              Agregar comentario
            </Button>
            <Button onPress={changeModalVisibility}>Volver</Button>
          </View>
          <View
            style={{ backgroundColor: "black", flex: 1, alignItems: "center" }}
          >
            <Text style={{ padding: 20, fontSize: 40, color: "white" }}>
              {item.name}
            </Text>
          </View>
        </Modal>
      </View>
    );
  }
};

export default connect(null, {
  add_favorite,
  delete_from_favorites,
  add_comment,
})(SecondButton);
