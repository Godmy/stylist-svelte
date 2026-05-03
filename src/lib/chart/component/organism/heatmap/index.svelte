<script lang="ts">
  import Icon from '$stylist/media/component/atom/icon/index.svelte';
  import type { HeatmapRecipe } from '$stylist/chart/interface/recipe/heatmap';
  import Tooltip from '$stylist/control/component/atom/tooltip/index.svelte';
  import { createHeatmapState } from '$stylist/chart/function/state/heatmap';
  import { ObjectManagerHeatmap } from '$stylist/chart/class/object-manager/heatmap';

  let props: HeatmapRecipe = $props();
  const state = createHeatmapState(props);
</script>

<div class={state.containerClasses} style={`width: ${props.width ?? 600}px; height: ${props.height ?? 400}px;`} {...props}>
  {#if props.title}
    <div class="flex items-center justify-between mb-2">
      <h3 class={state.titleClasses}>{props.title}</h3>
      {#if props.showTooltip}
        <Tooltip content="This is a heatmap showing data density through color variations in a matrix format." placement="top">
          <Icon name="info" size="sm" class={state.tooltipButtonClasses} />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={state.chartContainerClasses}>
    <svg
      width={props.width ?? 600}
      height={props.height ?? 400}
      class={state.svgClasses}
    >
      {#if props.showAxis}
        <!-- X axis -->
        <line
          x1={props.showAxis ? 50 : 5}
          y1={(props.height ?? 400) - 10}
          x2={(props.width ?? 600) - 10}
          y2={(props.height ?? 400) - 10}
          stroke={props.axisColor ?? 'var(--color-border-primary)'}
          stroke-width="1"
          class={state.axisClasses}
        />
        <!-- Y axis -->
        <line
          x1={props.showAxis ? 50 : 5}
          y1={10}
          x2={props.showAxis ? 50 : 5}
          y2={(props.height ?? 400) - 10}
          stroke={props.axisColor ?? 'var(--color-border-primary)'}
          stroke-width="1"
          class={state.axisClasses}
        />

        <!-- X axis labels -->
        {#each state.columns as col, i}
          <text
            x={50 + i * state.cellWidth + state.cellWidth / 2}
            y={(props.height ?? 400) - 5}
            text-anchor="middle"
            font-size="10"
            fill="var(--color-text-secondary)"
            class={state.axisTextClasses}
          >
            {ObjectManagerHeatmap.resolveAxisLabel(col)}
          </text>
        {/each}

        <!-- Y axis labels -->
        {#each state.rows as row, i}
          <text
            x={props.showAxis ? 45 : 0}
            y={10 + i * state.cellHeight + state.cellHeight / 2}
            text-anchor="end"
            font-size="10"
            fill="var(--color-text-secondary)"
            dominant-baseline="middle"
            class={state.axisTextClasses}
          >
            {ObjectManagerHeatmap.resolveAxisLabel(row)}
          </text>
        {/each}
      {/if}

      <!-- Cells -->
      {#each state.heatmapCells as cell}
        <g
          class={state.cellClasses(state.hoveredCell === cell.id)}
          onclick={() => props.onCellClick?.(cell)}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              props.onCellClick?.(cell);
            }
          }}
          onfocus={() => state.handleCellFocus(cell.id)}
          onblur={state.handleCellBlur}
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
            style={`opacity: ${state.hoveredCell === cell.id ? 0.8 : 1};`}
          />
          {#if cell.width > 20 && cell.height > 15}
            <text
              x={cell.x + cell.width / 2}
              y={cell.y + cell.height / 2}
              text-anchor="middle"
              dominant-baseline="middle"
              font-size="10"
              fill={cell.intensity > 0.5 ? "var(--color-text-inverse)" : "var(--color-text-primary)"}
              class="pointer-events-none text-xs"
            >
              {Math.round(cell.value)}
            </text>
          {/if}
        </g>
      {/each}
    </svg>
  </div>

  {#if props.showLegend}
    <div class={state.legendClasses}>
      <div class={state.legendLabelsClasses}>
        <span>{props.minValue ?? 0}</span>
        <span>{ObjectManagerHeatmap.resolveLegendMidpoint(props.minValue ?? 0, state.calculatedMaxValue)}</span>
        <span>{state.calculatedMaxValue}</span>
      </div>
      <div class={state.legendGradientClasses} style={`background-image: ${ObjectManagerHeatmap.resolveLegendGradient(state.resolvedColorScheme)}`}></div>
      <div class={state.legendTitleClasses}>
        {ObjectManagerHeatmap.resolveLegendTitle(state.resolvedColorScheme)}
      </div>
    </div>
  {/if}
</div>

