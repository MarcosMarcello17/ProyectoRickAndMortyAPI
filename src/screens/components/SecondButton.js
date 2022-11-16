import React, { useState } from "react";
import { Modal, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Button from "./Button";
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
  add_favorite,
  delete_from_favorites,
  add_comment,
  onDelete = () => {},
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const changeModalVisibility = () => setIsModalVisible(!isModalVisible);
  if (type == "normal") {
    return (
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
    );
  } else {
    return (
      <View>
        <Modal visible={isModalVisible}>
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
        </Modal>
        <Button onPress={changeModalVisibility}>Añadir Comentarios</Button>
        <Button
          onPress={() => {
            delete_from_favorites(item);
            onDelete();
          }}
        >
          Eliminar de Favoritos
        </Button>
      </View>
    );
  }
};

export default connect(null, {
  add_favorite,
  delete_from_favorites,
  add_comment,
})(SecondButton);
