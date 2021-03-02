import React, { ReactNode, FC } from 'react';

export interface CardContentProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

export const CardContent: FC<CardContentProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
