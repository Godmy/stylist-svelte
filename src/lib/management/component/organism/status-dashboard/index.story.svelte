<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import StatusDashboard from './index.svelte';
  import { TOKEN_CONTROLLER_TYPE } from '$stylist/interaction/const/map/controller-type';

  const defaultItems = [
    {
      id: 'api-service',
      title: 'API Service',
      description: 'Core API functionality',
      status: 'success',
      value: 'Operational'
    },
    {
      id: 'database',
      title: 'Database',
      description: 'Data storage and retrieval',
      status: 'warning',
      value: 'Degraded Performance'
    },
    {
      id: 'frontend',
      title: 'Frontend',
      description: 'User interface availability',
      status: 'error',
      value: 'Outage'
    },
    {
      id: 'payments',
      title: 'Payment Gateway',
      description: 'Processing payments',
      status: 'pending',
      value: 'Investigating'
    }
  ];

  const controls = [
    {
      name: 'layout',
      type: TOKEN_CONTROLLER_TYPE.SELECT,
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
    },
    {
      name: 'size',
      type: TOKEN_CONTROLLER_TYPE.SELECT,
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    }
  ];
</script>

<Story
  {controls}
  title="StatusDashboard"
  category="Organisms/Dashboards"
  description="Status dashboard component for monitoring system status."
  tags={['dashboard', 'status', 'monitoring', 'system']}
>
  {#snippet children(values: any)}
    <StatusDashboard
      items={defaultItems as any}
      layout={values.layout}
      size={values.size}
    />
  {/snippet}
</Story>





