import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Button } from './Button';

afterEach(cleanup);

const defaultProps = {
  children: 'Submit',
};

describe('<Button />', () => {
  test('button renders with correct text', () => {
    const { queryByText } = render(<Button {...defaultProps} />);
    expect(queryByText(defaultProps.children)).toBeTruthy();
  });

  test('calls correct function on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onClick={onClick} />);
    fireEvent.click(getByText(defaultProps.children));
    expect(onClick).toHaveBeenCalled();
  });
});
