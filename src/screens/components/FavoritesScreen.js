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
  useEffect(() => {
    const unsuscribe = navigation.addListener("focus", () => {
      setfavCharacter([]);
      store.dispatch(get_favorites());
      setfavCharacter(store.getState().firebaseReducer.characters);
    });
    return unsuscribe;
  }, [navigation]);
  return (
    <View>
      <FlatList
        data={favCharacter}
        renderItem={({ item, index }) => (
          <ListItem item={item} type="favorite" />
        )}
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
      />
      <Button
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
