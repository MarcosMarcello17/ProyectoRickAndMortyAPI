import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import store from "../store";

const Comment = ({ style, item, type }) => {
  const [dbComment, setDBComment] = useState("");
  useEffect(() => {
    store.dispatch({ type: "GET_COMMENT", payload: item });
    setDBComment(store.getState().firebaseReducer.charComment);
  }, []);
  if (type == "normal") {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView>
          <Text style={style}>Species: {item.species}</Text>
          <Text style={style}>Gender: {item.gender}</Text>
          <Text style={style}>
            Type: {item.type != "" ? item.type : "undefined"}
          </Text>
          <Text style={style}>Origin: {item.origin.name}</Text>
          <Text style={style}>Location: {item.location.name}</Text>
        </ScrollView>
      </GestureHandlerRootView>
    );
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView>
          <Text style={style}>Species: {item.species}</Text>
          <Text style={style}>Gender: {item.gender}</Text>
          <Text style={style}>
            Type: {item.type != "" ? item.type : "undefined"}
          </Text>
          <Text style={style}>Origin: {item.origin.name}</Text>
          <Text style={style}>Location: {item.location.name}</Text>
          <Text style={style}>Comment: {dbComment}</Text>
        </ScrollView>
      </GestureHandlerRootView>
    );
  }
};

export default Comment;
