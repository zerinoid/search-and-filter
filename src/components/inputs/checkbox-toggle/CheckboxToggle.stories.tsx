import type { Meta, StoryObj } from '@storybook/react';
import CheckboxToggle from './CheckboxToggle';
import { baseTemplateData } from './CheckboxToggle.data';

const meta: Meta<typeof CheckboxToggle> = {
  title: 'inputs/CheckboxToggle',
  component: CheckboxToggle,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof CheckboxToggle>;

export const Unchecked: Story = {
  args: {
    ...baseTemplateData.unchecked
  }
};

export const Checked: Story = {
  args: {
    ...baseTemplateData.checked
  }
};
