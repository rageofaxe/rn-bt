import React from "react";
import styled from "styled-components/native";

type ButtonProps = {
  text: string;
  url?: string;
  onPress: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <ButtonWrapper onPress={props.onPress}>
      <Text>{props.text}</Text>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.TouchableOpacity<Pick<ButtonProps, "onPress">>`
  padding: 16px;
  border: 2px solid #fff;
  width: 60vw;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 2em;
  color: #fff;
`;

export default Button;
