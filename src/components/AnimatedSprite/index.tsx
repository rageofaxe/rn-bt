import React, { useEffect, useState } from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

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
      clearInterval(decInterval);
      clearInterval(incInterval);
      setIndex(0);
    };
  }, [props.state]);

  return <Box source={images[index]} size={8} />;
};

const Box = styled.Image<{ size: number, source: ImageSourcePropType }>`
  height: ${(props) => `calc(100vw / ${props.size})`};
  width: ${(props) => `calc(100vw / ${props.size})`};
  image-rendering: pixelated;
`;

export default AnimatedSprite;
