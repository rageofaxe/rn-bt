import { StatusBar } from "expo-status-bar";
import React from "react";
import { useStore } from "effector-react";

import PlayScene from "./src/scenes/PlayScene";
import MenuScene from "./src/scenes/MenuScene";
import { $route } from "./src/models/routing";
import "./src/models/init";
import styled from "styled-components/native";

export default function App() {
  const route = useStore($route);

  return (
    <Container>
      {route === "menu" && (
        <ContainerCentered>
          <MenuScene />
        </ContainerCentered>
      )}
      {route === "play" && <PlayScene />}
    </Container>
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
