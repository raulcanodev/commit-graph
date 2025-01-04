export const getColorForDots = (count, colorScheme) => {
  if (count === 0) return colorScheme[0];
  if (count <= 3) return colorScheme[1];
  if (count <= 6) return colorScheme[2];
  if (count <= 9) return colorScheme[3];
  return colorScheme[4];
};