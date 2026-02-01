<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import Heading from './index.svelte';

  export let meta: Meta<Heading> = {
    component: Heading,
    title: 'Atoms/Information/Typography/Heading',
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

  const Template: StoryFn<Heading> = ({ ...args }) => ({
    Component: Heading,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Heading Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <Heading variant="primary">Primary Heading</Heading>
    <Heading variant="secondary">Secondary Heading</Heading>
    <Heading variant="success">Success Heading</Heading>
    <Heading variant="warning">Warning Heading</Heading>
    <Heading variant="danger">Danger Heading</Heading>
    <Heading variant="ghost">Ghost Heading</Heading>
    <Heading variant="link">Link Heading</Heading>
  </div>

  <h3 class="text-lg font-semibold mt-6">Heading Sizes</h3>
  <div class="flex flex-col space-y-2">
    <Heading size="sm">Small Heading</Heading>
    <Heading size="md">Medium Heading</Heading>
    <Heading size="lg">Large Heading</Heading>
  </div>

  <h3 class="text-lg font-semibold mt-6">Heading States</h3>
  <div class="flex flex-col space-y-2">
    <Heading disabled>Disabled Heading</Heading>
    <Heading block>Block Heading</Heading>
  </div>
</div>