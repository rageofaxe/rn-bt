const mapBoxes = (x: Box["type"]): Box => ({
  type: x,
  state: false,
});

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
    // vBoxes: ([null, null, "xor"] as Box["type"][]).map(mapBoxes),
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
