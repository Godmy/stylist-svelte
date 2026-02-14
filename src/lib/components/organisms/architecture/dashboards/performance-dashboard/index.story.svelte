<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PerformanceDashboard from './index.svelte';
  import { DollarSign, Users, ShoppingCart, Eye } from 'lucide-svelte';
  import type { Metric, TimeRange } from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = []
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample data for the PerformanceDashboard component
  const sampleMetrics: Metric[] = [
    { id: 'revenue', title: 'Total Revenue', value: '$45,231.89', change: 20.1, changeType: 'positive', icon: DollarSign, color: 'bg-[--color-success-500]' },
    { id: 'subscribers', title: 'Subscriptions', value: '+2350', change: 180.1, changeType: 'positive', icon: Users, color: 'bg-[--color-primary-500]' },
    { id: 'sales', title: 'Sales', value: '+12,234', change: 19, changeType: 'positive', icon: ShoppingCart, color: 'bg-[--color-accent-500]' },
    { id: 'active', title: 'Active Now', value: '573', change: 201, changeType: 'positive', icon: Eye, color: 'bg-[--color-warning-500]' }
  ];
</script>

<div class="sb-organisms-performance-dashboard">
  <Story
    {id}
    {title}
    {description}
    component={PerformanceDashboard}
    category="Organisms"
    controls={controls}
  >
    {#snippet children(props: {})}
      <PerformanceDashboard
        metrics={sampleMetrics}
      />
    {/snippet}
  </Story>
</div>


