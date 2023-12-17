import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ConstantCont from "./ConstantCont";
function Features() {
  return (
    <View style={styles.maincont}>
      <Text style={styles.textstyle}>Features</Text>
      <ConstantCont color='#50c878' Title={'ChatGPT'} imagepath={require("../../assets/Img/gpt.png")}/>
      <ConstantCont color='#9395d3' Title={'Dalle E'} imagepath={require("../../assets/Img/dalle.png")}/>
      <ConstantCont color='#c4cbca' Title={'AI'}imagepath={require("../../assets/Img/ai.png")}/>
    </View>
  );
}


export default Features;

const styles = StyleSheet.create({
  maincont: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  textstyle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
