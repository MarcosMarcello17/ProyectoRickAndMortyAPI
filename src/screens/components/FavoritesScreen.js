import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import ListItem from "./ListItem";
import Button from "./Button";
import store from "../store";
import { get_favorites } from "../actions/actions";
import { connect } from "react-redux";
import { favorites } from "./styles/HomeScreenStyle";

const FavoritesScreen = ({ route, navigation, characters }) => {
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

  const onDelete = () => {
    setTimeout(() => {
      setfavCharacter([]);
      store.dispatch(get_favorites());
      setfavCharacter(store.getState().firebaseReducer.characters);
    }, 3100);
  };

  return (
    <View style={{ flex: 5, backgroundColor: "#212226" }}>
      <TouchableOpacity style={favorites.logo}>
        <Text style={favorites.base}>Rick & Morty</Text>
      </TouchableOpacity>
      <Button
        style={{ flex: 0.1 }}
        onPress={() => {
          navigation.navigate("Characters", {});
        }}
      >
        HomeScreen
      </Button>
      <FlatList
        style={{ flex: 0.9 }}
        data={favCharacter}
        renderItem={({ item, index }) => (
          <ListItem item={item} type="favorite" onReturn={onDelete} />
        )}
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    characters: state.firebaseReducer.characters,
  };
};

export default connect(mapStateToProps, { get_favorites })(FavoritesScreen);
