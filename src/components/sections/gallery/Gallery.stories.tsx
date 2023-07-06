import type { Meta, StoryObj } from '@storybook/react';
import Gallery from './Gallery';
import { galleryData } from './Gallery.data';

const meta: Meta<typeof Gallery> = {
  title: 'sections/Gallery',
  component: Gallery,
  tags: ['autodocs'],
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Base: Story = {
  args: {
    ...galleryData.projects
  }
};
