<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import StrikeThrough from './index.svelte';

  export let meta: Meta<StrikeThrough> = {
    component: StrikeThrough,
    title: 'Atoms/Information/Typography/StrikeThrough',
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

  const Template: StoryFn<StrikeThrough> = ({ ...args }) => ({
    Component: StrikeThrough,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Strike Through Text Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <StrikeThrough variant="primary">Primary Strike Through Text</StrikeThrough>
    <StrikeThrough variant="secondary">Secondary Strike Through Text</StrikeThrough>
    <StrikeThrough variant="success">Success Strike Through Text</StrikeThrough>
    <StrikeThrough variant="warning">Warning Strike Through Text</StrikeThrough>
    <StrikeThrough variant="danger">Danger Strike Through Text</StrikeThrough>
    <StrikeThrough variant="ghost">Ghost Strike Through Text</StrikeThrough>
    <StrikeThrough variant="link">Link Strike Through Text</StrikeThrough>
  </div>

  <h3 class="text-lg font-semibold mt-6">Strike Through Text Sizes</h3>
  <div class="flex flex-col space-y-2">
    <StrikeThrough size="sm">Small Strike Through Text</StrikeThrough>
    <StrikeThrough size="md">Medium Strike Through Text</StrikeThrough>
    <StrikeThrough size="lg">Large Strike Through Text</StrikeThrough>
  </div>

  <h3 class="text-lg font-semibold mt-6">Strike Through Text States</h3>
  <div class="flex flex-col space-y-2">
    <StrikeThrough disabled>Disabled Strike Through Text</StrikeThrough>
    <StrikeThrough block>Block Strike Through Text</StrikeThrough>
  </div>
</div>