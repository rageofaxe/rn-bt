import React from "react";
import styled from "styled-components/native";
import { useStore } from "effector-react";
import { range } from "ramda";

import { Row } from "../styled";
import { $keys } from "../../models/field";
const skull = require("../../../assets/skull.png");

const Hud = () => {
  const keys = useStore($keys);
  return (
    <Container>
      {range(0, keys).map((i) => (
        <Skull
          key={i}
          source={skull}
          resizeMode={"contain"}
          resizeMethod="resize"
        />
      ))}
    </Container>
  );
};

const Skull = styled.Image`
  width: 32px;
  height: 32px;
  image-rendering: pixelated;
`;

const Container = styled(Row)`
  height: 32px;
`;

export default Hud;
