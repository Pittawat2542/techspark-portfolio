import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

class ProfileScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ height: 80 }} />
        <Image
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: "#FFF",
            marginBottom: 25
          }}
          source={{
            uri:
              "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/15823120_1320245601381430_5161865780829337_n.jpg?_nc_eui2=v1%3AAeEJv-dTmGGdGJ-FzH-CWWbsKgFFHxmGg4eu85yzb7UrEW347tWiTmJ4Rw3oWzxgXDhD8WBCj_gx7pYME4cXxHOyRDcCzrPWKIUL_t_aBAriGQ&oh=ae9ed838dee5916799a93fabec316767&oe=5AAA917A"
          }}
        />
        <Text style={styles.textS}>Hello, I'm</Text>
        <Text style={styles.textL}>Krerkthad K.</Text>
        <Text style={styles.textS}>kerkthud@gmail.com</Text>
        <View style={{ height: 150 }} />
        <Text
          style={styles.textSlide}
          onPress={() => {
            navigate("About");
          }}
        >
          Slide to next page &lt;
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#585858",
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  textS: {
    color: "white",
    fontSize: 24,
    marginBottom: -5
  },
  textL: {
    color: "white",
    fontSize: 48,
    marginBottom: 5
  },
  textSlide: {
    color: "#ccc",
    fontSize: 24,
    fontWeight: "300",
    marginBottom: 15
  }
});

export default ProfileScreen;
