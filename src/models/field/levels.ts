export const levels: Level[] = [
    {
        field: [
            [...new Array(5)].map(x => false),
            [...new Array(5)].map(x => false),
            [...new Array(5)].map(x => false),
            [...new Array(5)].map(x => false),
            [...new Array(5)].map(x => false),
        ],
        hBoxes: ["xor", null, null],
        vBoxes: [null, null, "xor"],
        maxKeys: 3,
    },
    {
        field: [
            [false, false, false],
            [false, false, false],
        ],
        hBoxes: ["xor", "xor", "xor"],
        vBoxes: [null, null, null],
        maxKeys: 3,
    },
    {
        field: [
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ],
        hBoxes: ["xor", "xor", null],
        vBoxes: [null, null, "xor"],
        maxKeys: 3,
    },
    {
        field: [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ],
        hBoxes: ["xor", null, null],
        vBoxes: [null, null, "xor"],
        maxKeys: 3,
    },

];
