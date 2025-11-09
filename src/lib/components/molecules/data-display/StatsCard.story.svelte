<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import StatsCard from './StatsCard.svelte';
  import { ArrowUpRight, ArrowDownRight, BarChart2 } from 'lucide-svelte';

  type StatsCardStoryProps = {
    label: string;
    value: string;
    trend: 'up' | 'down' | 'neutral';
    trendValue: string;
    description: string;
    showIcon: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'label', type: 'text', defaultValue: 'Активные пользователи' },
    { name: 'value', type: 'text', defaultValue: '24 560' },
    { name: 'trend', type: 'select', defaultValue: 'up', options: ['up', 'down', 'neutral'] },
    { name: 'trendValue', type: 'text', defaultValue: '+12%' },
    { name: 'description', type: 'text', defaultValue: 'за последние 7 дней' },
    { name: 'showIcon', type: 'boolean', defaultValue: true }
  ];
</script>

{#snippet mainIcon()}
  <BarChart2 class="h-5 w-5" />
{/snippet}

{#snippet churnIcon()}
  <ArrowDownRight class="h-5 w-5" />
{/snippet}

{#snippet revenueIcon()}
  <ArrowUpRight class="h-5 w-5" />
{/snippet}

<Story
  id="molecules-stats-card"
  title="StatsCard"
  component={StatsCard}
  category="Molecules"
  description="Карточка с ключевой метрикой и трендом."
  tags={['dashboard', 'analytics']}
  controls={controls}
>
  {#snippet children(props: StatsCardStoryProps)}
    <div class="grid gap-6 max-w-3xl sm:grid-cols-2">
      <StatsCard
        label={props.label}
        value={props.value}
        trend={props.trend}
        trendValue={props.trendValue}
        description={props.description}
        icon={props.showIcon ? mainIcon : undefined}
      />

      <StatsCard
        label="Churn"
        value="3,6%"
        trend="down"
        trendValue="-1,2%"
        description="месяц к месяцу"
        icon={churnIcon}
        class="bg-rose-50/80 border-rose-100"
      />

      <StatsCard
        label="MRR"
        value="$82K"
        trend="up"
        trendValue="+5%"
        description="за квартал"
        icon={revenueIcon}
      />
    </div>
  {/snippet}
</Story>
