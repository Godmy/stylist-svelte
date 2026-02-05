<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import Heading from './index.svelte';

  const controls: ControlConfig[] = [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link']
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg']
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'block',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story component={Heading} controls={controls}>
  {#snippet children()}
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
  {/snippet}
</Story>
