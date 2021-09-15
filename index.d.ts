type RootStackParamList = {
  Play: undefined;
  Menu: undefined;
};

type KeyProps = {
  state: boolean;
  coords: Coords;
};

type DoorProps = {
  box: Box;
  coords: Coords;
};

type GameMode = "random" | "tutorial" | null

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

type Box = {
  state: boolean;
  type: "or" | "xor" | null;
};
type Route = "menu" | "play";
