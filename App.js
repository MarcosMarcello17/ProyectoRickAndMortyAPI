import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import AppExpo from "./src/screens/AppExpo";
import store from "./src/screens/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppExpo />
    </Provider>
  );
};

export default App;
