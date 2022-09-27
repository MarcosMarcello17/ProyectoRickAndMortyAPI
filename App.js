import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreenSearch from "./src/screens/HomeScreenSearch";

const App = () => {
  return (
    <SafeAreaView>
      <HomeScreenSearch />
    </SafeAreaView>
  );
};

export default App;
