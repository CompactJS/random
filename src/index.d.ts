declare module '@compactjs/random';
/**
 * Returns a pseudo random number between min and max.
 * (min inclusive, max exclusive)
 * Max can be smaller than min.
 * If max is not omitted, between 0 and min.
 * If min is not omitted, between 0 and 1.
 */
export function random(min?: number, max?: number): number;

/**
 * Returns a random item from a given array
 * @param choices to select from
 */
export function pick(choices: any[]): any;
