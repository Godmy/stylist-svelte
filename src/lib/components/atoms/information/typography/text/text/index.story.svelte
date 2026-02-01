<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import Text from './index.svelte';

  export let meta: Meta<Text> = {
    component: Text,
    title: 'Atoms/Information/Typography/Text',
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

  const Template: StoryFn<Text> = ({ ...args }) => ({
    Component: Text,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Text Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <Text variant="primary">Primary Text</Text>
    <Text variant="secondary">Secondary Text</Text>
    <Text variant="success">Success Text</Text>
    <Text variant="warning">Warning Text</Text>
    <Text variant="danger">Danger Text</Text>
    <Text variant="ghost">Ghost Text</Text>
    <Text variant="link">Link Text</Text>
  </div>

  <h3 class="text-lg font-semibold mt-6">Text Sizes</h3>
  <div class="flex flex-col space-y-2">
    <Text size="sm">Small Text</Text>
    <Text size="md">Medium Text</Text>
    <Text size="lg">Large Text</Text>
  </div>

  <h3 class="text-lg font-semibold mt-6">Text States</h3>
  <div class="flex flex-col space-y-2">
    <Text disabled>Disabled Text</Text>
    <Text block>Block Text</Text>
  </div>
</div>