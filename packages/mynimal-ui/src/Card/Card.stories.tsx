import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => {
  return <Card {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Some card contents',
};
