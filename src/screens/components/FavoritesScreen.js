import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import ListItem from "./ListItem";
import Button from "./Button";
import store from "../store";
import { get_favorites } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    characters: state.firebaseReducer.characters,
  };
};

const FavoritesScreen = ({ route, navigation }) => {
  const { userName } = route.params;
  const [favCharacter, setfavCharacter] = useState([]);
  const onDelete = () => {
    setTimeout(() => {
      setfavCharacter([]);
      store.dispatch(get_favorites());
      setfavCharacter(store.getState().firebaseReducer.characters);
    }, 3100);
  };
  useEffect(() => {
    const unsuscribe = navigation.addListener("focus", () => {
      setfavCharacter([]);
      store.dispatch(get_favorites());
      setfavCharacter(store.getState().firebaseReducer.characters);
    });
    return unsuscribe;
  }, [navigation]);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 0.9 }}
        data={favCharacter}
        renderItem={({ item, index }) => (
          <ListItem item={item} type="favorite" onReturn={onDelete} />
        )}
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
        extraData={favCharacter}
      />
      <Button
        style={{ flex: 0.1 }}
        onPress={() => {
          navigation.navigate("Characters", {});
        }}
      >
        HomeScreen
      </Button>
    </View>
  );
};

export default connect(mapStateToProps, { get_favorites })(FavoritesScreen);
