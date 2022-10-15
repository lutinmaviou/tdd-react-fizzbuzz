import PropTypes from 'prop-types';

const evaluateNumber = (nb) => {
  if (nb % 15 === 0) return 'FizzBuzz';
  if (nb % 3 === 0) return 'Fizz';
  if (nb % 5 === 0) return 'Buzz';
  return nb.toString();
};

evaluateNumber.PropTypes = {
  nb: PropTypes.number,
};

export default evaluateNumber;
