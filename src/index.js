export const random = (min, max) => {
  if (min === undefined) return Math.random();
  if (max === undefined) return Math.random() * min;
  if (min > max) return Math.random() * (min - max) + max;
  return Math.random() * (max - min) + min;
};

export const pick = (choices) => {
  return choices[Math.floor(Math.random() * choices.length)];
};
