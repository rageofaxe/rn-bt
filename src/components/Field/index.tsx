import React from "react";
import { View } from "react-native";
import { useStore } from "effector-react";

import { Row, Col } from "../styled";
import { $field, $horizontal, $levelId, $vertical } from "../../models/field";
import Key from "../Key";
import Door from "../Door";
import styled from "styled-components/native";

const Field = () => {
  const field = useStore($field);
  const horizontal = useStore<Box[]>($horizontal);
  const vertical = useStore<Box[]>($vertical);
  const levelId = useStore($levelId);

  return (
    <FieldWrapper>
      <Row>
        {horizontal.map((box, i) => (
          <Door
            key={`${levelId} - ${i}`}
            box={box}
            coords={[-1, -1]}
          />
        ))}
      </Row>

      <Row>
        <View>
          {field.map((row, y) => (
            <Row key={y}>
              {row.map((item, x) => (
                <Key key={`${y}-${x}`} state={field[y][x]} coords={[y, x]} />
              ))}
            </Row>
          ))}
        </View>
        <Col>
          {vertical.map((box, i) => (
            <Door
              key={`${levelId} - ${i}`}
              box={box}
              coords={[-1, -1]}
            />
          ))}
        </Col>
      </Row>
    </FieldWrapper>
  );
};

const FieldWrapper = styled.View``;

export default Field;
