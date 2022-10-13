import fizzBuzz from './fizzBuzz';

test('should return 1 if number is 1', () => {
  expect(fizzBuzz(1, 1)).toBe('1');
});

test('should return 2 if number is 2', () => {
  expect(fizzBuzz(2, 2)).toBe('2');
});

test('should return Fizz if number is 3', () => {
  expect(fizzBuzz(3, 3)).toBe('Fizz');
});

test('should return Fizz if number is 6', () => {
  expect(fizzBuzz(6, 6)).toBe('Fizz');
});

test('should return Buzz if number is 5', () => {
  expect(fizzBuzz(5, 5)).toBe('Buzz');
});

test('should return Buzz if number is 10', () => {
  expect(fizzBuzz(10, 10)).toBe('Buzz');
});

test('should return FizzBuzz if number is 15', () => {
  expect(fizzBuzz(15, 15)).toBe('FizzBuzz');
});

test('should return FizzBuzz if number is 30', () => {
  expect(fizzBuzz(30, 30)).toBe('FizzBuzz');
});

test('should return 12 if numbers are 1 and 2', () => {
  expect(fizzBuzz(1, 2)).toBe('12');
});
