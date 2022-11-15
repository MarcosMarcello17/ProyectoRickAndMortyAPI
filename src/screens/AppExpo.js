import React from "react";
import { Text, View } from "react-native";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import FavoritesScreen from "./components/FavoritesScreen";

const AppExpo = ({}) => {
  const drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <drawer.Navigator initialRouteName="Characters">
        <drawer.Screen name="Characters" component={HomeScreen} />
        <drawer.Screen name="Favorites" component={FavoritesScreen} />
      </drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppExpo;
