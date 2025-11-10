<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { TrendingUp, TrendingDown } from 'lucide-svelte';

  type Props = {
    title: string;
    value: string | number;
    change?: number; // Percentage change
    changeLabel?: string;
    icon?: 'up' | 'down';
    trend?: 'positive' | 'negative' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    valueClass?: string;
    titleClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let props: Props = $props();
  
  let {
    title = props.title,
    value = props.value,
    change = props.change ?? 0,
    changeLabel = props.changeLabel ?? 'from last month',
    icon = props.icon,
    trend = props.trend ?? 'neutral',
    size = props.size ?? 'md',
    class: className = props.class ?? '',
    valueClass = props.valueClass ?? '',
    titleClass = props.titleClass ?? '',
    ...restProps
  } = props;

  const sizeClasses = $derived(
    size === 'sm' ? 'p-3' : size === 'lg' ? 'p-6' : 'p-4'
  );
  const valueSizeClasses = $derived(
    size === 'sm' ? 'text-2xl' : size === 'lg' ? 'text-4xl' : 'text-3xl'
  );

  const trendColor = $derived(
    trend === 'positive'
      ? 'text-green-600'
      : trend === 'negative'
      ? 'text-red-600'
      : 'text-gray-600'
  );
  const IconComponent = $derived(
    icon === 'up' ? TrendingUp : icon === 'down' ? TrendingDown : null
  );
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 ${sizeClasses} ${className}`} {...restProps}>
  <div class="flex items-center justify-between">
    <div>
      <p class={`text-sm font-medium text-gray-500 ${titleClass}`}>{title}</p>
      <p class={`mt-1 font-semibold ${valueSizeClasses} text-gray-900 ${valueClass}`}>{value}</p>
    </div>
    {#if IconComponent}
      <div class={`p-3 rounded-full ${trend === 'positive' ? 'bg-green-100' : trend === 'negative' ? 'bg-red-100' : 'bg-gray-100'}`}>
        <IconComponent class={`h-6 w-6 ${trendColor}`} />
      </div>
    {/if}
  </div>
  {#if change !== 0}
    <div class={`mt-2 flex items-center text-sm ${trendColor}`}>
      {#if change > 0}
        <TrendingUp class="h-4 w-4" />
      {:else}
        <TrendingDown class="h-4 w-4" />
      {/if}
      <span class="ml-1">
        {Math.abs(change)}% {changeLabel}
      </span>
    </div>
  {/if}
</div>