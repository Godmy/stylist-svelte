<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Activity, Clock, Eye, EyeOff, Zap, BarChart3, Timer } from 'lucide-svelte';

  type PerformanceMetric = {
    id: string;
    name: string;
    value: number;
    unit: string;
    threshold: number; // Threshold to consider as good/acceptable
    status: 'good' | 'warning' | 'critical';
  };

  type MeasurementPoint = {
    timestamp: Date;
    value: number;
  };

  type Props = {
    metrics: PerformanceMetric[];
    refreshInterval?: number; // in milliseconds
    showCharts?: boolean;
    showDetails?: boolean;
    showThresholds?: boolean;
    autoRefresh?: boolean;
    title?: string;
    description?: string;
    class?: string;
    headerClass?: string;
    metricClass?: string;
    chartClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    metrics = [],
    refreshInterval = 5000,
    showCharts = true,
    showDetails = true,
    showThresholds = true,
    autoRefresh = true,
    title = 'Performance Monitor',
    description = 'Real-time monitoring of application performance',
    class: className = '',
    headerClass = '',
    metricClass = '',
    chartClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let performanceData: Record<string, MeasurementPoint[]> = $state({});
  let lastRefresh = $state(new Date());
  let isMonitoring = $state(autoRefresh);

  // Initialize performance data
  $effect(() => {
    const initialData: Record<string, MeasurementPoint[]> = {};
    metrics.forEach(metric => {
      initialData[metric.id] = [{ timestamp: new Date(), value: metric.value }];
    });
    performanceData = initialData;
  });

  // Setup auto-refresh if enabled
  $effect(() => {
    if (isMonitoring) {
      const interval = setInterval(() => {
        updateMetrics();
        lastRefresh = new Date();
      }, refreshInterval);

      return () => clearInterval(interval);
    }
  });

  function updateMetrics() {
    // In a real scenario, this would fetch actual performance metrics
    // For simulation purposes, we'll generate random values around the current value
    metrics.forEach(metric => {
      const newValue = metric.value * (0.95 + Math.random() * 0.1); // Random value within 5% of current
      
      if (!performanceData[metric.id]) {
        performanceData[metric.id] = [];
      }
      
      // Maintain last 20 data points for the chart
      performanceData[metric.id] = [
        ...performanceData[metric.id].slice(-19),
        { timestamp: new Date(), value: newValue }
      ];
    });
    
    // Update the metrics array with new values
    metrics = metrics.map(m => ({
      ...m,
      value: performanceData[m.id][performanceData[m.id].length - 1].value,
      status: determineStatus(
        performanceData[m.id][performanceData[m.id].length - 1].value,
        m.threshold
      )
    }));
  }

  function determineStatus(value: number, threshold: number): 'good' | 'warning' | 'critical' {
    // For metrics where lower is better (like load times)
    if (value <= threshold) return 'good';
    if (value <= threshold * 1.5) return 'warning';
    return 'critical';
  }

  function toggleMonitoring() {
    isMonitoring = !isMonitoring;
  }

  function getMetricColor(status: string) {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  }

  function formatValue(value: number, unit: string) {
    if (unit === 'ms' && value >= 1000) {
      return `${(value / 1000).toFixed(2)} s`;
    }
    return `${value.toFixed(2)} ${unit}`;
  }

  function getTrend(metricId: string) {
    const data = performanceData[metricId];
    if (data.length < 2) return 0;
    
    const last = data[data.length - 1].value;
    const previous = data[data.length - 2].value;
    
    return ((last - previous) / previous) * 100;
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div>
        <div class="flex items-center">
          <Activity class="h-6 w-6 text-gray-500 mr-2" />
          <h3 class="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        {#if description}
          <p class="mt-1 text-sm text-gray-500">{description}</p>
        {/if}
      </div>
      
      <div class="flex items-center space-x-4">
        <div class="flex items-center text-sm text-gray-500">
          <Clock class="h-4 w-4 mr-1" />
          <span>Last updated: {lastRefresh.toLocaleTimeString()}</span>
        </div>
        
        <button
          type="button"
          class={`inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
            isMonitoring ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
          }`}
          onclick={toggleMonitoring}
        >
          {#if isMonitoring}
            <EyeOff class="h-4 w-4 mr-1" />
            Pause Monitoring
          {:else}
            <Eye class="h-4 w-4 mr-1" />
            Start Monitoring
          {/if}
        </button>
      </div>
    </div>
  </div>

  <div class="p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each metrics as metric}
        <div class={`border rounded-lg p-5 ${metricClass}`}>
          <div class="flex items-center justify-between">
            <div>
              <h4 class="text-sm font-medium text-gray-900">{metric.name}</h4>
              <p class="text-2xl font-semibold text-gray-900 mt-1">
                {formatValue(metric.value, metric.unit)}
              </p>
            </div>
            <div class={`flex-shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getMetricColor(metric.status)}`}>
              {metric.status}
            </div>
          </div>
          
          <div class="mt-4">
            <div class="flex items-center text-sm text-gray-500">
              <Zap class="h-4 w-4 mr-1" />
              <span>Trend: {getTrend(metric.id).toFixed(2)}%</span>
            </div>
            
            {#if showThresholds}
              <div class="mt-2">
                <div class="flex justify-between text-xs text-gray-500">
                  <span>Threshold: {formatValue(metric.threshold, metric.unit)}</span>
                  <span>Status: {metric.status}</span>
                </div>
                <div class="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    class={`h-1.5 rounded-full ${
                      metric.status === 'good' ? 'bg-green-500' :
                      metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={`width: ${Math.min(100, (metric.value / (metric.threshold * 1.5)) * 100)}%`}
                  ></div>
                </div>
              </div>
            {/if}
          </div>
          
          {#if showCharts && performanceData[metric.id] && performanceData[metric.id].length > 1}
            <div class={`mt-4 pt-4 border-t ${chartClass}`}>
              <div class="flex items-end h-12 space-x-1">
                {#each performanceData[metric.id] as point, i}
                  <div 
                    class="flex-1 bg-blue-100 rounded-t hover:bg-blue-200 transition-colors"
                    style={`height: ${Math.min(100, (point.value / Math.max(...metrics.map(m => m.threshold * 1.5))) * 100)}%`}
                    title={`${formatValue(point.value, metric.unit)} at ${point.timestamp.toLocaleTimeString()}`}
                  ></div>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  {#if showDetails}
    <div class="border-t px-6 py-4 bg-gray-50">
      <h4 class="text-sm font-medium text-gray-900 mb-3">Performance Details</h4>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-white p-3 rounded-lg">
          <div class="text-sm text-gray-500">Metrics Tracked</div>
          <div class="text-lg font-semibold text-gray-900">{metrics.length}</div>
        </div>
        <div class="bg-white p-3 rounded-lg">
          <div class="text-sm text-gray-500">Update Interval</div>
          <div class="text-lg font-semibold text-gray-900">{refreshInterval}ms</div>
        </div>
        <div class="bg-white p-3 rounded-lg">
          <div class="text-sm text-gray-500">Monitoring</div>
          <div class={`text-lg font-semibold ${isMonitoring ? 'text-green-600' : 'text-red-600'}`}>
            {isMonitoring ? 'Active' : 'Paused'}
          </div>
        </div>
        <div class="bg-white p-3 rounded-lg">
          <div class="text-sm text-gray-500">Data Points</div>
          <div class="text-lg font-semibold text-gray-900">
            {performanceData[metrics[0]?.id]?.length || 0}
          </div>
        </div>
      </div>
    </div>
  {/if}

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center text-xs text-gray-500">
        <BarChart3 class="h-4 w-4 mr-1" />
        <span>Performance metrics update automatically</span>
      </div>
      <div class="text-xs text-gray-500">
        <Timer class="h-4 w-4 inline mr-1" />
        Next refresh in: {isMonitoring ? Math.ceil(refreshInterval / 1000) : 0}s
      </div>
    </div>
  </div>
</div>