import {
    reduce,
    converge,
    xor,
    head,
    tail,
    or,
    pipe,
    flatten,
    reject,
    length,
} from "ramda";

export const CELL = 64;
export const WIDTH = CELL * 8;
export const HEIGHT = CELL * 10

export const xorList = converge(reduce(xor), [head, tail]);
export const _xorList = reduce(xor);
export const orList = converge(reduce(or), [head, tail]);

export const countBooleanField = pipe<boolean[][], boolean[], number>(
    flatten,
    reduce((acc, cur) => acc + Number(cur), 0)
);

export const countBooleanRow = pipe<Box[], Box[], Box[], number>(
    reject<Box>((item) => !item.type),
    reject<Box>((item) => item.state),
    length
);
