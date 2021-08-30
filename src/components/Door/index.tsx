import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";

const box0 = require("../../../assets/box0.png");
const box1 = require("../../../assets/box1.png");
const box2 = require("../../../assets/box2.png");

const boxes = [box0, box1, box2];

type AnimatedSpriteProps = {
  images: any[];
  animationSpeed: number;
  state: boolean;
};
const AnimatedSprite = (props: AnimatedSpriteProps) => {
  const [images] = useState(props.images);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    let incInterval: NodeJS.Timer;
    let decInterval: NodeJS.Timer;

    if (props.state) {
      incInterval = setInterval(() => {
        setIndex((index) => {
          if (index < images.length - 1) {
            return index + 1;
          } else {
            clearInterval(incInterval);
            return index;
          }
        });
      }, props.animationSpeed);
    } else {
      decInterval = setInterval(() => {
        setIndex((index) => {
          if (index > 0) {
            return index - 1;
          } else {
            clearInterval(decInterval);
            return index;
          }
        });
      }, props.animationSpeed);
    }

    () => {
      // clearInterval(decInterval)
      // clearInterval(incInterval)
      setIndex(0)
    }
  }, [props.state]);

  return <Box source={images[index]} />;
};

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

const Box = styled.Image`
  width: 48px;
  height: 48px;
  image-rendering: pixelated;
`;

const Wrapper = styled.View`
  width: 48px;
  height: 48px;
`;

export default Door;
