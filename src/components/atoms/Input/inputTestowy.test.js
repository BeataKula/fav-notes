import React from 'react';
import { render } from '@testing-library/react';
import InputTestowy from './inputTestowy';

describe('Input component', () => {
  it('renders input element', () => {
    const placeholderText = 'Name';
    const { getByPlaceholderText } = render(<InputTestowy placeholder={placeholderText} />);

    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });

  it('display default placeholder', () => {
    const defaultPlaceholderText = 'Your Value';
    const { getByPlaceholderText } = render(<InputTestowy />);

    expect(getByPlaceholderText(defaultPlaceholderText)).toBeInTheDocument();
  });
});
