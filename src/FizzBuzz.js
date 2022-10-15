import PropTypes from 'prop-types';
import evaluateNumber from './evaluateNumber';

const fizzBuzz = (minNb, maxNb) => {
  let result = evaluateNumber(minNb);
  while (minNb < maxNb) result += evaluateNumber(++minNb);
  return result;
};

fizzBuzz.PropTypes = {
  minNb: PropTypes.number,
  maxNb: PropTypes.number,
  result: PropTypes.string,
};

export default fizzBuzz;
