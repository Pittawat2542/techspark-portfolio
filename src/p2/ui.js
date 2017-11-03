import React from 'react';
import { StyleSheet, Text, View, ToastAndroid, Image } from 'react-native';

const profilePic = { uri: 'https://scontent.fbkk8-1.fna.fbcdn.net/v/t1.0-9/15823120_1320245601381430_5161865780829337_n.jpg?oh=64276656966e0e9ddddc7ff97a145aaf&oe=5AAA917A'};

export default class UI extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={{height:80}}/>
            <Image style={{
                height:200, width:200,
                borderRadius:100, borderWidth:3, borderColor:'#FFF',
                marginBottom:25
            }}
            source={profilePic}/>
            <Text style={styles.textS}>Hello, I'm</Text>
            <Text style={styles.textL}>Krerkthad K.</Text>
            <Text style={styles.textS}>kerkthud@gmail.com</Text>
            <View style={{height:150}}/>
            <Text style={styles.textSlide}>Slide to next page &lt;</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#555',
      alignItems: 'center',
      //justifyContent: 'center',
      padding: 20
    },
    textS: {
        color: "white", fontSize: 24,
        marginBottom:-5
    },
    textL: {
        color: "white", fontSize: 60,
        marginBottom:5
    },
    textSlide: {
        color: "#ccc", fontSize: 24,
        marginBottom:-5
    },
});
