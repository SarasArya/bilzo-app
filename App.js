import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import AppContainer from "./src/AppContainer";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
