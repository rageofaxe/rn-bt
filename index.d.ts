declare module "react-pixelify" {
    declare Pixelify: any
}

type KeyProps = {
    state: boolean,
    coords: Coords,
}

type DoorProps = {
    state: boolean,
    box: Box,
    coords: Coords,
}

type DoorType = {
    state: boolean,
    box: Box,
}

type Level = {
    field: boolean[][];
    hBoxes: Box[];
    vBoxes: Box[];
    maxKeys: number;
};

type Coords = [number, number]

type Box = 'or' | 'xor' | null
type Route = "menu" | "play"