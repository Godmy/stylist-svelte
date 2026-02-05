<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import Strong from './index.svelte';

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

<Story component={Strong} controls={controls}>
  {#snippet children()}
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
  {/snippet}
</Story>
