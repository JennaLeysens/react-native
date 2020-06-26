import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          flex: 1,

          alignSelf: "stretch",
          width: "100%",
          backgroundColor: "rebeccapurple",
        }}
      />
      <View
        style={{
          flex: 2,

          alignSelf: "stretch",
          width: "100%",
          backgroundColor: "crimson",
        }}
      />
      <View
        style={{
          flex: 3,

          alignSelf: "stretch",
          width: "100%",
          backgroundColor: "gold",
        }}
      />
      <View
        style={{
          flex: 3,

          alignSelf: "stretch",
          width: "100%",
          backgroundColor: "blue",
        }}
      />
    </View>
  );
}
