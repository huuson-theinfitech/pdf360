const DEFAULT_FONT_SIZE = 16;

export const remToPx = (value: number) => Math.round(value * DEFAULT_FONT_SIZE);

export const pxToRem = (value: number) => `${value / DEFAULT_FONT_SIZE}rem`;
