import React from "react";
import { View } from "react-native";

const add_favorite = (item) => {
  const action = {
    type: "ADD_FAVORITE",
    payload: item,
  };
  return action;
};

const delete_from_favorites = (item) => (dispatch) => {
  dispatch({
    type: "DELETE_FROM_FAVORITES",
    payload: item,
  });
};

const add_comment = (item, comment) => (dispatch) => {
  dispatch({
    type: SET_NEW_COMMENT,
    payload: {
      item: item,
      comment: comment,
    },
  });
};

export default { add_favorite, delete_from_favorites, add_comment };
