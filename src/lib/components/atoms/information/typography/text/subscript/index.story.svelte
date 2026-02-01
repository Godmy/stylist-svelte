<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import Subscript from './index.svelte';

  export let meta: Meta<Subscript> = {
    component: Subscript,
    title: 'Atoms/Information/Typography/Subscript',
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

  const Template: StoryFn<Subscript> = ({ ...args }) => ({
    Component: Subscript,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Subscript Text Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <Subscript variant="primary">Primary Subscript Text</Subscript>
    <Subscript variant="secondary">Secondary Subscript Text</Subscript>
    <Subscript variant="success">Success Subscript Text</Subscript>
    <Subscript variant="warning">Warning Subscript Text</Subscript>
    <Subscript variant="danger">Danger Subscript Text</Subscript>
    <Subscript variant="ghost">Ghost Subscript Text</Subscript>
    <Subscript variant="link">Link Subscript Text</Subscript>
  </div>

  <h3 class="text-lg font-semibold mt-6">Subscript Text Sizes</h3>
  <div class="flex flex-col space-y-2">
    <Subscript size="sm">Small Subscript Text</Subscript>
    <Subscript size="md">Medium Subscript Text</Subscript>
    <Subscript size="lg">Large Subscript Text</Subscript>
  </div>

  <h3 class="text-lg font-semibold mt-6">Subscript Text States</h3>
  <div class="flex flex-col space-y-2">
    <Subscript disabled>Disabled Subscript Text</Subscript>
    <Subscript block>Block Subscript Text</Subscript>
  </div>
</div>