import React, { useState } from "react";
import { Modal, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "./Button";
import store from "../store";

const SecondButton = ({ item, type, onReturn = () => {} }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const changeModalVisibility = () => setIsModalVisible(!isModalVisible);
  if (type == "normal") {
    return (
      <View>
        <Button
          onPress={() => {
            store.dispatch({ type: "ADD_FAVORITE", payload: item });
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
            store.dispatch({ type: "DELETE_FROM_FAVORITES", payload: item });
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
              store.dispatch({
                type: "ADD_COMMENT",
                payload: { item: item, comment: comment },
              });
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
