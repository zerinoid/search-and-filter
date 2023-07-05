import type { Meta, StoryObj } from '@storybook/react';
import BaseTemplate from './BaseTemplate';
import { baseTemplateData } from './BaseTemplate.data';

const meta: Meta<typeof BaseTemplate> = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof BaseTemplate>;

export const Base: Story = {
  args: {
    ...baseTemplateData.base
  }
};
