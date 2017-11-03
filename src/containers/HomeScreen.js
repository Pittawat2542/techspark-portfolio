import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Hello World Home</Text>
        <Button
          title="Click"
          onPress={() => {
            navigate("Profile");
          }}
        />
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

export default HomeScreen;
