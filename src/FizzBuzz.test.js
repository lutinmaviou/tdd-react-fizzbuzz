import { render, screen } from '@testing-library/react';
import FizzBuzz from './FizzBuzz';

test('renders learn react link', () => {
  render(<FizzBuzz />);
  const linkElement = screen.getByText(/FizzBuzz/i);
  expect(linkElement).toBeInTheDocument();
});
