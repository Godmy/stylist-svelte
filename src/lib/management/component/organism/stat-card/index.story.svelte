<script lang="ts">
  import type { StatCardRecipe } from '$stylist/information/interface/recipe/stat-card';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import StatCard from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'label', type: 'text', defaultValue: 'Total Components' },
    { name: 'value', type: 'text', defaultValue: '429' },
    { name: 'trend', type: 'select', options: ['up', 'down', 'neutral'], defaultValue: 'up' }
  ];

  const sampleStats: StatCardRecipe[] = [
    { label: 'Total Components', value: '429', icon: 'package', trend: 'up', trendValue: '+23 this month', description: 'Production-ready Svelte 5 components' },
    { label: 'Test Coverage', value: '94%', icon: 'shield', trend: 'neutral', description: 'Automated testing coverage' }
  ];
</script>

<Story component={StatCard} title="Stat Card" description="Metric card with trend and description." controls={controls}>
  {#snippet children(values: any)}
    <section class="grid gap-4 lg:grid-cols-2">
      {#each sampleStats as stat}
        <StatCard
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          trend={stat.trend}
          trendValue={stat.trendValue}
          description={stat.description}
          animated={stat.animated}
        />
      {/each}
      <StatCard
        label={values.label as string}
        value={values.value as string}
        trend={values.trend as 'up' | 'down' | 'neutral'}
        icon="package"
        description="Production-ready Svelte 5 components"
      />
    </section>
  {/snippet}
</Story>
