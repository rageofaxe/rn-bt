import React from "react";
import { View } from "react-native";
import { useStore } from "effector-react";

import { Row, Col } from "../styled";
import { $field, $horizontal, $vertical } from "../../models/field";
import Key from "../Key";
import Door from "../Door";

const Field = () => {
  const field = useStore($field);
  const horizontal = useStore($horizontal);
  const vertical = useStore($vertical);

  console.log(horizontal);

  return (
    <View>
      <Row>
        {horizontal.map((item, i) => (
          <Door key={i} box={item.box} state={item.state} coords={[-1, -1]} />
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
          {vertical.map((item, i) => (
            <Door key={i} box={item.box} state={item.state} coords={[-1, -1]} />
          ))}
        </Col>
      </Row>
    </View>
  );
};

export default Field;
