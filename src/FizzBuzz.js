import PropTypes from 'prop-types';
import evaluateNumber from './evaluateNumber';

const fizzBuzz = (minNb, maxNb) => {
  let result = evaluateNumber(minNb);
  if (minNb < maxNb) result += evaluateNumber(maxNb);
  return result;
};

fizzBuzz.PropTypes = {
  minNb: PropTypes.number,
  maxNb: PropTypes.number,
  result: PropTypes.string,
};

export default fizzBuzz;
