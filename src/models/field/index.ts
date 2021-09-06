import { createStore, createEvent, combine } from "effector";
import { transpose } from "ramda";
import {
  xorList,
  orList,
  countBooleanField,
  countBooleanRow,
} from "../../utils";

const _matrix = [
  [false, true, false, false],
  [false, true, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

const mapDoors = (box: Box, state = true): DoorType => ({ box, state });

const _v: Box[] = ["xor", "xor", null, null];
const _h: Box[] = ["xor", "xor", "or", null];

const condStateFn = (box: Box, list: boolean[]) => {
  if (box === "xor") {
    return xorList(list);
  } else if (box === "or") {
    return orList(list);
  } else {
    return false;
  }
};

export const $levelId = createStore<number>(0);
export const $field = createStore<boolean[][]>(_matrix);
export const $verticalTypeBoxes = createStore<Box[]>(_v);
export const $horizontalTypeBoxes = createStore<Box[]>(_h);
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
      const boxState = condStateFn(box, field[i]);
      return mapDoors(box, boxState);
    });
  }
);

export const $horizontal = combine(
  $horizontalTypeBoxes,
  $field,
  (horizontalTypeBoxes, field) => {
    const trasposedField = transpose(field);
    return horizontalTypeBoxes.map((box: Box, i) => {
      const boxState = condStateFn(box, trasposedField[i]);
      return mapDoors(box, boxState);
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
