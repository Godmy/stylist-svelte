<script lang="ts">
  /**
   * Компонент BarChart
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает только за отображение столбчатой диаграммы
   * - OCP: Легко расширяем за счет пропсов
   * - LSP: Подчиняется контракту, заданному интерфейсом IBarChartProps
   * - ISP: Интерфейс пропсов разделен на конкретные, необходимые части
   * - DIP: Зависит от абстракций (типов и стилей), а не от деталей реализации
   *
   * Следует Atomic Design: Это молекула, визуализирующая набор данных
   */

  import type { HTMLAttributes } from 'svelte/elements';
  import { Info } from 'lucide-svelte';
  import Tooltip from '../../../../atoms/controls/buttons/tooltip/Tooltip.svelte';
  import { BarChartStyleManager } from './styles';
  import type { IBarChartProps, IBarPosition } from './types';

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
  }: IBarChartProps & HTMLAttributes<HTMLDivElement> = $props();

  // Calculate max value if not provided
  let calculatedMaxValue = $derived(maxValue || Math.max(...data.map(d => d.value), 0));

  // Calculate dimensions
  let chartWidth = $derived(width - (showAxis ? 60 : 10));
  let chartHeight = $derived(height - (showAxis ? 40 : 10));

  // Calculate bar positions
  // Using imported IBarPosition type instead of local definition

  const barPositions = $derived(() => {
    const positions: IBarPosition[] = [];
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
  });

  // Get default color based on index and scheme
  function getDefaultColor(index: number, scheme: string): string {
    const schemes: Record<string, string[]> = {
      default: ['var(--color-primary-500)', 'var(--color-success-500)', 'var(--color-error-500)', 'var(--color-warning-500)', 'var(--color-info-500)', 'var(--color-pink-500)'],
      warm: ['var(--color-red-400)', 'var(--color-orange-400)', 'var(--color-amber-400)', 'var(--color-yellow-400)', 'var(--color-yellow-200)'],
      cool: ['var(--color-blue-400)', 'var(--color-emerald-400)', 'var(--color-teal-300)', 'var(--color-sky-300)', 'var(--color-slate-300)'],
      neutral: ['var(--color-gray-500)', 'var(--color-gray-400)', 'var(--color-gray-300)', 'var(--color-gray-200)', 'var(--color-gray-100)']
    };

    const colorList = schemes[scheme] || schemes.default;
    return colorList[index % colorList.length];
  }

  let hoveredBar: number | null = $state(null);
</script>

<div class={BarChartStyleManager.getContainerClasses(hostClass)} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class={BarChartStyleManager.getTitleContainerClasses()}>
      <h3 class={BarChartStyleManager.getTitleClasses()}>{title}</h3>
      {#if showTooltip}
        <Tooltip text="This is a bar chart showing categorical data with rectangular bars proportional to the values they represent." position="top">
          <Info class={BarChartStyleManager.getInfoIconClasses()} />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={BarChartStyleManager.getChartContainerClasses(chartClass)}>
    <svg
      width={width}
      height={height}
      class={BarChartStyleManager.getSvgClasses()}
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
            fill="var(--color-text-tertiary)"
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
        {#each barPositions() as position, i (position.x)}
          <text
            x={position.x + barWidth / 2}
            y={height - 5}
            text-anchor="middle"
            font-size="10"
            fill="var(--color-text-tertiary)"
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
            class={BarChartStyleManager.getBarClasses(hoveredBar === i)}
            style={`opacity: ${hoveredBar === i ? 0.8 : 1};`}

          />
        </g>
      {/each}
    </svg>
  </div>

  {#if showLegend}
    <div class={BarChartStyleManager.getLegendClasses()}>
      {#each data as item, i}
        <div class={BarChartStyleManager.getLegendItemClasses()}>
          <div
            class="w-4 h-4 rounded mr-2"
            style={`background-color: ${item.color || getDefaultColor(i, colorScheme)}`}
          ></div>
          <span class={BarChartStyleManager.getLegendTextClasses()}>{item.name}</span>
          <span class={BarChartStyleManager.getLegendValueClasses()}>({item.value})</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
