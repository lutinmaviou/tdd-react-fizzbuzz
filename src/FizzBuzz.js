import PropTypes from 'prop-types';

const fizzBuzz = (nb) => {
  if (nb === 3) {
    return 'Fizz';
  }
  return nb;
};

fizzBuzz.PropTypes = {
  nb: PropTypes.number,
};

export default fizzBuzz;
