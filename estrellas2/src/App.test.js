import { render, screen } from '@testing-library/react';
import StarMatch  from './Aplicacion';

test('renders learn react link', () => {
  render(<StarMatch />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
