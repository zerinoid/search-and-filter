import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';
import { baseTemplateData } from './SearchBox.data';

const meta: Meta<typeof SearchBox> = {
  title: 'inputs/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Base: Story = {
  args: {
    ...baseTemplateData.base
  }
};
