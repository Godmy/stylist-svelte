<script lang="ts">
  import { BurnDownChartStyleManager } from '$stylist/design-system/styles/information/burn-down-chart';
  import { onMount } from 'svelte';

  interface BurnDownPoint {
    date: Date;
    ideal: number;
    actual: number;
  }

  interface BurnDownData {
    sprintStart: Date;
    sprintEnd: Date;
    points: BurnDownPoint[];
  }

  /**
   * Компонент диаграммы сгорания задач (Burn Down Chart)
   *
   * Отображает прогресс выполнения задач в спринте, сравнивая идеальное и фактическое количество оставшихся задач
   *
   * @param {BurnDownData} data - Данные для построения диаграммы
   * @param {number} [width=600] - Ширина диаграммы в пикселях
   * @param {number} [height=400] - Высота диаграммы в пикселях
   * @param {string} [title="Burn Down Chart"] - Заголовок диаграммы
   */
  let {
    data,
    width = 600,
    height = 400,
    title = "Burn Down Chart"
  }: {
    data: BurnDownData;
    width?: number;
    height?: number;
    title?: string;
  } = $props();

  let chartContainer: HTMLDivElement;

  // Convert dates to timestamps for easier calculations
  const getTimestamps = () => {
    const start = new Date(data.sprintStart).getTime();
    const end = new Date(data.sprintEnd).getTime();
    return { start, end };
  };

  // Calculate chart dimensions
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Get min/max values for scaling
  const getMinMaxValues = () => {
    if (!data.points.length) return { minActual: 0, maxActual: 0, minIdeal: 0, maxIdeal: 0 };

    const actualValues = data.points.map((p: BurnDownPoint) => p.actual);
    const idealValues = data.points.map((p: BurnDownPoint) => p.ideal);

    return {
      minActual: Math.min(...actualValues),
      maxActual: Math.max(...actualValues),
      minIdeal: Math.min(...idealValues),
      maxIdeal: Math.max(...idealValues)
    };
  };

  // Generate path for ideal line
  const generateIdealPath = () => {
    if (!data.points.length) return '';

    const { start, end } = getTimestamps();
    const { maxIdeal } = getMinMaxValues();

    const points = data.points.map((point: BurnDownPoint, i: number) => {
      const x = margin.left + (i * innerWidth / (data.points.length - 1));
      const y = margin.top + innerHeight - (point.ideal / maxIdeal) * innerHeight;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    });

    return points.join(' ');
  };

  // Generate path for actual line
  const generateActualPath = () => {
    if (!data.points.length) return '';

    const { start, end } = getTimestamps();
    const { maxActual } = getMinMaxValues();

    const points = data.points.map((point: BurnDownPoint, i: number) => {
      const x = margin.left + (i * innerWidth / (data.points.length - 1));
      const y = margin.top + innerHeight - (point.actual / maxActual) * innerHeight;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    });

    return points.join(' ');
  };

  // Generate x-axis labels
  const generateXLabels = () => {
    if (!data.points.length) return [];

    const labels = [];
    const interval = Math.ceil(data.points.length / 5); // Show max 5 labels

    for (let i = 0; i < data.points.length; i += interval) {
      const point = data.points[i];
      const x = margin.left + (i * innerWidth / (data.points.length - 1));
      const dateStr = new Date(point.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });

      labels.push({ x, y: height - 10, text: dateStr });
    }

    return labels;
  };

  // Generate y-axis labels
  const generateYLabels = () => {
    const maxVal = Math.max(getMinMaxValues().maxActual, getMinMaxValues().maxIdeal);
    const step = Math.ceil(maxVal / 5);
    const labels = [];

    for (let i = 0; i <= 5; i++) {
      const value = i * step;
      const y = margin.top + innerHeight - (value / maxVal) * innerHeight;

      labels.push({ x: 10, y, text: value.toString() });
    }

    return labels;
  };

  // Generate CSS classes using the style manager
  const containerClass = $derived(BurnDownChartStyleManager.getContainerClass());
  const titleClass = $derived(BurnDownChartStyleManager.getTitleClass());
  const svgClass = $derived(BurnDownChartStyleManager.getSvgClass());
  const gridLineClass = $derived(BurnDownChartStyleManager.getGridLineClass());
  const axisClass = $derived(BurnDownChartStyleManager.getAxisClass());
  const idealLineClass = $derived(BurnDownChartStyleManager.getIdealLineClass());
  const actualLineClass = $derived(BurnDownChartStyleManager.getActualLineClass());
  const dataPointClass = $derived(BurnDownChartStyleManager.getDataPointClass());
  const xAxisLabelClass = $derived(BurnDownChartStyleManager.getXAxisLabelClass());
  const yAxisLabelClass = $derived(BurnDownChartStyleManager.getYAxisLabelClass());
  const legendContainerClass = $derived(BurnDownChartStyleManager.getLegendContainerClass());
  const legendLineClass = $derived(BurnDownChartStyleManager.getLegendLineClass());
  const legendTextClass = $derived(BurnDownChartStyleManager.getLegendTextClass());
</script>

<div bind:this={chartContainer} class={containerClass}>
  <h3 class={titleClass}>{title}</h3>
  <svg width={width} height={height} class={svgClass}>
    <!-- Grid lines -->
    {#each Array(5) as _, i}
      {@const y = margin.top + (i * innerHeight / 5)}
      <line
        x1={margin.left}
        y1={y}
        x2={width - margin.right}
        y2={y}
        class={gridLineClass}
      />
    {/each}

    <!-- X and Y axis -->
    <line
      x1={margin.left}
      y1={height - margin.bottom}
      x2={width - margin.right}
      y2={height - margin.bottom}
      class={axisClass}
    />
    <line
      x1={margin.left}
      y1={margin.top}
      x2={margin.left}
      y2={height - margin.bottom}
      class={axisClass}
    />

    <!-- Ideal line -->
    {#if data.points.length}
      <path
        d={generateIdealPath()}
        class={idealLineClass}
      />
    {/if}

    <!-- Actual line -->
    {#if data.points.length}
      <path
        d={generateActualPath()}
        class={actualLineClass}
      />
    {/if}

    <!-- Data points -->
    {#if data.points.length}
      {#each data.points as point, i}
        {@const x = margin.left + (i * innerWidth / (data.points.length - 1))}
        {@const actualY = margin.top + innerHeight - (point.actual / getMinMaxValues().maxActual) * innerHeight}
        <circle
          cx={x}
          cy={actualY}
          r="4"
          class={dataPointClass}
        />
      {/each}
    {/if}

    <!-- X-axis labels -->
    {#each generateXLabels() as label}
      <text
        x={label.x}
        y={label.y}
        class={xAxisLabelClass}
      >
        {label.text}
      </text>
    {/each}

    <!-- Y-axis labels -->
    {#each generateYLabels() as label}
      <text
        x={label.x}
        y={label.y}
        class={yAxisLabelClass}
        dominant-baseline="middle"
      >
        {label.text}
      </text>
    {/each}

    <!-- Legend -->
    <g transform={`translate(${width - 150}, ${margin.top})`}>
      <line x1="0" y1="0" x2="20" y2="0" class={legendLineClass} />
      <text x="25" y="5" class={legendTextClass}>Идеальный</text>
      <line x1="0" y1="20" x2="20" y2="20" class={legendLineClass} />
      <text x="25" y="25" class={legendTextClass}>Фактический</text>
    </g>
  </svg>
</div>

<style>
  :global(.c-burn-down-chart .chart-title) {
    text-align: center;
  }
</style>
