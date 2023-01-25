import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('calculates the correct result', () => {
    const { getByText } = render(<App />);

    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));

    expect(getByText('3')).toBeInTheDocument();
  });
});

