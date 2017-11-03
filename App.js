import React from 'react';
import { StyleSheet, View } from 'react-native';
import UI from  './src/p2/ui.js';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <UI/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
