import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

class AboutScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.largeText}>About Me</Text>
          <View style={styles.col}>
            <Image
              style={{
                height: 120,
                width: 120,
                borderWidth: 1,
                borderColor: "#FFF",
                marginBottom: 25
              }}
              source={{
                uri:
                  "https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/15823120_1320245601381430_5161865780829337_n.jpg?_nc_eui2=v1%3AAeEJv-dTmGGdGJ-FzH-CWWbsKgFFHxmGg4eu85yzb7UrEW347tWiTmJ4Rw3oWzxgXDhD8WBCj_gx7pYME4cXxHOyRDcCzrPWKIUL_t_aBAriGQ&oh=ae9ed838dee5916799a93fabec316767&oe=5AAA917A"
              }}
            />
            <Text style={styles.mediumText}>
              สวัสดีครับ, ผมชื่อ"ลีโอ"{"\n\n"} เป็นเด็กนักเรียนธรรมดาๆ
              ลงทุนตราสารทุนและตราสารอนุพันธ์ ตั้งบริษัทเป็นของตัวเอง รับสมัคร
              Deverloper and Designer
            </Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.mediumText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              excepturi repellat aliquam ratione adipisci quam! Temporibus
              dolores quas accusantium explicabo, vero modi cupiditate nam
              dolorem fugiat! Amet odit dicta est.
            </Text>
          </View>
        </View>
      </ScrollView>
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
  largeText: {
    color: "white",
    fontSize: 36,
    paddingTop: 10,
    paddingBottom: 10
  },
  col: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    paddingBottom: 15
  },
  mediumText: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingLeft: 20
  }
});

export default AboutScreen;
