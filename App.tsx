import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlayScene from "./src/scenes/PlayScene";
import MenuScene from "./src/scenes/MenuScene";
import "./src/models/init";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScene} />
        <Stack.Screen name="Play" component={PlayScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


