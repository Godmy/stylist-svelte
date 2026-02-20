<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import StatsCard from './index.svelte';
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
    { name: 'label', type: 'text', defaultValue: 'РђРєС‚РёРІРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»Рё' },
    { name: 'value', type: 'text', defaultValue: '24 560' },
    { name: 'trend', type: 'select', defaultValue: 'up', options: ['up', 'down', 'neutral'] },
    { name: 'trendValue', type: 'text', defaultValue: '+12%' },
    { name: 'description', type: 'text', defaultValue: 'Р·Р° РїРѕСЃР»РµРґРЅРёРµ 7 РґРЅРµР№' },
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
  description="РљР°СЂС‚РѕС‡РєР° СЃ РєР»СЋС‡РµРІРѕР№ РјРµС‚СЂРёРєРѕР№ Рё С‚СЂРµРЅРґРѕРј."
  tags={['dashboard', 'analytics']}
  controls={controls}
>
  {#snippet children(props)}
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
        description="РјРµСЃСЏС† Рє РјРµСЃСЏС†Сѓ"
        icon={churnIcon}
        class="bg-rose-50/80 border-rose-100"
      />

      <StatsCard
        label="MRR"
        value="$82K"
        trend="up"
        trendValue="+5%"
        description="Р·Р° РєРІР°СЂС‚Р°Р»"
        icon={revenueIcon}
      />
    </div>
  {/snippet}
</Story>




