import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
// Charcoal #101820, Yellow #FEE715
export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-around" ,backgroundColor:'#101820'}}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 40, fontWeight: "bold",color:'white' }}>Joey.</Text>
        <Text style={{ fontSize: 20, fontWeight: "300" ,color:'white'}}>
          The Future is here, powered by AI.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/Img/bott.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          height: 60,
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 20,
          backgroundColor: "#FEE715",
          marginLeft: 20,
          marginRight: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#101820", fontSize: 25, fontWeight: "bold" }}>
          Start
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
