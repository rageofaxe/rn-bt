import { StatusBar } from "expo-status-bar";
import React from "react";
import { useStore } from "effector-react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";

import PlayScene from "./src/scenes/PlayScene";
import MenuScene from "./src/scenes/MenuScene";
import { $route } from "./src/models/routing";
import "./src/models/init";

const Stack = createNativeStackNavigator();

export default function App() {
  const route = useStore($route);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScene} />
        <Stack.Screen name="Play" component={PlayScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Container = styled.View`
  flex: 1;
  background: rgb(21, 29, 40);
  align-items: center;
`;

const ContainerCentered = styled.View`
  flex: 1;
  background: #ff66ff;
  align-items: center;
  justify-content: center;
`;
