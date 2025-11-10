<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Grid3X3, Info } from 'lucide-svelte';
  import Tooltip from '../tooltips/Tooltip.svelte';

  type CellData = {
    id: string;
    row: string;
    column: string;
    value: number;
    color?: string;
    description?: string;
  };

  type ExtendedCellData = CellData & {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    intensity: number;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    data: CellData[];
    title?: string;
    width?: number;
    height?: number;
    showTooltip?: boolean;
    showLegend?: boolean;
    colorScheme?: 'blue' | 'red' | 'green' | 'purple' | 'warm' | 'cool';
    showAxis?: boolean;
    axisColor?: string;
    cellPadding?: number;
    onCellClick?: (item: CellData) => void;
    class?: string;
    chartClass?: string;
    maxValue?: number;
    minValue?: number;
  };

  let {
    data = [],
    title = 'Heatmap',
    width = 600,
    height = 400,
    showTooltip = true,
    showLegend = true,
    colorScheme = 'blue',
    showAxis = true,
    axisColor = '#E5E7EB',
    cellPadding = 2,
    onCellClick,
    class: hostClass = '',
    chartClass = '',
    maxValue,
    minValue = 0,
    ...restProps
  }: Props = $props();

  // Get unique rows and columns
  let rows = $derived([...new Set(data.map(item => item.row))]);
  let columns = $derived([...new Set(data.map(item => item.column))]);

  // Calculate min/max values if not provided
  let calculatedMaxValue = $derived(maxValue || (data.length > 0 ? Math.max(...data.map(d => d.value)) : 100));

  // Calculate dimensions
  let chartWidth = $derived(width - (showAxis ? 60 : 10));
  let chartHeight = $derived(height - (showAxis ? 40 : 10));
  
  let cellWidth = $derived(chartWidth / columns.length);
  let cellHeight = $derived(chartHeight / rows.length);

  // Calculate cell positions and colors
  let heatmapCells = $derived(() => {
    const cells: ExtendedCellData[] = data.map(cell => {
      const rowIndex = rows.indexOf(cell.row);
      const colIndex = columns.indexOf(cell.column);
      
      const x = colIndex * cellWidth + (showAxis ? 50 : 5) + cellPadding;
      const y = rowIndex * cellHeight + (showAxis ? 10 : 5) + cellPadding;
      const width = cellWidth - cellPadding * 2;
      const height = cellHeight - cellPadding * 2;
      
      // Calculate color intensity based on value
      const intensity = (cell.value - minValue) / (calculatedMaxValue - minValue);
      
      // Determine color based on scheme and intensity
      const color = cell.color || getColorByScheme(intensity, colorScheme);
      
      return {
        ...cell,
        x,
        y,
        width,
        height,
        color,
        intensity
      };
    });
    
    return cells;
  }) as () => ExtendedCellData[];

  // Function to get color based on scheme and intensity
  function getColorByScheme(intensity: number, scheme: string): string {
    // Normalize intensity to 0-100 range for color calculation
    const normalizedIntensity = Math.min(100, Math.max(0, intensity * 100));
    
    switch (scheme) {
      case 'red':
        return `hsl(0, 70%, ${70 - normalizedIntensity * 0.5}%)`;
      case 'green':
        return `hsl(120, 60%, ${50 + (100 - normalizedIntensity) * 0.3}%)`;
      case 'purple':
        return `hsl(270, 60%, ${70 - normalizedIntensity * 0.4}%)`;
      case 'warm':
        return `hsl(${normalizedIntensity * 0.4}, 70%, 60%)`; // From red-orange-yellow
      case 'cool':
        return `hsl(${240 - normalizedIntensity * 0.8}, 70%, 60%)`; // From blue to cyan
      case 'blue':
      default:
        return `hsl(210, 80%, ${80 - normalizedIntensity * 0.6}%)`; // From light blue to dark blue
    }
  }

  let hoveredCell: string | null = $state(null);
</script>

<div class={`heatmap ${hostClass}`} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-medium text-gray-900">{title}</h3>
      {#if showTooltip}
        <Tooltip text="This is a heatmap showing data density through color variations in a matrix format." position="top">
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
        
        <!-- X axis labels -->
        {#each columns as col, i}
          <text 
            x={50 + i * cellWidth + cellWidth / 2} 
            y={height - 5} 
            text-anchor="middle" 
            font-size="10" 
            fill="#6B7280"
          >
            {col.length > 10 ? col.substring(0, 7) + '...' : col}
          </text>
        {/each}
        
        <!-- Y axis labels -->
        {#each rows as row, i}
          <text 
            x={showAxis ? 45 : 0} 
            y={10 + i * cellHeight + cellHeight / 2} 
            text-anchor="end" 
            font-size="10" 
            fill="#6B7280"
            dominant-baseline="middle"
          >
            {row.length > 10 ? row.substring(0, 7) + '...' : row}
          </text>
        {/each}
      {/if}

      <!-- Cells -->
      {#each heatmapCells() as cell}
        <g
          class="cursor-pointer"
          onclick={() => onCellClick?.(cell)}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onCellClick?.(cell);
            }
          }}
          onfocus={() => hoveredCell = cell.id}
          onblur={() => hoveredCell = null}
          role="button"
          tabindex="0"
          aria-label={`Heatmap cell: ${cell.row} - ${cell.column}, Value: ${cell.value}`}
        >
          <rect
            x={cell.x}
            y={cell.y}
            width={cell.width}
            height={cell.height}
            fill={cell.color}
            rx="2"
            ry="2"
            class="transition-all duration-200 ease-in-out"
            style={`opacity: ${hoveredCell === cell.id ? 0.8 : 1};`}
          />
          <!-- Only show text if cell is large enough -->
          {#if cell.width > 20 && cell.height > 15}
            <text 
              x={cell.x + cell.width / 2} 
              y={cell.y + cell.height / 2} 
              text-anchor="middle" 
              dominant-baseline="middle" 
              font-size="10" 
              fill={cell.intensity > 0.5 ? "#ffffff" : "#333333"}
              class="pointer-events-none"
            >
              {Math.round(cell.value)}
            </text>
          {/if}
        </g>
      {/each}
    </svg>
  </div>

  {#if showLegend}
    <div class="mt-4">
      <div class="flex justify-between text-xs text-gray-500 mb-1">
        <span>{minValue}</span>
        <span>{(minValue + calculatedMaxValue) / 2}</span>
        <span>{calculatedMaxValue}</span>
      </div>
      <div 
        class="h-4 w-full rounded-full"
        style="background: linear-gradient(to right, 
          {getColorByScheme(0, colorScheme)}, 
          {getColorByScheme(0.5, colorScheme)}, 
          {getColorByScheme(1, colorScheme)})"
      ></div>
      <div class="text-xs text-gray-600 mt-1 text-center">
        {colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)} Color Scale
      </div>
    </div>
  {/if}
</div>
