<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
  import { Icon as BaseIcon } from '$stylist';
const Activity = 'activity';
const MousePointer = 'mouse-pointer';
const Eye = 'eye';
const Clock = 'clock';
const TrendingUp = 'trending-up';
const TrendingDown = 'trending-down';
const Calendar = 'calendar';


  type UserBehaviorMetric = {
    id: string;
    name: string;
    value: string | number;
    previousValue?: string | number;
    change?: number; // Percentage change
    changeType?: 'positive' | 'negative';
    description: string;
  };

  type TimeRange = '1d' | '7d' | '30d' | '90d';

  type Props = {
    title?: string;
    subtitle?: string;
    metrics: UserBehaviorMetric[];
    timeRange?: TimeRange;
    onTimeRangeChange?: (range: TimeRange) => void;
    class?: string;
    headerClass?: string;
    metricsClass?: string;
    metricCardClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;

  let {
    title = 'User Behavior Metrics',
    subtitle,
    metrics = [],
    timeRange = '7d',
    onTimeRangeChange,
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

<div class={`bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b ${headerClass}`}>
    <div class="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div class="flex items-center">
          <BaseIcon name={Activity} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
          <h3 class="text-lg font-medium text-[var(--color-text-primary)]">{title}</h3>
        </div>
        {#if subtitle}
          <p class="text-sm text-[var(--color-text-secondary)] mt-1">{subtitle}</p>
        {/if}
      </div>
      
      <div class="mt-4 sm:mt-0">
        <div class="flex rounded-md shadow-sm">
          {#each ['1d', '7d', '30d', '90d'] as range}
            <button
              type="button"
              class={`py-2 px-3 text-xs font-medium focus:outline-none ${
                selectedTimeRange === range
                  ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border border-[var(--color-primary-300)]'
                  : 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]'
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
    </div>
  </div>

  <div class={`p-6 ${metricsClass}`}>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each metrics as metric}
        <div class={`border rounded-lg p-5 ${metricCardClass}`}>
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-sm font-medium text-[var(--color-text-secondary)]">{metric.name}</h3>
              <p class="text-2xl font-semibold text-[var(--color-text-primary)] mt-1">{metric.value}</p>
              <p class="text-xs text-[var(--color-text-secondary)] mt-1">{metric.description}</p>
            </div>
            {#if metric.change !== undefined}
              <div class={`flex items-center text-sm font-medium ${
                metric.changeType === 'positive' ? 'text-[var(--color-success-600)]' : 'text-[var(--color-danger-600)]'
              }`}>
                {#if metric.changeType === 'positive'}
                  <BaseIcon name={TrendingUp} class="h-4 w-4 mr-1" />
                {:else}
                  <BaseIcon name={TrendingDown} class="h-4 w-4 mr-1" />
                {/if}
                {Math.abs(metric.change)}%
              </div>
            {/if}
          </div>
          
          {#if metric.previousValue !== undefined}
            <div class="mt-3 text-xs text-[var(--color-text-secondary)]">
              Prev period: {metric.previousValue}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Detailed metrics visualization -->
    <div class="mt-8">
      <h4 class="text-lg font-medium text-[var(--color-text-primary)] mb-4">Behavior Trends</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Heatmap visualization -->
        <div class="border rounded-lg p-4">
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-sm font-medium text-[var(--color-text-primary)]">Engagement Heatmap</h5>
            <div class="flex items-center text-xs text-[var(--color-text-secondary)]">
              <BaseIcon name={Eye} class="h-4 w-4 mr-1" />
              Page views
            </div>
          </div>
          <div class="grid grid-cols-7 gap-1">
            {#each Array(7*24).fill(0) as _, i}
              <div 
                class="w-full h-3 rounded-sm" 
                style={`background-color: hsla(${Math.random() * 120}, 70%, 50%, ${Math.random()})`}
                title={`Hour ${i % 24}, Day ${(i / 24) | 0}`}
              ></div>
            {/each}
          </div>
          <div class="flex justify-between text-xs text-[var(--color-text-secondary)] mt-2">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        <!-- Click map visualization -->
        <div class="border rounded-lg p-4">
          <h5 class="text-sm font-medium text-[var(--color-text-primary)] mb-4">Click Distribution</h5>
          <div class="relative h-48 bg-[var(--color-background-secondary)] rounded-lg overflow-hidden border">
            <!-- Simulated page elements -->
            <div class="absolute top-4 left-1/4 w-1/2 h-8 bg-[var(--color-primary-200)] rounded flex items-center justify-center text-xs">
              Header
            </div>
            <div class="absolute top-16 left-1/4 w-1/2 h-32 bg-[var(--color-success-200)] rounded flex items-center justify-center text-xs">
              Main Content
            </div>
            <div class="absolute bottom-4 left-1/4 w-1/2 h-8 bg-yellow-200 rounded flex items-center justify-center text-xs">
              Footer
            </div>
            
            <!-- Simulated click hotspots -->
            {#each Array(5).fill(0) as _, i}
              <div 
                class="absolute w-4 h-4 bg-[var(--color-danger-500)] rounded-full opacity-[var(--opacity-70)] animate-pulse"
                style={`top: ${20 + Math.random() * 60}%; left: ${30 + Math.random() * 40}%`}
              ></div>
            {/each}
          </div>
          <div class="mt-2 flex items-center text-xs text-[var(--color-text-secondary)]">
            <BaseIcon name={MousePointer} class="h-4 w-4 mr-1" />
            Higher density = more clicks
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




