import PropTypes from 'prop-types';
import evaluateNumber from './evaluateNumber';

const evaluateNumbers = (minNb, maxNb) => {
  let result = '';
  while (minNb <= maxNb) result += evaluateNumber(minNb++);
  return result;
};

evaluateNumber.PropTypes = {
  minNb: PropTypes.number,
  maxNb: PropTypes.number,
};

export default evaluateNumbers;
