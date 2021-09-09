import { createStore, createEvent, combine } from "effector";
import { transpose } from "ramda";
import {
  xorList,
  orList,
  countBooleanField,
  countBooleanRow,
} from "../../utils";

const condBoxFn = (box: Box, list: boolean[]): Box => {
  if (box.type === "xor") {
    return { ...box, state: xorList([...list, box.state]) };
  } else if (box.type === "or") {
    return { ...box, state: orList([...list, box.state]) };
  } else {
    return box;
  }
};

export const $levelId = createStore<number>(0);
export const $field = createStore<Level["field"]>([]);
export const $verticalTypeBoxes = createStore<Box[]>([]);
export const $horizontalTypeBoxes = createStore<Box[]>([]);
export const $maxKeys = createStore<number>(3);

export const $keys = combine($maxKeys, $field, (maxKeys, field) => {
  const appliedKeys = countBooleanField(field);
  return maxKeys - appliedKeys;
});

export const $vertical = combine(
  $verticalTypeBoxes,
  $field,
  (verticalTypeBoxes, field) => {
    return verticalTypeBoxes.map((box: Box, i) => {
      return condBoxFn(box, field[i]);
    });
  }
);

export const $horizontal = combine(
  $horizontalTypeBoxes,
  $field,
  (horizontalTypeBoxes, field) => {
    const trasposedField = transpose(field);
    return horizontalTypeBoxes.map((box: Box, i) => {
      return condBoxFn(box, trasposedField[i]);
    });
  }
);

export const $isNextLevel = combine(
  $field,
  $vertical,
  $horizontal,
  $maxKeys,
  (field, vertical, horizontal, maxKeys) => {
    return (
      countBooleanField(field) === maxKeys &&
      countBooleanRow(vertical) === 0 &&
      countBooleanRow(horizontal) === 0
    );
  }
);

export const toggleCell = createEvent<Coords>("toggle_cell");
export const setLevel = createEvent<number>("set_level");
export const incLevel = createEvent("inc_level");
