<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { TrendingUp, TrendingDown, Minus } from 'lucide-svelte';

  type Props = {
    title: string;
    currentValue: number;
    targetValue: number;
    unit?: string;
    status?: 'on-track' | 'at-risk' | 'off-track' | 'exceeded';
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: number;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    titleClass?: string;
    valueClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let props: Props = $props();
  
  let {
    title = props.title,
    currentValue = props.currentValue,
    targetValue = props.targetValue,
    unit = props.unit ?? '',
    status = props.status ?? 'on-track',
    trend = props.trend ?? 'neutral',
    trendValue = props.trendValue ?? 0,
    size = props.size ?? 'md',
    class: className = props.class ?? '',
    titleClass = props.titleClass ?? '',
    valueClass = props.valueClass ?? '',
    ...restProps
  } = props;

  // Calculate percentage towards target
  const percentage = $derived(Math.round((currentValue / targetValue) * 100));
  
  // Determine status color
  const statusColor = $derived(
    status === 'on-track'
      ? 'bg-green-500'
      : status === 'at-risk'
      ? 'bg-yellow-500'
      : status === 'off-track'
      ? 'bg-red-500'
      : 'bg-blue-500'
  );

  const statusText = $derived(
    status === 'on-track'
      ? 'On track'
      : status === 'at-risk'
      ? 'At risk'
      : status === 'off-track'
      ? 'Off track'
      : 'Exceeded'
  );

  // Determine trend icon
  const TrendIcon = $derived(trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus);
  const trendColor = $derived(
    trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-500'
  );
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 p-4 ${className}`} {...restProps}>
  <div class="flex items-center justify-between">
    <div>
      <h3 class={`text-sm font-medium text-gray-500 ${titleClass}`}>{title}</h3>
      <p class={`mt-1 text-2xl font-semibold ${valueClass}`}>
        {currentValue}{unit} <span class="text-sm font-normal text-gray-500">/ {targetValue}{unit}</span>
      </p>
    </div>
    <div class="flex items-center">
      <div class="mr-3">
        <div class={`w-3 h-3 rounded-full ${statusColor}`}></div>
      </div>
      <div class="flex items-center">
        <span class={trendColor}>
          <TrendIcon class="h-5 w-5" />
        </span>
        {#if trendValue !== 0}
          <span class={`ml-1 text-sm ${trendColor}`}>
            {trendValue > 0 ? '+' : ''}{trendValue}%
          </span>
        {/if}
      </div>
    </div>
  </div>
  
  <div class="mt-3">
    <div class="flex items-center justify-between text-sm text-gray-500 mb-1">
      <span>{statusText}</span>
      <span>{percentage}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div 
        class="h-2 rounded-full bg-blue-600" 
        style={`width: ${Math.min(percentage, 100)}%`}
      ></div>
    </div>
  </div>
</div>