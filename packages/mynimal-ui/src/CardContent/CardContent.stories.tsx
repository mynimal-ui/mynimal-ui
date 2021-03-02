import React from 'react';
import { Story, Meta } from '@storybook/react';
import { CardContent, CardContentProps } from './CardContent';

export default {
  title: 'CardContent',
  component: CardContent,
} as Meta;

const Template: Story<CardContentProps> = (args) => {
  return <CardContent {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Some card contents',
};
