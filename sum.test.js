const sum = require('./sum');

test('Suma de 3 + 4 es igual a 7', () => {
  expect(sum(3, 4)).toBe(7);
});