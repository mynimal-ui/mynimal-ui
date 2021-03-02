import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardContent } from './CardContent';

afterEach(cleanup);

const defaultProps = {
  children: 'Card contents',
};

describe('<CardContent />', () => {
  test('renders with correct contents', () => {
    const { queryByText } = render(<CardContent {...defaultProps} />);
    expect(queryByText(defaultProps.children)).toBeTruthy();
  });
});
