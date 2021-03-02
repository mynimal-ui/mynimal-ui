import React, { ReactNode, FC } from 'react';

export interface CardActionsProps {
  /**
   * The content of the component.
   */
  children?: ReactNode;
}

export const CardActions: FC<CardActionsProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
