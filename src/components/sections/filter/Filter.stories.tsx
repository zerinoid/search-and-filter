import type { Meta, StoryObj } from '@storybook/react';
import Filter from './Filter';
import { filterData } from './Filter.data';

const meta: Meta<typeof Filter> = {
  title: 'sections/Filter',
  component: Filter,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Base: Story = {
  args: {
    ...filterData.base
  }
};
