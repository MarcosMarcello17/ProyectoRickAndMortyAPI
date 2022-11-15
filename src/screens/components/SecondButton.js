import React, { useState } from "react";
import { Modal, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "./Button";
import store from "../store";
import {
  add_favorite,
  delete_from_favorites,
  add_comment,
} from "../actions/actions";

const SecondButton = ({ item, type, onReturn = () => {} }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const changeModalVisibility = () => setIsModalVisible(!isModalVisible);
  if (type == "normal") {
    return (
      <View>
        <Button
          onPress={() => {
            store.dispatch(add_favorite(item));
            onReturn();
          }}
        >
          Añadir a Favoritos
        </Button>
      </View>
    );
  } else {
    return (
      <View>
        <Button onPress={changeModalVisibility}>Añadir Comentarios</Button>
        <Button
          onPress={() => {
            store.dispatch(delete_from_favorites(item));
            onReturn();
          }}
        >
          Eliminar de Favoritos
        </Button>
        <Modal visible={isModalVisible}>
          <TextInput
            placeholder="Comentario"
            onChangeText={(newText) => setComment(newText)}
          />
          <Button
            onPress={() => {
              store.dispatch(add_comment(item, comment));
              changeModalVisibility();
              onReturn();
            }}
          >
            Agregar comentario
          </Button>
        </Modal>
      </View>
    );
  }
};

export default SecondButton;
