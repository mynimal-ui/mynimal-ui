import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Card } from './Card';

afterEach(cleanup);

const defaultProps = {
  children: 'Card contents',
};

describe('<Card />', () => {
  test('renders with correct contents', () => {
    const { queryByText } = render(<Card {...defaultProps} />);
    expect(queryByText(defaultProps.children)).toBeTruthy();
  });
});
