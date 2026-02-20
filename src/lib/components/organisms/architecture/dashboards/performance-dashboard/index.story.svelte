<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import PerformanceDashboard from './index.svelte';
  import { DollarSign, Users, ShoppingCart, Eye } from 'lucide-svelte';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

  // Sample data for the PerformanceDashboard component
  const sampleMetrics = [
    { id: 'revenue', title: 'Total Revenue', value: '$45,231.89', change: 20.1, changeType: 'positive', icon: DollarSign, color: 'bg-[--color-success-500]' },
    { id: 'subscribers', title: 'Subscriptions', value: '+2350', change: 180.1, changeType: 'positive', icon: Users, color: 'bg-[--color-primary-500]' },
    { id: 'sales', title: 'Sales', value: '+12,234', change: 19, changeType: 'positive', icon: ShoppingCart, color: 'bg-[--color-accent-500]' },
    { id: 'active', title: 'Active Now', value: '573', change: 201, changeType: 'positive', icon: Eye, color: 'bg-[--color-warning-500]' }
  ];

  const controls = [
    {
      name: 'timeRange',
      type: CONTROL_TYPES.SELECT,
      options: ['1d', '7d', '30d', '90d'],
      defaultValue: '7d'
    },
    {
      name: 'showTimeRangeSelector',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    }
  ];
</script>

<Story
  {controls}
  title="PerformanceDashboard"
  category="Organisms/Dashboards"
  description="Performance dashboard component for displaying key metrics."
  tags={['dashboard', 'metrics', 'performance', 'analytics']}
>
  {#snippet children(values: any)}
    <PerformanceDashboard
      metrics={sampleMetrics as any}
      timeRange={values.timeRange}
      showTimeRangeSelector={values.showTimeRangeSelector}
    />
  {/snippet}
</Story>


