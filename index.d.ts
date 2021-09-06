type RootStackParamList = {
    Play: undefined;
    Menu: undefined;
};

type KeyProps = {
    state: boolean;
    coords: Coords;
};

type DoorProps = {
    state: boolean;
    box: Box;
    coords: Coords;
};

type DoorType = {
    state: boolean;
    box: Box;
};

type Level = {
    field: boolean[][];
    hBoxes: Box[];
    vBoxes: Box[];
    maxKeys: number;
};

type AnimatedSpriteProps = {
    images: ImageSourcePropType[];
    animationSpeed: number;
    state: boolean;
};

type Coords = [number, number];

type Box = "or" | "xor" | null;
type Route = "menu" | "play";
