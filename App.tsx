import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useStore } from "effector-react";

import PlayScene from './src/scenes/PlayScene';
import MenuScene from './src/scenes/MenuScene'
import { $route } from "./src/models/routing";
import "./src/models/init";


export default function App() {
  const route = useStore($route);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx 123to start working on your app! {route}</Text>
      <StatusBar style="auto" />
      <MenuScene />
      {route === 'play' && <PlayScene />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
