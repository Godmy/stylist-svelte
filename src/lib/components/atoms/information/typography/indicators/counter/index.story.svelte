<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import Counter from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'count', type: 'select', options: ['0', '1', '5', '10', '15', '25', '50', '99', '100', '150'], defaultValue: '5' },
    { name: 'max', type: 'select', options: ['10', '50', '99', '100', '200'], defaultValue: '99' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'], defaultValue: 'primary' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
  ];
</script>

<Story
  id="atoms-counter"
  title="Counter"
  component={Counter}
  category="Atoms"
  description="A small badge to display numerical counts, often used for notifications."
  controls={controls}
>
  {#snippet children(values: any)}
    {@const count = Number(values.count)}
    {@const max = Number(values.max)}
    <div class="mt-2 flex items-center space-x-4">
      <Counter count={Number.isNaN(count) ? 5 : count} max={Number.isNaN(max) ? 99 : max} variant={values.variant} size={values.size} />
      <span class="text-[--color-text-primary]">Notifications</span>
    </div>
  {/snippet}
</Story>
