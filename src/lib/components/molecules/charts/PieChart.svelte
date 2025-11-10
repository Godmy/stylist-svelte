<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { PieChart as PieChartIcon, Info } from 'lucide-svelte';
  import Tooltip from '../tooltips/Tooltip.svelte';

  type ChartDataPoint = {
    id: string;
    name: string;
    value: number;
    color?: string;
    description?: string;
  };

  type PieSegment = {
    id: string;
    name: string;
    value: number;
    color: string;
    startAngle: number;
    endAngle: number;
    midAngle: number;
    percentage: number;
    labelX: number;
    labelY: number;
    path: string;
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
    showLabels?: boolean;
    labelThreshold?: number; // Minimum percentage for label to show
    showValues?: boolean;
    donut?: boolean; // Show as donut chart
    strokeWidth?: number;
    onSliceClick?: (item: ChartDataPoint) => void;
    class?: string;
    chartClass?: string;
  };

  let {
    data = [],
    title = 'Pie Chart',
    width = 400,
    height = 400,
    showTooltip = true,
    showLegend = true,
    colorScheme = 'default',
    showLabels = true,
    labelThreshold = 5, // Only show labels for slices with >5% of total
    showValues = false,
    donut = false,
    strokeWidth = 2,
    onSliceClick,
    class: hostClass = '',
    chartClass = '',
    ...restProps
  }: Props = $props();

  // Calculate total value
  let totalValue = $derived(data.reduce((sum, item) => sum + item.value, 0));
  
  // Calculate angles and positions for each slice
  let pieSegments = $derived(() => {
    const segments: PieSegment[] = [];
    if (totalValue === 0) return [];
    
    let startAngle = -Math.PI / 2; // Start from top
    
    for (const item of data) {
      const percentage = (item.value / totalValue) * 100;
      const endAngle = startAngle + (item.value / totalValue) * 2 * Math.PI;
      
      // Calculate mid angle for label positioning
      const midAngle = (startAngle + endAngle) / 2;
      
      // Calculate coordinates for label
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.4 * 0.8; // 80% of chart radius
      const labelRadius = Math.min(width, height) * 0.4 * (donut ? 0.7 : 1.2); // Position label outside pie
      
      segments.push({
        id: item.id,
        name: item.name,
        value: item.value,
        color: item.color || getDefaultColor(segments.length, colorScheme),
        startAngle,
        endAngle,
        midAngle,
        percentage,
        labelX: centerX + Math.cos(midAngle) * labelRadius,
        labelY: centerY + Math.sin(midAngle) * labelRadius,
        path: createArc(centerX, centerY, Math.min(width, height) * 0.4, startAngle, endAngle, donut ? Math.min(width, height) * 0.4 * 0.4 : 0)
      });
      
      startAngle = endAngle;
    }
    
    return segments;
  }) as () => PieSegment[];

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

  // Create SVG arc path
  function createArc(centerX: number, centerY: number, outerRadius: number, startAngle: number, endAngle: number, innerRadius: number = 0): string {
    const startX = centerX + outerRadius * Math.cos(startAngle);
    const startY = centerY + outerRadius * Math.sin(startAngle);
    const endX = centerX + outerRadius * Math.cos(endAngle);
    const endY = centerY + outerRadius * Math.sin(endAngle);
    
    const innerStartX = centerX + innerRadius * Math.cos(startAngle);
    const innerStartY = centerY + innerRadius * Math.sin(startAngle);
    const innerEndX = centerX + innerRadius * Math.cos(endAngle);
    const innerEndY = centerY + innerRadius * Math.sin(endAngle);
    
    const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";
    
    let d = `M ${startX} ${startY} `;
    d += `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endX} ${endY} `;
    
    if (innerRadius > 0) {
      d += `L ${innerEndX} ${innerEndY} `;
      d += `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY} `;
    } else {
      d += `L ${centerX} ${centerY} `;
    }
    
    d += "Z";
    return d;
  }

  let hoveredSegment: string | null = $state(null);
</script>

<div class={`pie-chart ${hostClass}`} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
      {#if showTooltip}
        <Tooltip text="This is a pie chart showing proportions of different categories as slices of a circle." position="top">
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
      {#each pieSegments() as segment}
        <path
          d={segment.path}
          fill={segment.color}
          stroke="white"
          stroke-width={strokeWidth}
          class="cursor-pointer transition-all duration-300 ease-in-out"
          onclick={() => onSliceClick?.(data.find(d => d.id === segment.id)!)}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSliceClick?.(data.find(d => d.id === segment.id)!);
            }
          }}
          onfocus={() => hoveredSegment = segment.id}
          onblur={() => hoveredSegment = null}
          role="button"
          tabindex="0"
          aria-label={`Pie chart slice: ${segment.name}, Value: ${segment.value}, Percentage: ${Math.round(segment.percentage)}%`}
          style={`opacity: ${hoveredSegment === segment.id ? 0.8 : 1}; transform: ${hoveredSegment === segment.id ? 'scale(1.05)' : 'scale(1)'}`}
        />
        
        {#if showLabels && segment.percentage > labelThreshold}
          <text
            x={segment.labelX}
            y={segment.labelY}
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="12"
            fill="#FFFFFF"
            font-weight="bold"
            class="pointer-events-none"
          >
            {Math.round(segment.percentage)}%
          </text>
        {/if}
      {/each}
    </svg>
  </div>

  {#if showLegend}
    <div class="flex flex-wrap gap-4 mt-4">
      {#each data as item, i}
        <div 
          class="flex items-center cursor-pointer"
          onclick={() => onSliceClick?.(item)}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSliceClick?.(item);
            }
          }}
          role="button"
          tabindex="0"
          aria-label={`Legend item: ${item.name}, Value: ${item.value}`}
        >
          <div 
            class="w-4 h-4 rounded mr-2" 
            style={`background-color: ${item.color || getDefaultColor(i, colorScheme)}`}
          ></div>
          <span class="text-sm text-gray-700">{item.name}</span>
          {#if showValues}
            <span class="text-sm text-gray-500 ml-1">({item.value})</span>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>
