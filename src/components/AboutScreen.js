import React from "react";
import { Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          padding: 65,
        }}
      >
        This is an awesome game I developed using React Native, React Navigation
        and my phones accelerometer!
      </Text>
    </View>
  );
}
