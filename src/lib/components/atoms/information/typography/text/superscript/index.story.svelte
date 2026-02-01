<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import Superscript from './index.svelte';

  export let meta: Meta<Superscript> = {
    component: Superscript,
    title: 'Atoms/Information/Typography/Superscript',
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

  const Template: StoryFn<Superscript> = ({ ...args }) => ({
    Component: Superscript,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Superscript Text Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <Superscript variant="primary">Primary Superscript Text</Superscript>
    <Superscript variant="secondary">Secondary Superscript Text</Superscript>
    <Superscript variant="success">Success Superscript Text</Superscript>
    <Superscript variant="warning">Warning Superscript Text</Superscript>
    <Superscript variant="danger">Danger Superscript Text</Superscript>
    <Superscript variant="ghost">Ghost Superscript Text</Superscript>
    <Superscript variant="link">Link Superscript Text</Superscript>
  </div>

  <h3 class="text-lg font-semibold mt-6">Superscript Text Sizes</h3>
  <div class="flex flex-col space-y-2">
    <Superscript size="sm">Small Superscript Text</Superscript>
    <Superscript size="md">Medium Superscript Text</Superscript>
    <Superscript size="lg">Large Superscript Text</Superscript>
  </div>

  <h3 class="text-lg font-semibold mt-6">Superscript Text States</h3>
  <div class="flex flex-col space-y-2">
    <Superscript disabled>Disabled Superscript Text</Superscript>
    <Superscript block>Block Superscript Text</Superscript>
  </div>
</div>