<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import type { StatCardRecipe } from '$stylist/analytics/interface/recipe/stat-card';

  import StatCard from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'label', type: 'text', defaultValue: 'Total Components' },
      { name: 'value', type: 'text', defaultValue: '429' },
      { name: 'trend', type: 'select', options: ['up', 'down', 'neutral'], defaultValue: 'up' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: InterfaceControllerSettings[]
  }>();

  const sampleStats: StatCardRecipe[] = [
    {
      label: 'Total Components',
      value: '429',
      icon: 'package',
      trend: 'up',
      trendValue: '+23 this month',
      description: 'Production-ready Svelte 5 components'
    },
    {
      label: 'SOLID Compliance',
      value: '53.3%',
      icon: 'check',
      trend: 'up',
      trendValue: '+12.5%',
      description: 'Percentage of atoms following SOLID principles',
      animated: true
    },
    {
      label: 'Test Coverage',
      value: '94%',
      icon: 'shield',
      trend: 'neutral',
      description: 'Automated testing coverage'
    },
    {
      label: 'Bug Reports',
      value: '12',
      icon: 'bug',
      trend: 'down',
      trendValue: '-5.2%',
      description: 'Issues reported this month'
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={StatCard}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-stat-card grid w-full gap-8 lg:grid-cols-[1fr_1fr_1fr_1fr]">
      {#each sampleStats as stat}
        <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
            {stat.label}
          </p>
          <p class="mt-1 text-[--color-text-primary]">{stat.description}</p>

          <div class="mt-6">
            <StatCard
              label={stat.label}
              value={stat.value}
              icon={stat.icon}
              trend={stat.trend}
              trendValue={stat.trendValue}
              description={stat.description}
              animated={stat.animated}
            />
          </div>
        </div>
      {/each}

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm lg:col-span-4">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Interactive example
        </p>
        <div class="mt-6">
          <StatCard label={values.label} value={values.value} trend={values.trend} icon="package" description="Production-ready Svelte 5 components" />
        </div>
      </div>
    </section>
  {/snippet}
</Story>
