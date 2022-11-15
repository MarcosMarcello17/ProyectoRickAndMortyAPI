import characterDB from "../components/firebase-config";
import { onValue, ref, remove, set, update } from "firebase/database";
const SET_ADD_FAVORITE = "ADD_FAVORITE";
const DELETE_FAVORITE = "DELETE_FROM_FAVORITES";
const SET_NEW_COMMENT = "ADD_COMMENT";

const initialState = {
  item: {},
  charComment: "",
};

const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADD_FAVORITE:
      console.log("Adding new Favorite");
      set(ref(characterDB, "favorites/" + action.payload.name), {
        comments: "",
        item: action.payload,
      });
      return state;
    case DELETE_FAVORITE:
      console.log("Deleting favorite");
      remove(ref(characterDB, "favorites/" + action.payload.name));
      return state;
    case SET_NEW_COMMENT:
      console.log("Adding new Comment");
      const updates = {};
      updates["favorites/" + action.payload.item.name + "/comments"] =
        action.payload.comment;
      update(ref(characterDB), updates);
      return state;
    case "GET_COMMENT":
      console.log("Getting comment from item");
      var ret = "";
      onValue(
        ref(characterDB, "favorites/" + action.payload.name + "/comments"),
        (snapshot) => {
          state.charComment = snapshot.toJSON();
          ret = snapshot.toJSON();
        }
      );
      return state;
    default:
      return state;
  }
};

export default firebaseReducer;
