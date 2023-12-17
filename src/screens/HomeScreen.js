import { View, Text, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Features from "../components/Features";
import dummymessage from "../constants/dummy";

export default function HomeScreen() {
  const [message, setMessage] = useState(dummymessage);
  const count = dummymessage.length;
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#101820" }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../assets/Img/bott.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      {/** feaures and messages */}
      {message > 0 ? (
        <View>
          <Text></Text>
        </View>
      ) : (
        <View>
          {message.map((item)=>(<Text>{item.role}</Text>))}
        </View>
      )}
    </SafeAreaView>
  );
}
