<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const Globe = 'globe';
const Users = 'users';
const Eye = 'eye';
const Clock = 'clock';
const BarChart3 = 'bar-chart-3';
const Calendar = 'calendar';
const Filter = 'filter';

  import type { TrafficAnalyticsProps } from '$stylist/marketing/type/struct/traffic-analytics';
  import { createTrafficAnalyticsState } from '$stylist/marketing/function/state/traffic-analytics';

  let props: TrafficAnalyticsProps = $props();
  const state = createTrafficAnalyticsState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
  <div class={`border-b ${state.headerClassName}`}>
    <div class="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <div class="flex items-center">
          <BaseIcon name={Globe} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
          <h3 class="text-lg font-medium text-[var(--color-text-primary)]">{state.title}</h3>
        </div>
        {#if state.subtitle}
          <p class="text-sm text-[var(--color-text-secondary)] mt-1">{state.subtitle}</p>
        {/if}
      </div>

      <div class="mt-4 md:mt-0 flex items-center space-x-3">
        <div class="relative">
          <select
            class="appearance-none bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md pl-3 pr-10 py-2 text-left text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)]"
            bind:value={state.selectedTimeRange}
            onchange={() => state.handleTimeRangeChange(state.selectedTimeRange as TimeRange)}
          >
            <option value="1d">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--color-text-primary)]">
            <BaseIcon name={Calendar} class="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Summary metrics -->
  <div class={`p-4 border-b ${state.summaryClassName}`}>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div class="text-center p-3">
        <div class="text-lg font-semibold text-[var(--color-text-primary)]">{state.totalVisitors}</div>
        <div class="text-xs text-[var(--color-text-secondary)] flex items-center justify-center">
          <BaseIcon name={Users} class="h-3 w-3 mr-1" />
          Total Visitors
        </div>
      </div>
      <div class="text-center p-3">
        <div class="text-lg font-semibold text-[var(--color-text-primary)]">{state.uniqueVisitors}</div>
        <div class="text-xs text-[var(--color-text-secondary)] flex items-center justify-center">
          <BaseIcon name={Users} class="h-3 w-3 mr-1" />
          Unique Visitors
        </div>
      </div>
      <div class="text-center p-3">
        <div class="text-lg font-semibold text-[var(--color-text-primary)]">{state.pageViews}</div>
        <div class="text-xs text-[var(--color-text-secondary)] flex items-center justify-center">
          <BaseIcon name={Eye} class="h-3 w-3 mr-1" />
          Page Views
        </div>
      </div>
      <div class="text-center p-3">
        <div class="text-lg font-semibold text-[var(--color-text-primary)]">{state.timeOnPage}</div>
        <div class="text-xs text-[var(--color-text-secondary)] flex items-center justify-center">
          <BaseIcon name={Clock} class="h-3 w-3 mr-1" />
          Time on Page
        </div>
      </div>
      <div class={`text-center p-3 ${
        state.bounceRate > 60 ? 'text-[var(--color-danger-600)]' : state.bounceRate > 40 ? 'text-yellow-600' : 'text-[var(--color-success-600)]'
      }`}>
        <div class="text-lg font-semibold">{state.bounceRate}%</div>
        <div class="text-xs flex items-center justify-center">
          <BaseIcon name={BarChart3} class="h-3 w-3 mr-1" />
          Bounce Rate
        </div>
      </div>
    </div>
  </div>

  <!-- Traffic chart -->
  <div class={`p-4 border-b ${state.chartClassName}`}>
    <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-4">Traffic Overview</h4>
    <div class="h-64 flex items-end space-x-1 md:space-x-2">
      {#each state.trafficData as dataPoint, i}
        {@const barHeight = (dataPoint.value / state.maxValue) * 200}
        <div
          class="flex-1 flex flex-col items-center"
          style="min-width: 15px;"
        >
          <div
            class="w-full bg-[var(--color-primary-500)] rounded-t hover:bg-[var(--color-primary-600)] transition-colors"
            style={`height: ${barHeight}px;`}
            title={`${dataPoint.date.toLocaleDateString()}: ${dataPoint.value}`}
          ></div>
          {#if i % 3 === 0}
            <div class="text-xs text-[var(--color-text-secondary)] mt-1">
              {dataPoint.date.toLocaleDateString([], { month: 'short', day: 'numeric' })}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <!-- Traffic sources -->
  <div class={`p-4 ${state.sourcesClassName}`}>
    <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-4">Traffic Sources</h4>
    <div class="space-y-3">
      {#each state.trafficSources as source}
        <div>
          <div class="flex justify-between text-sm mb-1">
            <div class="flex items-center">
              <div
                class="w-3 h-3 rounded-full mr-2"
                style={`background-color: ${source.color}`}
              ></div>
              <span class="text-[var(--color-text-primary)]">{source.name}</span>
            </div>
            <span class="text-[var(--color-text-primary)]">{source.value} ({source.percentage}%)</span>
          </div>
          <div class="w-full bg-[var(--color-background-tertiary)] rounded-full h-2">
            <div
              class="h-2 rounded-full"
              style={`width: ${source.percentage}%; background-color: ${source.color};`}
            ></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<Story>
  <div>TODO: Traffic Analytics Story</div>
</Story>



