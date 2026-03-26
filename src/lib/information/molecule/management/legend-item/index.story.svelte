<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import LegendItem from './index.svelte';

  let clickCount = $state(0);

  const controls: InterfaceControllerSettings[] = [
    { name: 'label', type: 'text', defaultValue: 'GraphQL Object' },
    { name: 'type', type: 'select', options: ['object', 'interface', 'union', 'enum', 'scalar', 'input'], defaultValue: 'object' },
    { name: 'count', type: 'number', defaultValue: 5, min: 0 },
    { name: 'variant', type: 'select', options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'], defaultValue: 'primary' },
    { name: 'active', type: 'boolean', defaultValue: true },
    { name: 'interactive', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="molecules-legend-item"
  title="Molecules / Information / Management / LegendItem"
  component={LegendItem}
  category="Molecules/Information/Management"
  description="Legend row with type icon, count badge and optional interaction."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 rounded-xl bg-[var(--color-background-secondary)] space-y-3">
      <LegendItem
        label={args.label}
        type={args.type}
        count={args.count}
        variant={args.variant}
        active={args.active}
        onClick={args.interactive ? () => (clickCount += 1) : undefined}
      />
      <p class="text-sm text-[var(--color-text-secondary)]">Click count: {clickCount}</p>
    </div>
  {/snippet}
</Story>




