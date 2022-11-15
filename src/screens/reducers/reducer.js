import characterDB from "../components/firebase-config";
import { onValue, ref, remove, set, update } from "firebase/database";

const initialState = {
  characters: [],
  charComment: "",
};

const firebaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      console.log("Adding new Favorite");
      set(ref(characterDB, "favorites/" + action.payload.name), {
        comments: "",
        item: action.payload,
      });
      return state;
    case "DELETE_FROM_FAVORITES":
      console.log("Deleting favorite");
      remove(ref(characterDB, "favorites/" + action.payload.name));
      return state;
    case "ADD_COMMENT":
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
    case "GET_ALL_FAVORITES":
      console.log("Obteniendo favoritos");
      state.characters = [];
      onValue(ref(characterDB, "favorites/"), (snapshot) => {
        snapshot.forEach((doc) => {
          state.characters.push(doc.child("item/").toJSON());
        });
      });
      return state;
    default:
      return state;
  }
};

export default firebaseReducer;
