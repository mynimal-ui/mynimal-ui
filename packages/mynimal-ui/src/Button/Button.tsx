import React, { FC } from 'react';

export interface ButtonProps {
  /**
   * The content of the component.
   */
  children: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};
