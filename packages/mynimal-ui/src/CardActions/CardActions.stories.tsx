import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardActions, CardActionsProps } from './CardActions';

export default {
  title: 'CardActions',
  component: CardActions,
} as Meta;

const Template: Story<CardActionsProps> = (args) => {
  return <CardActions {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Some card actions',
};
