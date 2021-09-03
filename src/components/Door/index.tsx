import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

const box0 = require("../../../assets/box0.png");
const box1 = require("../../../assets/box1.png");
const box2 = require("../../../assets/box2.png");

const boxes = [box0, box1, box2];

const AnimatedSprite = (props: AnimatedSpriteProps) => {
  const [images] = useState(props.images);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    let incInterval: NodeJS.Timer;
    let decInterval: NodeJS.Timer;

    if (props.state) {
      incInterval = setInterval(() => {
        setIndex((index) => {
          console.log('>>> inc', index)
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
          console.log('>>> dec', index)
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
      clearInterval(decInterval)
      clearInterval(incInterval)
      setIndex(0)
    }
  }, [props.state]);

  return <Box source={images[index]} size={8} />;
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

const Box = styled.Image<{size: number}>`
  height: ${props => `calc(100vw / ${props.size})`};
  width: ${props => `calc(100vw / ${props.size})`};
  image-rendering: pixelated;
`;

const Wrapper = styled.View`
  width: calc(100vw / 8);
  height: calc(100vw / 8);
`;

export default Door;
