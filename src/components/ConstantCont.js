import { View, Text, Image } from "react-native";
import React from "react";

export default function ConstantCont( {color, imagepath,Title} ) {
  return (
    <View
      style={{
        backgroundColor: color,
        padding: 10,
        borderRadius: 20,
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        opacity:0.8
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={imagepath}
          style={{ height: 50, width: 50 }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 8,
            color: "white",
          }}
        >
          {Title}
        </Text>
      </View>
      <View style={{ marginTop: 8, marginBottom: 8 }}>
        <Text style={{ color: "white", fontWeight: "200" }}>
          {" "}
          ChatGPT can provide you with instant and knowledgable responsed,assist
          you with creative ideas on wide range of topics
        </Text>
      </View>
    </View>
  );
}
