<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import LegendItem from './index.svelte';

  type LegendItemProps = {
    label: string;
    type: 'object' | 'interface' | 'union' | 'enum' | 'scalar' | 'input';
    count: number;
    variant: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    active: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Sample Legend Item'
    },
    {
      name: 'type',
      type: 'select',
      options: ['object', 'interface', 'union', 'enum', 'scalar', 'input'],
      defaultValue: 'object'
    },
    {
      name: 'count',
      type: 'number',
      defaultValue: 5,
      min: 0
    },
    {
      name: 'variant',
      type: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'default'
    },
    {
      name: 'active',
      type: 'boolean',
      defaultValue: false
    }
  ];

  let clickCount = $state(0);
  
  const handleClick = () => {
    clickCount++;
    console.log('Legend item clicked!', { clickCount });
  };
</script>

<Story
  id="molecules-legend-item"
  title="Molecules / Information / Management / LegendItem"
  component={LegendItem}
  category="Molecules/Information/Management"
  description="A legend item component for displaying categorized information."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-legend-item p-6 bg-gray-50 rounded-lg">
      <h2 class="text-lg font-semibold mb-4">LegendItem Component</h2>
      
      <div class="space-y-3">
        <LegendItem
          label={args.label}
          type={args.type}
          count={args.count}
          variant={args.variant}
          active={args.active}
          onClick={args.clickable ? handleClick : undefined}
        />
        
        <div class="mt-6 p-4 bg-white rounded border">
          <h3 class="font-medium mb-2">LegendItem Variants</h3>
          <div class="space-y-2">
            <LegendItem
              label="Primary Item"
              type="object"
              count={12}
              variant="primary"
            />
            <LegendItem
              label="Secondary Item"
              type="interface"
              count={5}
              variant="secondary"
            />
            <LegendItem
              label="Success Item"
              type="enum"
              count={8}
              variant="success"
            />
            <LegendItem
              label="Warning Item"
              type="union"
              variant="warning"
            />
            <LegendItem
              label="Danger Item"
              type="scalar"
              count={3}
              variant="danger"
            />
          </div>
        </div>
        
        <div class="mt-4 text-sm text-gray-600">
          Click count: {clickCount}
        </div>
      </div>
    </div>
  {/snippet}
</Story>

