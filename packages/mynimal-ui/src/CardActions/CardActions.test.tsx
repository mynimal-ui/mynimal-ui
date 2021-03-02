import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardActions } from './CardActions';

afterEach(cleanup);

const defaultProps = {
  children: 'Card actions',
};

describe('<CardActions />', () => {
  test('renders with correct contents', () => {
    const { queryByText } = render(<CardActions {...defaultProps} />);
    expect(queryByText(defaultProps.children)).toBeTruthy();
  });
});
