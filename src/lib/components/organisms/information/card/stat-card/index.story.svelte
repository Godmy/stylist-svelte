<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import StatCard from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'title', type: 'text', defaultValue: 'Total Components' },
      { name: 'value', type: 'text', defaultValue: '429' },
      { name: 'trend', type: 'select', options: ['up', 'down', 'neutral'], defaultValue: 'up' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample data for the stat card
  const sampleStats = [
    {
      title: 'Total Components',
      value: '429',
      icon: 'package',
      trend: 'up',
      trendValue: '+23 this month',
      description: 'Production-ready Svelte 5 components'
    },
    {
      title: 'SOLID Compliance',
      value: '53.3%',
      icon: 'check',
      trend: 'up',
      trendValue: '+12.5%',
      description: 'Percentage of atoms following SOLID principles',
      animated: true
    },
    {
      title: 'Test Coverage',
      value: '94%',
      icon: 'shield',
      trend: 'neutral',
      description: 'Automated testing coverage'
    },
    {
      title: 'Bug Reports',
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
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Total Components
        </p>
        <p class="mt-1 text-[--color-text-primary]">Production-ready Svelte 5 components.</p>

        <div class="mt-6">
          <StatCard
            title="Total Components"
            value="429"
            icon="package"
            trend="up"
            trendValue="+23 this month"
            description="Production-ready Svelte 5 components"
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          SOLID Compliance
        </p>
        <p class="mt-1 text-[--color-text-primary]">Percentage of atoms following SOLID principles.</p>

        <div class="mt-6">
          <StatCard
            title="SOLID Compliance"
            value="53.3%"
            icon="check"
            trend="up"
            trendValue="+12.5%"
            description="Percentage of atoms following SOLID principles"
            animated={true}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Test Coverage
        </p>
        <p class="mt-1 text-[--color-text-primary]">Automated testing coverage.</p>

        <div class="mt-6">
          <StatCard
            title="Test Coverage"
            value="94%"
            icon="shield"
            trend="neutral"
            description="Automated testing coverage"
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Bug Reports
        </p>
        <p class="mt-1 text-[--color-text-primary]">Issues reported this month.</p>

        <div class="mt-6">
          <StatCard
            title="Bug Reports"
            value="12"
            icon="bug"
            trend="down"
            trendValue="-5.2%"
            description="Issues reported this month"
          />
        </div>
      </div>
    </section>
  {/snippet}
</Story>


