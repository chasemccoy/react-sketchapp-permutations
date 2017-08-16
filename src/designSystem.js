export const spacing = 16;

export const colors = [
  '#F3F4F4',
  '#333',
  '#96DBE4',
  '#24828F',
  '#EFADA0',
  '#E37059',
  '#93DAAB',
  '#2E854B',
];

export const typeSizes = [80, 48, 36, 24, 20, 16];

export const swatchSizes = [80, 48, 36, 24, 20, 16];

export const borderRadii = [0, 2, 4, 6, 8, 10, 12, 20, 40, 100];

export const fontFamilies = [
  'Helvetica',
  'Georgia',
  'Proxima Nova',
  'Marker Felt',
  'Tofino Personal'
];

export const fontWeights = [
  'regular',
  'bold',
];

export const fontStyles = [
  'normal',
  'italic',
];

export default {
  colors,
  fontFamilies,
  typeSizes,
  fontWeights,
  spacing,
  fontStyles,
  swatchSizes,
  borderRadii,
};

export type DesignSystem = {
  fontFamilies: [string],
  typeSizes: [number],
  colors: [string],
  fontWeights: [string],
  fontStyles: [string],
  swatchSizes: [number],
  borderRadii: [number],
};
