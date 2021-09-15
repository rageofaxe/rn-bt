import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

import { ContainerCentered } from "../../components/styled";
import Button from "../../components/Button";
import { setLevel } from "../../models/field";

const MenuScene = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Menu">) => {
  return (
    <ContainerCentered>
      <View />
      <View>
        <Button
          text="Play"
          onPress={() => {
            setLevel(0);
            navigation.navigate("Play");
          }}
        />
        <Button
          text="Tutorial"
          onPress={() => {
            setLevel(1);
            navigation.navigate("Play");
          }}
        />
      </View>
      <View />
    </ContainerCentered>
  );
};

export default MenuScene;
