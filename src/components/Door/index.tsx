import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import AnimatedSprite from "../AnimatedSprite";

const box0 = require("../../../assets/box0.png");
const box1 = require("../../../assets/box1.png");
const box2 = require("../../../assets/box2.png");
const boxes = [box0, box1, box2];

const Door = (props: DoorProps) => {
  return (
    <Wrapper>
      {props.box && (
        <AnimatedSprite
          state={props.state}
          images={boxes}
          animationSpeed={42}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: calc(100vw / 8);
  height: calc(100vw / 8);
`;

export default Door;
