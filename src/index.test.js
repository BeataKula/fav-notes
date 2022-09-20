import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './views/Root';

it('renders welcome message', () => {
  render(<Root />);
  const balance = screen.getByText(/Fav/);
  expect(balance).toBeInTheDocument();
});
