const { factorial, fibonacci } = require('./math');

describe('Pruebas de factorial', () => {
  test('Factorial de 5 es 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('Factorial de 0 es 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('Factorial de número negativo retorna null', () => {
    expect(factorial(-3)).toBeNull();
  });
});

describe('Pruebas de fibonacci', () => {
  test('Fibonacci de 0 es 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('Fibonacci de 1 es 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('Fibonacci de 7 es 13', () => {
    expect(fibonacci(7)).toBe(13);
  });
});
