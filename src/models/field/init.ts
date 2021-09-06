import {
  toggleCell,
  $field,
  setLevel,
  $horizontalTypeBoxes,
  $verticalTypeBoxes,
  $maxKeys,
  $levelId,
  incLevel,
} from "./";
import { levels } from "./levels";

$field
  .on(toggleCell, (state, [y, x]) => {
    state[y][x] = !state[y][x];
    return [...state];
  })
  .on(setLevel, (_, payload) => levels[payload].field);

$horizontalTypeBoxes.on(setLevel, (_, payload) => levels[payload].hBoxes);
$verticalTypeBoxes.on(setLevel, (_, payload) => levels[payload].vBoxes);
$maxKeys.on(setLevel, (_, payload) => levels[payload].maxKeys);

$levelId
  .on(setLevel, (_, payload) => payload)
  .on(incLevel, (level) => level + 1);

setLevel(0);
