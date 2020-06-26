import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, View, Animated } from "react-native";

export default function MyButton({ activeText, inactiveText, onPress }) {
  const [pressedAnim] = useState(() => new Animated.Value(0));
  const [buttonPressed, setButtonPressed] = useState(false);

  const scale = pressedAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });

  const backgroundColor = pressedAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["white", "rgba(255, 255, 255, 0.4)"],
  });

  return (
    <TouchableWithoutFeedback
      onPressIn={(e) => {
        Animated.spring(pressedAnim, {
          toValue: 1,
          speed: 50,
          bounciness: 10,
        }).start();
      }}
      onPressOut={(e) => {
        Animated.spring(pressedAnim, {
          toValue: 0,
          speed: 30,
          bounciness: 25,
        }).start();
      }}
      onPress={() => {
        onPress();
        setButtonPressed(!buttonPressed);
      }}
    >
      <Animated.View
        style={{
          backgroundColor,
          width: 200,

          paddingHorizontal: 12,
          paddingVertical: 8,
          borderWidth: 2,
          borderRadius: 4,
          borderColor: "black",
          flexDirection: "row",
          justifyContent: "center",
          transform: [{ scale }],
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {buttonPressed && inactiveText ? inactiveText : activeText}
        </Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
