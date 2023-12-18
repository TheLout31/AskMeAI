import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Features from "../components/Features";
import dummymessage from "../constants/dummy";

export default function HomeScreen() {
  const [message, setMessage] = useState(dummymessage);
  const [recording, setRecording] = useState(false);
  const [speaking, setspeaking] = useState(true);

  function clear() {
    setMessage([]);
  }
  function stop() {
    setspeaking(false);
  }

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
      {message.length > 0 ? (
        <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10 }}>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Assistant
          </Text>
          <View
            style={{
              flex: 0.8,
              height: 100,
              backgroundColor: "grey",
              borderRadius: 20,
              padding: 8,
            }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ paddingLeft: 4, paddingRight: 4 }}
            >
              {message.map((item, index) => {
                if (message.role == "assistant") {
                  if (message.content.includes("https")) {
                    //its an image
                    return (
                      <View
                        key={index}
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "lightgreen",
                            margin: 4,
                            padding: 5,
                            borderTopLeftRadius: 0,
                            borderRadius: 20,
                          }}
                        >
                          <Image
                            source={{ uri: `$'message.content'` }}
                            resizeMode="contain"
                            style={{ height: 60, width: 40 }}
                          />
                        </View>
                      </View>
                    );
                  } else {
                    //the role
                    return (
                      <View
                        key={index}
                        style={{
                          backgroundColor: "lightgreen",
                          margin: 4,
                          padding: 5,
                          borderTopLeftRadius: 0,
                          borderRadius: 20,
                        }}
                      >
                        <Text>{item.content}</Text>
                      </View>
                    );
                  }
                } else {
                  //the Content
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "white",
                          margin: 4,
                          padding: 5,
                          borderTopRightRadius: 0,
                          borderRadius: 20,
                        }}
                      >
                        <Text>{item.content}</Text>
                      </View>
                    </View>
                  );
                }
              })}
            </ScrollView>
          </View>
          {/**Recoding and clear button */}
          <View
            style={{
              flex: 0.3,
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {
              recording?(<TouchableOpacity
                onPress={stop}
                style={{
                  justifyContent: "flex-end",
                  height: 40,
                  width: 80,
                  backgroundColor: "red",
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "500",color:'white' }}>Stop</Text>
              </TouchableOpacity>): null
            }
            
            {recording ? (
              <TouchableOpacity>
                <Image
                  source={require("../../assets/Img/micon.png")}
                  style={{ height: 80, width: 80 }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Image
                  source={require("../../assets/Img/mic.png")}
                  style={{ height: 80, width: 80 }}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={clear}
              style={{
                justifyContent: "flex-end",
                height: 40,
                width: 80,
                backgroundColor: "white",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "500" }}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Features />
      )}
    </SafeAreaView>
  );
}
