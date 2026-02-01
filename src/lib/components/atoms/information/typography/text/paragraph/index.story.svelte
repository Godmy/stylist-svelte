<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import Paragraph from './index.svelte';

  export let meta: Meta<Paragraph> = {
    component: Paragraph,
    title: 'Atoms/Information/Typography/Paragraph',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'],
      },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg'],
      },
      disabled: {
        control: { type: 'boolean' },
      },
      block: {
        control: { type: 'boolean' },
      },
      class: {
        control: { type: 'text' },
      },
    },
  };

  const Template: StoryFn<Paragraph> = ({ ...args }) => ({
    Component: Paragraph,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Paragraph Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <Paragraph variant="primary">Primary Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
    <Paragraph variant="secondary">Secondary Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
    <Paragraph variant="success">Success Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
    <Paragraph variant="warning">Warning Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
    <Paragraph variant="danger">Danger Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
    <Paragraph variant="ghost">Ghost Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
    <Paragraph variant="link">Link Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
  </div>

  <h3 class="text-lg font-semibold mt-6">Paragraph Sizes</h3>
  <div class="flex flex-col space-y-2">
    <Paragraph size="sm">Small Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
    <Paragraph size="md">Medium Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
    <Paragraph size="lg">Large Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
  </div>

  <h3 class="text-lg font-semibold mt-6">Paragraph States</h3>
  <div class="flex flex-col space-y-2">
    <Paragraph disabled>Disabled Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
    <Paragraph block>Block Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
  </div>
</div>