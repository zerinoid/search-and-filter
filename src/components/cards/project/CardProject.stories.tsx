import type { Meta, StoryObj } from '@storybook/react';
import CardProject from './CardProject';

const meta: Meta<typeof CardProject> = {
  title: 'cards/Project',
  component: CardProject,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof CardProject>;

export const Base: Story = {
  args: {}
};
