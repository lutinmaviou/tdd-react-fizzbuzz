import PropTypes from 'prop-types';

const fizzBuzz = (nb) => {
  if (nb % 3 === 0) return 'Fizz';
  if (nb % 5 === 0) return 'Buzz';
  return nb;
};

fizzBuzz.PropTypes = {
  nb: PropTypes.number,
};

export default fizzBuzz;
