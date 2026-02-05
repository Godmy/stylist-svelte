<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import Text from './index.svelte';

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

<Story component={Text} controls={controls}>
  {#snippet children()}
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
  {/snippet}
</Story>
