import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import HomeScreen from "./src/containers/HomeScreen";
import ProfileScreen from "./src/containers/ProfileScreen";
import AboutScreen from "./src/containers/AboutScreen";

const App = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
    About: { screen: AboutScreen }
  },
  {
    headerMode: "none",
    mode: "modal",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default App;
