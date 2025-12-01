<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import DashboardCard from './DashboardCard.svelte';

  type DashboardCardStoryProps = {
    title: string;
    value: string;
    description: string;
    trend: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Alternative Dashboard Card'
    },
    {
      name: 'value',
      type: 'text',
      defaultValue: '987'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'This is an alternative view'
    },
    {
      name: 'trend',
      type: 'text',
      defaultValue: '+5.2%'
    }
  ];
</script>

<Story
  id="molecules-dashboard-card-alt"
  title="DashboardCard Alt"
  component={DashboardCard}
  category="Molecules"
  description="Alternative dashboard card component."
  tags={['dashboard', 'card', 'metrics']}
  controls={controls}
>
  {#snippet children(props: DashboardCardStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">DashboardCard Alt Story</h2>
      <DashboardCard
        title={props.title}
        subtitle={props.description}
      >
        {#snippet content()}
          <div class="space-y-2">
            <div class="text-2xl font-bold">{props.value}</div>
            <div class="text-sm text-gray-500">{props.trend}</div>
          </div>
        {/snippet}
      </DashboardCard>
    </div>
  {/snippet}
</Story>