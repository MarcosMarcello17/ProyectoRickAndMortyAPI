const get_favorites = () => {
  return {
    type: "GET_ALL_FAVORITES",
  };
};

const add_favorite = (item) => {
  const action = {
    type: "ADD_FAVORITE",
    payload: item,
  };
  return action;
};

const delete_from_favorites = (item) => {
  return {
    type: "DELETE_FROM_FAVORITES",
    payload: item,
  };
};

const add_comment = (item, comment) => {
  return {
    type: "ADD_COMMENT",
    payload: {
      item: item,
      comment: comment,
    },
  };
};

export { add_favorite, delete_from_favorites, add_comment, get_favorites };
