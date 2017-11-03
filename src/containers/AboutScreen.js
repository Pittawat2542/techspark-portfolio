import React from "react";
import { StyleSheet, View, Text } from "react-native";

class AboutScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hello World About</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  }
});

export default AboutScreen;
