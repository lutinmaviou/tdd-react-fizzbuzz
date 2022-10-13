import PropTypes from 'prop-types';

const fizzBuzz = (minNb, maxNb) => {
  let result = '';
  console.log(result);
  if (minNb % 15 === 0) {
    result += 'FizzBuzz';
  } else if (minNb % 3 === 0) {
    result += 'Fizz';
  } else if (minNb % 5 === 0) {
    result += 'Buzz';
  } else {
    result += minNb.toString();
  }
  return result;
};

fizzBuzz.PropTypes = {
  minNb: PropTypes.number,
  maxNb: PropTypes.number,
  result: PropTypes.string,
};

export default fizzBuzz;
