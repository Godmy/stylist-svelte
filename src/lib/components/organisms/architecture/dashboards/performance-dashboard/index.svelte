<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Activity, TrendingUp, TrendingDown, Clock, Zap, ArrowUp, ArrowDown } from 'lucide-svelte';

  export type Metric = {
    id: string;
    title: string;
    value: string | number;
    change: number; // Percentage change
    changeType: 'positive' | 'negative';
    icon: any;
    color: string;
  };

  export type TimeRange = '1d' | '7d' | '30d' | '90d';

  type Props = {
    title?: string;
    subtitle?: string;
    metrics: Metric[];
    timeRange?: TimeRange;
    onTimeRangeChange?: (range: TimeRange) => void;
    showTimeRangeSelector?: boolean;
    class?: string;
    headerClass?: string;
    metricsClass?: string;
    metricCardClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title = 'Performance Dashboard',
    subtitle,
    metrics = [],
    timeRange = '7d',
    onTimeRangeChange,
    showTimeRangeSelector = true,
    class: className = '',
    headerClass = '',
    metricsClass = '',
    metricCardClass = '',
    ...restProps
  }: Props = $props();

  let selectedTimeRange = $state(timeRange);

  function handleTimeRangeChange(range: TimeRange) {
    selectedTimeRange = range;
    if (onTimeRangeChange) {
      onTimeRangeChange(range);
    }
  }
</script>

<div class={`c-performance-dashboard bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-default] overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b ${headerClass}`}>
    <div class="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center">
          <Activity class="h-5 w-5 text-[--color-text-secondary] mr-2" />
          <h3 class="text-lg font-medium text-[--color-text-primary]">{title}</h3>
        </div>
        {#if subtitle}
          <p class="text-sm text-[--color-text-secondary] mt-1">{subtitle}</p>
        {/if}
      </div>

      {#if showTimeRangeSelector}
        <div class="mt-4 sm:mt-0">
          <div class="flex rounded-md shadow-sm">
            {#each ['1d', '7d', '30d', '90d'] as range}
              <button
                type="button"
                class={`py-2 px-3 text-xs font-medium focus:outline-none ${
                  selectedTimeRange === range
                    ? 'bg-[--color-primary-100] text-[--color-primary-700] border border-[--color-primary-300]'
                    : 'bg-[--color-background-primary] text-[--color-text-primary] border border-[--color-border-default] hover:bg-[--color-surface-hover]'
                } ${
                  range === '1d' ? 'rounded-l-md' :
                  range === '90d' ? 'rounded-r-md' :
                  '-ml-px'
                }`}
                onclick={() => handleTimeRangeChange(range as TimeRange)}
              >
                {range === '1d' ? '1D' : range === '7d' ? '7D' : range === '30d' ? '30D' : '90D'}
              </button>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>

  <div class={`p-6 ${metricsClass}`}>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each metrics as metric}
        <div class={`border rounded-lg p-4 ${metricCardClass}`}>
          <div class="flex items-center justify-between">
            <div class={`p-3 rounded-md ${metric.color} text-white`}>
              <metric.icon class="h-6 w-6" />
            </div>
            <div class={`flex items-center text-sm font-medium ${
              metric.changeType === 'positive' ? 'text-[--color-success-600]' : 'text-[--color-danger-600]'
            }`}>
              {#if metric.changeType === 'positive'}
                <TrendingUp class="h-4 w-4 mr-1" />
              {:else}
                <TrendingDown class="h-4 w-4 mr-1" />
              {/if}
              <span>{Math.abs(metric.change)}%</span>
            </div>
          </div>
          <div class="mt-4">
            <h3 class="text-sm font-medium text-[--color-text-secondary]">{metric.title}</h3>
            <p class="text-2xl font-semibold text-[--color-text-primary] mt-1">{metric.value}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Additional performance chart or visualization could go here -->
    <div class="mt-8 p-4 border border-[--color-border-default] rounded-lg">
      <div class="flex items-center justify-between mb-4">
        <h4 class="text-sm font-medium text-[--color-text-primary]">Performance Trend</h4>
        <div class="flex items-center text-sm">
          <span class="text-[--color-success-600] mr-4">
            <ArrowUp class="h-4 w-4 inline mr-1" />
            Good
          </span>
          <span class="text-[--color-danger-600]">
            <ArrowDown class="h-4 w-4 inline mr-1" />
            Needs attention
          </span>
        </div>
      </div>
      <div class="h-48 flex items-end space-x-2">
        {#each Array(12) as _, i}
          <div
            class="flex-1 bg-[--color-surface-muted] rounded-t hover:bg-[--color-primary-300] transition-colors"
            style={`height: ${Math.floor(Math.random() * 80) + 10}%`}
          ></div>
        {/each}
      </div>
    </div>
  </div>
</div>
