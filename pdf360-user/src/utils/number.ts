export const humanizeNumber = (num: number): string =>
  Intl.NumberFormat(undefined, {
    notation: 'compact',
    maximumFractionDigits: 2,
  }).format(num);
