<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { BarChart3, TrendingUp, TrendingDown } from 'lucide-svelte';

  type ChartType = 'line' | 'bar' | 'area' | 'pie' | 'doughnut';
  
  type ChartDataPoint = {
    label: string;
    value: number;
    color?: string;
  };

  type Props = {
    title?: string;
    subtitle?: string;
    data: ChartDataPoint[];
    type?: ChartType;
    showLegend?: boolean;
    showTooltip?: boolean;
    showTrend?: boolean;
    trendValue?: number;
    height?: number;
    width?: number;
    class?: string;
    chartClass?: string;
    legendClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    title = 'Analytics Chart',
    subtitle,
    data = [],
    type = 'bar',
    showLegend = true,
    showTooltip = true,
    showTrend = true,
    trendValue = 0,
    height = 300,
    width = 600,
    class: className = '',
    chartClass = '',
    legendClass = '',
    ...restProps
  }: Props = $props();

  // Calculate chart dimensions
  let chartWidth = $state(width - 60); // Account for margins
  let chartHeight = $state(height - 60);
  
  // Find max value for scaling
  const maxValue = Math.max(...data.map(d => d.value), 0);
  
  // Calculate bar width for bar charts
  let barWidth = $derived(chartWidth / (data.length * 1.5));
  
  // Get trend icon
  let trendIcon = trendValue >= 0 ? TrendingUp : TrendingDown;
  let trendColor = trendValue >= 0 ? 'text-green-500' : 'text-red-500';

  // Pie chart calculations
  const total = $derived(data.reduce((sum, item) => sum + item.value, 0));
  const center = 100; // Assuming a 200x200 SVG, center is 100,100
  const radius = 90; // Slightly less than 100 for padding
  const startAngle = 0;
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class="p-4 border-b border-gray-200">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-lg font-medium text-gray-900">{title}</h3>
        {#if subtitle}
          <p class="text-sm text-gray-500">{subtitle}</p>
        {/if}
      </div>
      {#if showTrend && trendValue !== 0}
        <div class="flex items-center">
          <span class={`inline-flex items-center ${trendColor}`}>
            <trendIcon class="h-5 w-5"></trendIcon>
            <span class="ml-1">{Math.abs(trendValue)}%</span>
          </span>
        </div>
      {/if}
    </div>
  </div>
  
  <div class="p-4">
    <div class={`relative ${chartClass}`} style={`height: ${height}px; width: ${width}px;`}>
      {#if type === 'bar'}
        <svg width={width} height={height} class="overflow-visible">
          <!-- Y-axis -->
          <line 
            x1="40" 
            y1="20" 
            x2="40" 
            y2={height - 40} 
            stroke="#e5e7eb" 
            stroke-width="1"
          />
          
          <!-- X-axis -->
          <line 
            x1="40" 
            y1={height - 40} 
            x2={width - 20} 
            y2={height - 40} 
            stroke="#e5e7eb" 
            stroke-width="1"
          />
          
          <!-- Bars -->
          {#each data as item, i}
            {@const barHeight = maxValue > 0 ? (item.value / maxValue) * (height - 80) : 0}
            {@const barX = 60 + (i * barWidth * 1.5)}
            {@const barY = height - 40 - barHeight}
            
            <rect 
              x={barX} 
              y={barY} 
              width={barWidth} 
              height={barHeight} 
              fill={item.color || '#3B82F6'} 
              rx="2"
              class="hover:opacity-75 transition-opacity"
            />
            
            <!-- Value label on top of bar -->
            <text 
              x={barX + barWidth / 2} 
              y={barY - 5} 
              text-anchor="middle" 
              font-size="10" 
              fill="#4b5563"
            >
              {item.value}
            </text>
            
            <!-- X-axis label -->
            <text 
              x={barX + barWidth / 2} 
              y={height - 25} 
              text-anchor="middle" 
              font-size="10" 
              fill="#6b7280"
            >
              {item.label}
            </text>
          {/each}
        </svg>
      {/if}
      
      {#if type === 'line'}
        <svg width={width} height={height} class="overflow-visible">
          <!-- Y-axis -->
          <line 
            x1="40" 
            y1="20" 
            x2="40" 
            y2={height - 40} 
            stroke="#e5e7eb" 
            stroke-width="1"
          />
          
          <!-- X-axis -->
          <line 
            x1="40" 
            y1={height - 40} 
            x2={width - 20} 
            y2={height - 40} 
            stroke="#e5e7eb" 
            stroke-width="1"
          />
          
          <!-- Line path -->
          <polyline
            fill="none"
            stroke="#3B82F6"
            stroke-width="2"
            points={
              data.map((item, i) => {
                const x = 40 + ((i + 1) * (chartWidth / (data.length + 1)));
                const y = height - 40 - ((item.value / maxValue) * (height - 80));
                return `${x},${y}`;
              }).join(' ')
            }
          />
          
          <!-- Data points -->
          {#each data as item, i}
            {@const x = 40 + ((i + 1) * (chartWidth / (data.length + 1)))}
            {@const y = height - 40 - ((item.value / maxValue) * (height - 80))}
            
            <circle 
              cx={x} 
              cy={y} 
              r="4" 
              fill="#3B82F6"
              class="hover:r-6 transition-all"
            />
            
            <!-- Value label -->
            <text 
              x={x} 
              y={y - 10} 
              text-anchor="middle" 
              font-size="10" 
              fill="#4b5563"
            >
              {item.value}
            </text>
            
            <!-- X-axis label -->
            <text 
              x={x} 
              y={height - 25} 
              text-anchor="middle" 
              font-size="10" 
              fill="#6b7280"
            >
              {item.label}
            </text>
          {/each}
        </svg>
      {/if}
      
      {#if type === 'pie' && data.length > 0}
        <div class="flex items-center justify-center h-full">
          <svg width="200" height="200" class="overflow-visible">
            {#each data as item, i (i)}
              {@const value = item.value}
              {@const sliceAngle = (value / total) * 360}
              {@const currentSliceStartAngle = i === 0 ? startAngle : data.slice(0, i).reduce((sum, d) => sum + (d.value / total) * 360, startAngle)}
              {@const currentSliceEndAngle = currentSliceStartAngle + sliceAngle}
              
              {@const startRad = (currentSliceStartAngle * Math.PI) / 180}
              {@const endRad = (currentSliceEndAngle * Math.PI) / 180}
              
              {@const x1 = center + radius * Math.cos(startRad)}
              {@const y1 = center + radius * Math.sin(startRad)}
              {@const x2 = center + radius * Math.cos(endRad)}
              {@const y2 = center + radius * Math.sin(endRad)}
              
              <path
                d={`M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${sliceAngle > 180 ? 1 : 0} 1 ${x2} ${y2} Z`}
                fill={item.color || `hsl(${(i * 137.5) % 360}, 70%, 50%)`}
              />
            {/each}
          </svg>
        </div>
      {/if}
    </div>
    
    {#if showLegend}
      <div class={`mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${legendClass}`}>
        {#each data as item}
          <div class="flex items-center mb-2">
            <div 
              class="w-4 h-4 rounded-sm mr-2" 
              style={`background-color: ${item.color || '#3B82F6'};`}
            ></div>
            <span class="text-sm text-gray-600">{item.label}</span>
            <span class="ml-1 text-sm text-gray-500">({item.value})</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>