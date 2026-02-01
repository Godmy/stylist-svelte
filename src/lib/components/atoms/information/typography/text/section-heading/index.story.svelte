<script lang="ts">
  import type { Meta, StoryFn } from '@storybook/svelte';
  import SectionHeading from './index.svelte';

  export let meta: Meta<SectionHeading> = {
    component: SectionHeading,
    title: 'Atoms/Information/Typography/SectionHeading',
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

  const Template: StoryFn<SectionHeading> = ({ ...args }) => ({
    Component: SectionHeading,
    props: args,
  });
</script>

<div class="space-y-4 p-4">
  <h3 class="text-lg font-semibold">Section Heading Variants</h3>
  
  <div class="flex flex-col space-y-2">
    <SectionHeading variant="primary">Primary Section Heading</SectionHeading>
    <SectionHeading variant="secondary">Secondary Section Heading</SectionHeading>
    <SectionHeading variant="success">Success Section Heading</SectionHeading>
    <SectionHeading variant="warning">Warning Section Heading</SectionHeading>
    <SectionHeading variant="danger">Danger Section Heading</SectionHeading>
    <SectionHeading variant="ghost">Ghost Section Heading</SectionHeading>
    <SectionHeading variant="link">Link Section Heading</SectionHeading>
  </div>

  <h3 class="text-lg font-semibold mt-6">Section Heading Sizes</h3>
  <div class="flex flex-col space-y-2">
    <SectionHeading size="sm">Small Section Heading</SectionHeading>
    <SectionHeading size="md">Medium Section Heading</SectionHeading>
    <SectionHeading size="lg">Large Section Heading</SectionHeading>
  </div>

  <h3 class="text-lg font-semibold mt-6">Section Heading States</h3>
  <div class="flex flex-col space-y-2">
    <SectionHeading disabled>Disabled Section Heading</SectionHeading>
    <SectionHeading block>Block Section Heading</SectionHeading>
  </div>
</div>