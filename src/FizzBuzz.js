import PropTypes from 'prop-types';
import evaluateNumbers from './evaluateNumbers';

const fizzBuzz = (minNb, maxNb) => {
  return evaluateNumbers(minNb, maxNb);
};

fizzBuzz.PropTypes = {
  minNb: PropTypes.number,
  maxNb: PropTypes.number,
  result: PropTypes.string,
};

export default fizzBuzz;
