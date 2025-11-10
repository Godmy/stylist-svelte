<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { BarChart3, Info } from 'lucide-svelte';
  import Tooltip from '../tooltips/Tooltip.svelte';

  type ChartDataPoint = {
    id: string;
    name: string;
    value: number;
    color?: string;
    description?: string;
  };

  type BarPosition = {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    data: ChartDataPoint[];
    title?: string;
    width?: number;
    height?: number;
    showTooltip?: boolean;
    showLegend?: boolean;
    colorScheme?: string;
    maxValue?: number;
    barGap?: number;
    barWidth?: number;
    showAxis?: boolean;
    axisColor?: string;
    onBarClick?: (item: ChartDataPoint) => void;
    class?: string;
    chartClass?: string;
  };

  let {
    data = [],
    title = 'Bar Chart',
    width = 600,
    height = 400,
    showTooltip = true,
    showLegend = true,
    colorScheme = 'default',
    maxValue,
    barGap = 10,
    barWidth = 30,
    showAxis = true,
    axisColor = '#E5E7EB',
    onBarClick,
    class: hostClass = '',
    chartClass = '',
    ...restProps
  }: Props = $props();

  // Calculate max value if not provided
  let calculatedMaxValue = $derived(maxValue || Math.max(...data.map(d => d.value), 0));
  
  // Calculate dimensions
  let chartWidth = $derived(width - (showAxis ? 60 : 10));
  let chartHeight = $derived(height - (showAxis ? 40 : 10));
  
  // Calculate bar positions
  let barPositions = $derived(() => {
    const positions: BarPosition[] = [];
    const totalBarWidth = barWidth * data.length + barGap * (data.length - 1);
    const startX = showAxis ? 50 : 5;

    for (let i = 0; i < data.length; i++) {
      const x = startX + i * (barWidth + barGap);
      const barHeight = (data[i].value / calculatedMaxValue) * chartHeight;
      const y = chartHeight + (showAxis ? 10 : 5) - barHeight;

      positions.push({
        x,
        y,
        width: barWidth,
        height: barHeight,
        color: data[i].color || getDefaultColor(i, colorScheme)
      });
    }

    return positions;
  }) as () => BarPosition[];

  // Get default color based on index and scheme
  function getDefaultColor(index: number, scheme: string): string {
    const schemes: Record<string, string[]> = {
      default: ['#3B82F6', '#10B981', '#EF4444', '#F59E0B', '#8B5CF6', '#EC4899'],
      warm: ['#F87171', '#FB923C', '#FBBF24', '#FCD34D', '#FDE68A'],
      cool: ['#60A5FA', '#34D399', '#6EE7B7', '#93C5FD', '#BFDBFE'],
      neutral: ['#6B7280', '#9CA3AF', '#D1D5DB', '#E5E7EB', '#F3F4F6']
    };
    
    const colorList = schemes[scheme] || schemes.default;
    return colorList[index % colorList.length];
  }

  let hoveredBar: number | null = $state(null);
</script>

<div class={`bar-chart ${hostClass}`} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
      {#if showTooltip}
        <Tooltip text="This is a bar chart showing categorical data with rectangular bars proportional to the values they represent." position="top">
          <Info class="h-4 w-4 text-gray-500" />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={`chart-container border rounded-lg p-4 ${chartClass}`}>
    <svg 
      width={width} 
      height={height} 
      class="overflow-visible"
    >
      {#if showAxis}
        <!-- X axis -->
        <line 
          x1={showAxis ? 50 : 5} 
          y1={height - 10} 
          x2={width - 10} 
          y2={height - 10} 
          stroke={axisColor} 
          stroke-width="1"
        />
        <!-- Y axis -->
        <line 
          x1={showAxis ? 50 : 5} 
          y1={10} 
          x2={showAxis ? 50 : 5} 
          y2={height - 10} 
          stroke={axisColor} 
          stroke-width="1"
        />
        
        <!-- Y axis labels -->
        {#each [0, calculatedMaxValue * 0.25, calculatedMaxValue * 0.5, calculatedMaxValue * 0.75, calculatedMaxValue] as val, i}
          <text 
            x={showAxis ? 45 : 0} 
            y={height - 15 - (i * (chartHeight / 4))} 
            text-anchor="end" 
            font-size="10" 
            fill="#6B7280"
          >
            {Math.round(val)}
          </text>
          <line 
            x1={showAxis ? 48 : 3} 
            y1={height - 10 - (i * (chartHeight / 4))} 
            x2={width - 10} 
            y2={height - 10 - (i * (chartHeight / 4))} 
            stroke={axisColor} 
            stroke-dasharray="3,3" 
            stroke-width="0.5"
          />
        {/each}
        
        <!-- X axis labels -->
        {#each barPositions() as position, i}
          <text 
            x={position.x + barWidth / 2} 
            y={height - 5} 
            text-anchor="middle" 
            font-size="10" 
            fill="#6B7280"
          >
            {data[i].name}
          </text>
        {/each}
      {/if}

      <!-- Bars -->
      {#each barPositions() as position, i}
        <g
          class="cursor-pointer"
          onclick={() => onBarClick?.(data[i])}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onBarClick?.(data[i]);
            }
          }}
          onfocus={() => hoveredBar = i}
          onblur={() => hoveredBar = null}
          role="button"
          tabindex="0"
          aria-label={`Bar chart item: ${data[i].name}, Value: ${data[i].value}`}
        >
          <rect
            x={position.x}
            y={position.y}
            width={position.width}
            height={position.height}
            fill={position.color}
            rx="2"
            ry="2"
            class="transition-all duration-200 ease-in-out"
            style={`opacity: ${hoveredBar === i ? 0.8 : 1}; transform: ${hoveredBar === i ? 'scaleY(1.05)' : 'scaleY(1)'}`}

          />
        </g>
      {/each}
    </svg>
  </div>

  {#if showLegend}
    <div class="flex flex-wrap gap-4 mt-4">
      {#each data as item, i}
        <div class="flex items-center">
          <div 
            class="w-4 h-4 rounded mr-2" 
            style={`background-color: ${item.color || getDefaultColor(i, colorScheme)}`}
          ></div>
          <span class="text-sm text-gray-700">{item.name}</span>
          <span class="text-sm text-gray-500 ml-1">({item.value})</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
