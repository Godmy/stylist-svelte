<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Globe, Users, Eye, Clock, BarChart3, Calendar, Filter } from 'lucide-svelte';

  type TrafficSource = {
    id: string;
    name: string;
    value: number;
    percentage: number;
    color: string;
  };

  type TrafficDataPoint = {
    date: Date;
    value: number;
  };

  type TimeRange = '1d' | '7d' | '30d' | '90d' | '1y';

  type Props = {
    title?: string;
    subtitle?: string;
    totalVisitors: number;
    uniqueVisitors: number;
    pageViews: number;
    timeOnPage: string; // e.g., "2m 30s"
    bounceRate: number; // percentage
    trafficSources: TrafficSource[];
    trafficData: TrafficDataPoint[];
    timeRange?: TimeRange;
    onTimeRangeChange?: (range: TimeRange) => void;
    class?: string;
    headerClass?: string;
    summaryClass?: string;
    chartClass?: string;
    sourcesClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title = 'Traffic Analytics',
    subtitle,
    totalVisitors = 0,
    uniqueVisitors = 0,
    pageViews = 0,
    timeOnPage = '0s',
    bounceRate = 0,
    trafficSources = [],
    trafficData = [],
    timeRange = '7d',
    onTimeRangeChange,
    class: className = '',
    headerClass = '',
    summaryClass = '',
    chartClass = '',
    sourcesClass = '',
    ...restProps
  }: Props = $props();

  let selectedTimeRange = $state(timeRange);

  function handleTimeRangeChange(range: TimeRange) {
    selectedTimeRange = range;
    if (onTimeRangeChange) {
      onTimeRangeChange(range);
    }
  }

  // Find max value for chart scaling
  const maxValue = Math.max(...trafficData.map(d => d.value), 100);
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b ${headerClass}`}>
    <div class="p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <div class="flex items-center">
          <Globe class="h-5 w-5 text-gray-500 mr-2" />
          <h3 class="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        {#if subtitle}
          <p class="text-sm text-gray-500 mt-1">{subtitle}</p>
        {/if}
      </div>
      
      <div class="mt-4 md:mt-0 flex items-center space-x-3">
        <div class="relative">
          <select
            class="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            bind:value={selectedTimeRange}
            onchange={() => handleTimeRangeChange(selectedTimeRange as TimeRange)}
          >
            <option value="1d">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <Calendar class="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Summary metrics -->
  <div class={`p-4 border-b ${summaryClass}`}>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div class="text-center p-3">
        <div class="text-lg font-semibold text-gray-900">{totalVisitors}</div>
        <div class="text-xs text-gray-500 flex items-center justify-center">
          <Users class="h-3 w-3 mr-1" />
          Total Visitors
        </div>
      </div>
      <div class="text-center p-3">
        <div class="text-lg font-semibold text-gray-900">{uniqueVisitors}</div>
        <div class="text-xs text-gray-500 flex items-center justify-center">
          <Users class="h-3 w-3 mr-1" />
          Unique Visitors
        </div>
      </div>
      <div class="text-center p-3">
        <div class="text-lg font-semibold text-gray-900">{pageViews}</div>
        <div class="text-xs text-gray-500 flex items-center justify-center">
          <Eye class="h-3 w-3 mr-1" />
          Page Views
        </div>
      </div>
      <div class="text-center p-3">
        <div class="text-lg font-semibold text-gray-900">{timeOnPage}</div>
        <div class="text-xs text-gray-500 flex items-center justify-center">
          <Clock class="h-3 w-3 mr-1" />
          Time on Page
        </div>
      </div>
      <div class={`text-center p-3 ${
        bounceRate > 60 ? 'text-red-600' : bounceRate > 40 ? 'text-yellow-600' : 'text-green-600'
      }`}>
        <div class="text-lg font-semibold">{bounceRate}%</div>
        <div class="text-xs flex items-center justify-center">
          <BarChart3 class="h-3 w-3 mr-1" />
          Bounce Rate
        </div>
      </div>
    </div>
  </div>

  <!-- Traffic chart -->
  <div class={`p-4 border-b ${chartClass}`}>
    <h4 class="text-sm font-medium text-gray-900 mb-4">Traffic Overview</h4>
    <div class="h-64 flex items-end space-x-1 md:space-x-2">
      {#each trafficData as dataPoint, i}
        {@const barHeight = (dataPoint.value / maxValue) * 200}
        <div 
          class="flex-1 flex flex-col items-center"
          style="min-width: 15px;"
        >
          <div 
            class="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
            style={`height: ${barHeight}px;`}
            title={`${dataPoint.date.toLocaleDateString()}: ${dataPoint.value}`}
          ></div>
          {#if i % 3 === 0}  <!-- Show date every third bar to avoid clutter -->
            <div class="text-xs text-gray-500 mt-1">
              {dataPoint.date.toLocaleDateString([], { month: 'short', day: 'numeric' })}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <!-- Traffic sources -->
  <div class={`p-4 ${sourcesClass}`}>
    <h4 class="text-sm font-medium text-gray-900 mb-4">Traffic Sources</h4>
    <div class="space-y-3">
      {#each trafficSources as source}
        <div>
          <div class="flex justify-between text-sm mb-1">
            <div class="flex items-center">
              <div 
                class="w-3 h-3 rounded-full mr-2" 
                style={`background-color: ${source.color}`}
              ></div>
              <span class="text-gray-700">{source.name}</span>
            </div>
            <span class="text-gray-900">{source.value} ({source.percentage}%)</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
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