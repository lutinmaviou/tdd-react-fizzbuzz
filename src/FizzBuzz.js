import PropTypes from 'prop-types';

const fizzBuzz = (minNb, maxNb) => {
  let result = '';
  if (minNb % 15 === 0) {
    result += 'FizzBuzz';
  } else if (minNb % 3 === 0) {
    result += 'Fizz';
  } else if (minNb % 5 === 0) {
    result += 'Buzz';
  } else {
    result += minNb.toString();
  }
  if (minNb < maxNb) {
    if (maxNb % 15 === 0) {
      result += 'FizzBuzz';
    } else if (maxNb % 3 === 0) {
      result += 'Fizz';
    } else if (maxNb % 5 === 0) {
      result += 'Buzz';
    } else {
      result += maxNb.toString();
    }
  }
  return result;
};

fizzBuzz.PropTypes = {
  minNb: PropTypes.number,
  maxNb: PropTypes.number,
  result: PropTypes.string,
};

export default fizzBuzz;
