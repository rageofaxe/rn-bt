import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useStore } from "effector-react";

import { $keys, toggleCell } from "../../models/field";

const ground0 = require("../../../assets/ground0.png");
const ground1 = require("../../../assets/ground1.png");
const skull = require("../../../assets/skull.png");

const sprites = [ground0, ground1];

const Key = (props: KeyProps) => {
  const [spriteId, setSprite] = useState(0);
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
  width: 48px;
  height: 48px;
  margin: 2px;
  image-rendering: pixelated;
  position: absolute;
`;

const Wrapper = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
`;

export default Key;
