import type { Meta, StoryObj } from '@storybook/react';
import PrimaryLayout from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

const meta: Meta<typeof PrimaryLayout> = {
  title: 'layouts/PrimaryLayout',
  component: PrimaryLayout,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof PrimaryLayout>;

export const Base: Story = {
  args: {
    ...mockPrimaryLayoutProps.base
  }
};
