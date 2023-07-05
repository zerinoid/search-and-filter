import type { Meta, StoryObj } from '@storybook/react';
import ButtonAmazing from './ButtonAmazing';
import { mockButtonAmazingProps } from './ButtonAmazing.mocks';

const meta: Meta<typeof ButtonAmazing> = {
  title: 'buttons/ButtonAmazing',
  component: ButtonAmazing,
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ButtonAmazing>;

export const Primary: Story = {
  args: {
    ...mockButtonAmazingProps.base,
    primary: true
  }
};

export const Secondary: Story = {
  args: {
    ...mockButtonAmazingProps.base
  }
};
