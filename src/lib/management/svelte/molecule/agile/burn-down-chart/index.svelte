<script lang="ts">
  import { onMount } from 'svelte';
  import { createBurnDownChartState } from '$stylist/management/function/state/burn-down-chart';
  import type { BurnDownPoint } from '$stylist/management/interface/struct/burn-down-point';
  import type { BurnDownData } from '$stylist/management/interface/struct/burn-down-data';

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

  const state = createBurnDownChartState({ data, width, height, title });

  let chartContainer: HTMLDivElement;
</script>

<div bind:this={chartContainer} class={state.containerClass}>
  <h3 class={state.titleClass}>{state.title}</h3>
  <svg width={state.width} height={state.height} class={state.svgClass}>
    <!-- Grid lines -->
    {#each Array(5) as _, i}
      {@const y = state.margins.top + (i * state.innerHeight / 5)}
      <line
        x1={state.margins.left}
        y1={y}
        x2={state.width - state.margins.right}
        y2={y}
        class={state.gridLineClass}
      />
    {/each}

    <!-- X and Y axis -->
    <line
      x1={state.margins.left}
      y1={state.height - state.margins.bottom}
      x2={state.width - state.margins.right}
      y2={state.height - state.margins.bottom}
      class={state.axisClass}
    />
    <line
      x1={state.margins.left}
      y1={state.margins.top}
      x2={state.margins.left}
      y2={state.height - state.margins.bottom}
      class={state.axisClass}
    />

    <!-- Ideal line -->
    {#if state.data.points.length}
      <path
        d={state.idealPath}
        class={state.idealLineClass}
      />
    {/if}

    <!-- Actual line -->
    {#if state.data.points.length}
      <path
        d={state.actualPath}
        class={state.actualLineClass}
      />
    {/if}

    <!-- Data points -->
    {#if state.data.points.length}
      {#each state.data.points as point, i}
        {@const x = state.margins.left + (i * state.innerWidth / (state.data.points.length - 1))}
        {@const actualY = state.margins.top + state.innerHeight - (point.actual / state.minMaxValues.maxActual) * state.innerHeight}
        <circle
          cx={x}
          cy={actualY}
          r="4"
          class={state.dataPointClass}
        />
      {/each}
    {/if}

    <!-- X-axis labels -->
    {#each state.xLabels as label}
      <text
        x={label.x}
        y={label.y}
        class={state.xAxisLabelClass}
      >
        {label.text}
      </text>
    {/each}

    <!-- Y-axis labels -->
    {#each state.yLabels as label}
      <text
        x={label.x}
        y={label.y}
        class={state.yAxisLabelClass}
        dominant-baseline="middle"
      >
        {label.text}
      </text>
    {/each}

    <!-- Legend -->
    <g transform={`translate(${state.width - 150}, ${state.margins.top})`}>
      <line x1="0" y1="0" x2="20" y2="0" class={state.legendLineClass} />
      <text x="25" y="5" class={state.legendTextClass}>Идеальный</text>
      <line x1="0" y1="20" x2="20" y2="20" class={state.legendLineClass} />
      <text x="25" y="25" class={state.legendTextClass}>Фактический</text>
    </g>
  </svg>
</div>

<style>
  :global(.c-burn-down-chart .chart-title) {
    text-align: center;
  }
</style>




