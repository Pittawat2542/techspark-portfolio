import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableNativeFeedback
} from "react-native";

class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 48 }}>PORTFOLIO</Text>
        <Text style={{ fontSize: 35 }}>by Krerkthad</Text>
        <Image
          style={{ width: 340, height: 300 }}
          source={{
            uri:
              "https://raw.githubusercontent.com/Pittawat2542/techspark-portfolio/master/src/images/image.png"
          }}
        />
        <Button
          title="START"
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
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  }
});

export default HomeScreen;
