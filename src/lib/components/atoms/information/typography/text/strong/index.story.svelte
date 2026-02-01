<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import Strong from './index.svelte';

  export let meta: Meta<Strong> = {
    component: Strong,
    title: 'Atoms/Information/Typography/Strong',
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

  const Template: StoryFn<Strong> = ({ ...args }) => ({
    Component: Strong,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Strong Text Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <Strong variant="primary">Primary Strong Text</Strong>
    <Strong variant="secondary">Secondary Strong Text</Strong>
    <Strong variant="success">Success Strong Text</Strong>
    <Strong variant="warning">Warning Strong Text</Strong>
    <Strong variant="danger">Danger Strong Text</Strong>
    <Strong variant="ghost">Ghost Strong Text</Strong>
    <Strong variant="link">Link Strong Text</Strong>
  </div>

  <h3 class="text-lg font-semibold mt-6">Strong Text Sizes</h3>
  <div class="flex flex-col space-y-2">
    <Strong size="sm">Small Strong Text</Strong>
    <Strong size="md">Medium Strong Text</Strong>
    <Strong size="lg">Large Strong Text</Strong>
  </div>

  <h3 class="text-lg font-semibold mt-6">Strong Text States</h3>
  <div class="flex flex-col space-y-2">
    <Strong disabled>Disabled Strong Text</Strong>
    <Strong block>Block Strong Text</Strong>
  </div>
</div>