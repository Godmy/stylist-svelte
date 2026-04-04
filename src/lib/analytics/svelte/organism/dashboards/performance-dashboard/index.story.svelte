<script lang="ts">
  import Story from '$stylist/development/svelte/playground/Story.svelte';
  import PerformanceDashboard from './index.svelte';
  import { TOKEN_CONTROLLER_TYPE } from '$stylist/interaction/const/map/controller-type';

  const sampleMetrics = [
    { id: 'revenue', title: 'Total Revenue', value: '$45,231.89', change: 20.1, changeType: 'positive', icon: 'dollar-sign', color: 'bg-[--color-success-500]' },
    { id: 'subscribers', title: 'Subscriptions', value: '+2350', change: 180.1, changeType: 'positive', icon: 'users', color: 'bg-[--color-primary-500]' },
    { id: 'sales', title: 'Sales', value: '+12,234', change: 19, changeType: 'positive', icon: 'shopping-cart', color: 'bg-[--color-accent-500]' },
    { id: 'active', title: 'Active Now', value: '573', change: 201, changeType: 'positive', icon: 'eye', color: 'bg-[--color-warning-500]' }
  ];

  const controls = [
    {
      name: 'timeRange',
      type: TOKEN_CONTROLLER_TYPE.SELECT,
      options: ['1d', '7d', '30d', '90d'],
      defaultValue: '7d'
    },
    {
      name: 'showTimeRangeSelector',
      type: TOKEN_CONTROLLER_TYPE.BOOLEAN,
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
      label="Performance Dashboard"
      subtitle="Key business metrics for the selected time range"
      metrics={sampleMetrics as any}
      timeRange={values.timeRange}
      showTimeRangeSelector={values.showTimeRangeSelector}
    />
  {/snippet}
</Story>
