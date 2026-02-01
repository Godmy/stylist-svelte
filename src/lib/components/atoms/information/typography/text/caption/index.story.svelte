<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import Caption from './index.svelte';

  export let meta: Meta<Caption> = {
    component: Caption,
    title: 'Atoms/Information/Typography/Caption',
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

  const Template: StoryFn<Caption> = ({ ...args }) => ({
    Component: Caption,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Caption Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <Caption variant="primary">Primary Caption</Caption>
    <Caption variant="secondary">Secondary Caption</Caption>
    <Caption variant="success">Success Caption</Caption>
    <Caption variant="warning">Warning Caption</Caption>
    <Caption variant="danger">Danger Caption</Caption>
    <Caption variant="ghost">Ghost Caption</Caption>
    <Caption variant="link">Link Caption</Caption>
  </div>

  <h3 class="text-lg font-semibold mt-6">Caption Sizes</h3>
  <div class="flex flex-col space-y-2">
    <Caption size="sm">Small Caption</Caption>
    <Caption size="md">Medium Caption</Caption>
    <Caption size="lg">Large Caption</Caption>
  </div>

  <h3 class="text-lg font-semibold mt-6">Caption States</h3>
  <div class="flex flex-col space-y-2">
    <Caption disabled>Disabled Caption</Caption>
    <Caption block>Block Caption</Caption>
  </div>
</div>