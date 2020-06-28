import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GameScreen from "./src/screens/GameScreen";
import Homescreen from "./src/components/Homescreen";
import AboutScreen from "./src/components/AboutScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function GameTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Play" component={GameScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ title: "Welcome!" }}
        />
        <Stack.Screen name="Game" component={GameTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
