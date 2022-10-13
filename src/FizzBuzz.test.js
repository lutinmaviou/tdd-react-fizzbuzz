import fizzBuzz from './fizzBuzz';

test('should return 1 if number is 1', () => {
  expect(fizzBuzz(1)).toBe(1);
});

test('should return 2 if number is 2', () => {
  expect(fizzBuzz(2)).toBe(2);
});

test('should return Fizz if number is 3', () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});

test('should return Fizz if number is 6', () => {
  expect(fizzBuzz(6)).toBe("Fizz");
});

test('should return Buzz if number is 5', () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});

test('should return Buzz if number is 10', () => {
  expect(fizzBuzz(10)).toBe("Buzz");
});
