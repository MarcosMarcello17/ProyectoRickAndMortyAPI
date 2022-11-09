import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import FavoritesScreen from "./src/screens/components/FavoritesScreen";

const App = () => {
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

export default App;
