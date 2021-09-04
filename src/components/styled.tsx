import styled from "styled-components/native";

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.View`
  display: flex;
  flex-direction: column;
`;

const Container = styled.View`
  flex: 1;
  background: rgb(21, 29, 40);
  align-items: center;
`;

export const ContainerCentered = styled.View`
  flex: 1;
  background: rgb(21, 29, 40);
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
`;