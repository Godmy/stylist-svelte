<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import StatusDashboard from './index.svelte';
  import type { Snippet } from 'svelte';
  import type { StatusItem } from './index.svelte';

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

  type Props = {
    title?: string;
    subtitle?: string;
    items: StatusItem[];
    layout?: 'horizontal' | 'vertical';
    size?: 'sm' | 'md' | 'lg';
  };

  const defaultItems: StatusItem[] = [
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

</script>

<div class="sb-organisms-status-dashboard">
  <Story
    {id}
    {title}
    component={StatusDashboard}
    category="Organisms"
    description="Status dashboard component for monitoring system status"
    controls={controls}
  >
    {#snippet children(props: Props)}
      <div class="p-4">
        <StatusDashboard
          items={defaultItems}
        />
      </div>
    {/snippet}
  </Story>
</div>


