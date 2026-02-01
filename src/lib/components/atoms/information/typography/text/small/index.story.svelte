<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import Small from './index.svelte';

  export let meta: Meta<Small> = {
    component: Small,
    title: 'Atoms/Information/Typography/Small',
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

  const Template: StoryFn<Small> = ({ ...args }) => ({
    Component: Small,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Small Text Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <Small variant="primary">Primary Small Text</Small>
    <Small variant="secondary">Secondary Small Text</Small>
    <Small variant="success">Success Small Text</Small>
    <Small variant="warning">Warning Small Text</Small>
    <Small variant="danger">Danger Small Text</Small>
    <Small variant="ghost">Ghost Small Text</Small>
    <Small variant="link">Link Small Text</Small>
  </div>

  <h3 class="text-lg font-semibold mt-6">Small Text Sizes</h3>
  <div class="flex flex-col space-y-2">
    <Small size="sm">Small Small Text</Small>
    <Small size="md">Medium Small Text</Small>
    <Small size="lg">Large Small Text</Small>
  </div>

  <h3 class="text-lg font-semibold mt-6">Small Text States</h3>
  <div class="flex flex-col space-y-2">
    <Small disabled>Disabled Small Text</Small>
    <Small block>Block Small Text</Small>
  </div>
</div>