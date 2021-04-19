/**
 * Returns a pseudo random number between min and max.
 * (min inclusive, max exclusive)
 * Max can be smaller than min.
 * If max is not omitted, between 0 and min.
 * If min is not omitted, between 0 and 1.
 */
export function random(min?: number, max?: number): number {
  if (min === undefined) return Math.random();
  if (max === undefined) return Math.random() * min;
  if (min > max) return Math.random() * (min - max) + max;
  return Math.random() * (max - min) + min;
}

/**
 * Returns a random item from a given array
 * @param choices to select from
 */
export function pick<T>(choices: T[]): T {
  return choices[Math.floor(Math.random() * choices.length)];
}
