<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import Small from './index.svelte';

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

<Story component={Small} controls={controls}>
  {#snippet children()}
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
  {/snippet}
</Story>
