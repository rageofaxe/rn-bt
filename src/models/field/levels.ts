const mapBoxes = (x: Box["type"]): Box => ({
  type: x,
  state: false,
});

const between = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min

export const getRandomField = (): Level => {
  const arraySize = between(3,6)
  return {
    field: [
      [...new Array(arraySize)].map((x) => false),
      [...new Array(arraySize)].map((x) => false),
      [...new Array(arraySize)].map((x) => false),
      [...new Array(arraySize)].map((x) => false),
    ],
    hBoxes: (["xor", null, null] as Box["type"][]).map(mapBoxes),
    vBoxes: [{ state: false, type: null }, { state: true, type: "xor" }],
    maxKeys: 3,
  }
}

export const levels: Level[] = [
  {
    field: [
      [...new Array(5)].map((x) => false),
      [...new Array(5)].map((x) => false),
      [...new Array(5)].map((x) => false),
      [...new Array(5)].map((x) => false),
      [...new Array(5)].map((x) => false),
    ],
    hBoxes: (["xor", null, null] as Box["type"][]).map(mapBoxes),
    vBoxes: [{ state: false, type: null }, { state: true, type: "xor" }],
    maxKeys: 3,
  },
  {
    field: [
      [false, false, false],
      [false, false, false],
    ],
    hBoxes: (["xor", "xor", "xor"] as Box["type"][]).map(mapBoxes),
    vBoxes: ([null, null, null] as Box["type"][]).map(mapBoxes),
    maxKeys: 3,
  },
  {
    field: [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
    hBoxes: (["xor", "xor", null] as Box["type"][]).map(mapBoxes),
    vBoxes: ([null, null, "xor"] as Box["type"][]).map(mapBoxes),
    maxKeys: 3,
  },
  {
    field: [
      [false, false, false],
      [false, true, false],
      [false, false, false],
    ],
    hBoxes: (["xor", null, null] as Box["type"][]).map(mapBoxes),
    vBoxes: ([null, null, "xor"] as Box["type"][]).map(mapBoxes),
    maxKeys: 3,
  },
];


