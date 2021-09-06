import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useStore } from "effector-react";

import { $keys, toggleCell } from "../../models/field";

const ground0 = require("../../../assets/ground0.png");
const ground1 = require("../../../assets/ground1.png");
const skull = require("../../../assets/skull.png");

const sprites = [ground0, ground1];

const Key = (props: KeyProps) => {
  const [spriteId, setSprite] = useState<number>(0);
  const keys = useStore($keys);

  const toggle = React.useCallback(() => {
    if (keys > 0 || props.state) {
      toggleCell(props.coords);
    }
  }, [keys]);

  useEffect(() => {
    const random = Math.random();
    setSprite(random > 0.9 ? 1 : 0);
  }, []);

  return (
    <Wrapper onPress={toggle}>
      <KeyImage source={sprites[spriteId]} />
      {props.state && <KeyImage source={skull} />}
    </Wrapper>
  );
};

const KeyImage = styled.Image`
  width: calc(100vw / 8);
  height: calc(100vw / 8);
  image-rendering: pixelated;
  position: absolute;
  border: 1px solid #444;
`;

const Wrapper = styled.TouchableOpacity`
  width: calc(100vw / 8);
  height: calc(100vw / 8);
  margin: 0px;
`;

export default Key;
