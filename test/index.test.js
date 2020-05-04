const { random, pick } = require('../dist/index');

describe('random', () => {
  describe('Generates a random number', () => {
    describe.each([random(), random(), random()])(
      'without arguments',
      (number) => {
        test('returns number greater or equal 0', () => {
          expect(number).toBeGreaterThanOrEqual(0);
        });
        test('returns number less or equal 1', () => {
          expect(number).toBeLessThanOrEqual(1);
        });
      }
    );
    describe('with a single argument', () => {
      test.each([10, 3, 7])(
        'returns number between 0 and given argument',
        (testedNumber) => {
          const number = random(testedNumber);
          expect(number).toBeLessThanOrEqual(testedNumber);
          expect(number).toBeGreaterThanOrEqual(0);
        }
      );
      test.each([-10, -3, -7])(
        'returns number between given argument and 0 for negative values',
        (testedNumber) => {
          const number = random(testedNumber);
          expect(number).toBeLessThanOrEqual(0);
          expect(number).toBeGreaterThanOrEqual(testedNumber);
        }
      );
    });
    describe('with a multiple arguments', () => {
      test.each([[[0, 1]], [[-7, 7]], [[5, 10]]])(
        'returns number between two arguments %o (%#/3)',
        (testedArguments) => {
          const number = random(testedArguments[0], testedArguments[1]);
          expect(number).toBeLessThanOrEqual(testedArguments[1]);
          expect(number).toBeGreaterThanOrEqual(testedArguments[0]);
        }
      );
      test.each([[[1, 0]], [[7, -7]], [[15, 10]], [[100, 5]]])(
        'returns number between two arguments with min > max %o (%#/3)',
        (testedArguments) => {
          const number = random(testedArguments[0], testedArguments[1]);
          expect(number).toBeLessThanOrEqual(testedArguments[0]);
          expect(number).toBeGreaterThanOrEqual(testedArguments[1]);
        }
      );
    });
  });

  describe('Returns NaN for invalid values', () => {
    test('with string', () => {
      expect(random('abc')).toBe(NaN);
    });
    test('with object', () => {
      expect(random({ a: 0 })).toBe(NaN);
    });
  });
});

describe('pick:', () => {
  test.each([[[0, 1, 2, 3, 4]], [['a', 'b', 'c', 'd']]])(
    'returns one value from array',
    (array) => {
      expect(array.indexOf(pick(array))).toBeGreaterThan(-1);
    }
  );
});
