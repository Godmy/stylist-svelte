<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { IconGrid3x3, IconInfo } from '$stylist/components/atoms';
  import Tooltip from '$stylist/components/atoms/interaction/controls/tooltip/index.svelte';

  // Types
  export interface IHeatmapCell {
    /** Уникальный идентификатор ячейки */
    id: string;
    /** Название строки */
    row: string;
    /** Название столбца */
    column: string;
    /** Значение ячейки */
    value: number;
    /** Цвет ячейки (опционально) */
    color?: string;
    /** Описание ячейки (опционально) */
    description?: string;
  }

  /**
   * Расширенные данные для ячейки с вычисленными параметрами
   */
  export interface IExtendedHeatmapCell extends IHeatmapCell {
    /** Позиция X на графике */
    x: number;
    /** Позиция Y на графике */
    y: number;
    /** Ширина ячейки */
    width: number;
    /** Высота ячейки */
    height: number;
    /** Цвет ячейки */
    color: string;
    /** Интенсивность значения (от 0 до 1) */
    intensity: number;
  }

  /**
   * Доступные цветовые схемы для тепловой карты
   */
  export type THeatmapColorScheme = 'blue' | 'red' | 'green' | 'purple' | 'warm' | 'cool';

  /**
   * Типы для пропсов компонента Heatmap
   */
  export interface IHeatmapProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
    /** Данные для отображения на тепловой карте */
    data: IHeatmapCell[];
    /** Заголовок тепловой карты */
    title?: string;
    /** Ширина компонента */
    width?: number;
    /** Высота компонента */
    height?: number;
    /** Показывать ли подсказки при наведении */
    showTooltip?: boolean;
    /** Показывать ли легенду */
    showLegend?: boolean;
    /** Цветовая схема отображения */
    colorScheme?: THeatmapColorScheme;
    /** Показывать ли оси координат */
    showAxis?: boolean;
    /** Цвет осей координат */
    axisColor?: string;
    /** Отступ внутри ячейки */
    cellPadding?: number;
    /** Обработчик клика по ячейке */
    onCellClick?: (item: IHeatmapCell) => void;
    /** Дополнительные CSS классы для контейнера */
    class?: string;
    /** Дополнительные CSS классы для области диаграммы */
    chartClass?: string;
    /** Максимальное значение для нормализации цвета (если не указано, будет вычислено автоматически) */
    maxValue?: number;
    /** Минимальное значение для нормализации цвета */
    minValue?: number;
  }

  import { HeatmapStyleManager } from '$stylist/design-system/styles/architecture/heatmap';

  let {
    data = [],
    title = 'Heatmap',
    width = 600,
    height = 400,
    showTooltip = true,
    showLegend = true,
    colorScheme = 'blue',
    showAxis = true,
    axisColor = 'var(--color-border-default, #E5E7EB)',
    cellPadding = 2,
    onCellClick,
    class: hostClass = '',
    chartClass = '',
    maxValue,
    minValue = 0,
    ...restProps
  }: IHeatmapProps = $props();

  // Get unique rows and columns
  let rows = $derived([...new Set(data.map((item: IHeatmapCell) => item.row))]);
  let columns = $derived([...new Set(data.map((item: IHeatmapCell) => item.column))]);

  // Calculate min/max values if not provided
  let calculatedMaxValue = $derived(maxValue || (data.length > 0 ? Math.max(...data.map((d: IHeatmapCell) => d.value)) : 100));

  // Calculate dimensions
  let chartWidth = $derived(width - (showAxis ? 60 : 10));
  let chartHeight = $derived(height - (showAxis ? 40 : 10));

  let cellWidth = $derived(chartWidth / columns.length);
  let cellHeight = $derived(chartHeight / rows.length);

  // Calculate cell positions and colors
  let heatmapCells = $derived(() => {
    const cells: IExtendedHeatmapCell[] = data.map((cell: IHeatmapCell) => {
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
  }) as () => IExtendedHeatmapCell[];

  // Function to get color based on scheme and intensity
  function getColorByScheme(intensity: number, scheme: THeatmapColorScheme): string {
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

  // Вычисляем CSS-классы с помощью StyleManager
  const containerClasses = $derived(HeatmapStyleManager.getContainerClasses(hostClass));
  const chartContainerClasses = $derived(HeatmapStyleManager.getChartContainerClasses(chartClass));
  const titleClasses = $derived(HeatmapStyleManager.getTitleClasses());
  const svgClasses = $derived(HeatmapStyleManager.getSvgClasses());
  const axisClasses = $derived(HeatmapStyleManager.getAxisClasses());
  const axisTextClasses = $derived(HeatmapStyleManager.getAxisTextClasses());
  const legendClasses = $derived(HeatmapStyleManager.getLegendClasses());
  const legendTitleClasses = $derived(HeatmapStyleManager.getLegendTitleClasses());
  const legendGradientClasses = $derived(HeatmapStyleManager.getLegendGradientClasses());
  const legendLabelsClasses = $derived(HeatmapStyleManager.getLegendLabelsClasses());
  const tooltipButtonClasses = $derived(HeatmapStyleManager.getTooltipButtonClasses());
</script>

<div class={containerClasses} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class="flex items-center justify-between mb-2">
      <h3 class={titleClasses}>{title}</h3>
      {#if showTooltip}
        <Tooltip content="This is a heatmap showing data density through color variations in a matrix format." placement="top">
          <IconInfo size="sm" class={tooltipButtonClasses} />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={chartContainerClasses}>
    <svg
      width={width}
      height={height}
      class={svgClasses}
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
          class={axisClasses}
        />
        <!-- Y axis -->
        <line
          x1={showAxis ? 50 : 5}
          y1={10}
          x2={showAxis ? 50 : 5}
          y2={height - 10}
          stroke={axisColor}
          stroke-width="1"
          class={axisClasses}
        />

        <!-- X axis labels -->
        {#each columns as col, i}
          <text
            x={50 + i * cellWidth + cellWidth / 2}
            y={height - 5}
            text-anchor="middle"
            font-size="10"
            fill="var(--color-text-secondary, #6B7280)"
            class={axisTextClasses}
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
            fill="var(--color-text-secondary, #6B7280)"
            dominant-baseline="middle"
            class={axisTextClasses}
          >
            {row.length > 10 ? row.substring(0, 7) + '...' : row}
          </text>
        {/each}
      {/if}

      <!-- Cells -->
      {#each heatmapCells() as cell}
        <g
          class={HeatmapStyleManager.getCellClasses(hoveredCell === cell.id)}
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
              fill={cell.intensity > 0.5 ? "var(--color-text-inverse, #ffffff)" : "var(--color-text-primary, #333333)"}
              class="pointer-events-none text-xs"
            >
              {Math.round(cell.value)}
            </text>
          {/if}
        </g>
      {/each}
    </svg>
  </div>

  {#if showLegend}
    <div class={legendClasses}>
      <div class={legendLabelsClasses}>
        <span>{minValue}</span>
        <span>{(minValue + calculatedMaxValue) / 2}</span>
        <span>{calculatedMaxValue}</span>
      </div>
      <div
        class={legendGradientClasses}
        style={`background: linear-gradient(to right,
          ${getColorByScheme(0, colorScheme)},
          ${getColorByScheme(0.5, colorScheme)},
          ${getColorByScheme(1, colorScheme)})`}
      ></div>
      <div class={legendTitleClasses}>
        {colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)} Color Scale
      </div>
    </div>
  {/if}
</div>

