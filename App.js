import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import UI from  './src/p2/ui.js';
import { StackNavigator } from "react-navigation";

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
        <View style={{height=200}}/>
        <View style={styles.container}>
            <Text style={styles.textSlide}>Slide to next page &lt;</Text>
        </View>
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: UI,
  },
});

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#555',
      alignItems: 'center',
      //justifyContent: 'center',
      padding: 20
  },
  textSlide: {
      color: "#ccc", fontSize: 24,
      marginTop:20
  },
});
