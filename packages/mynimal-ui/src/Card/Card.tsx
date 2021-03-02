import React, { ReactNode, FC } from 'react';

export interface CardProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
