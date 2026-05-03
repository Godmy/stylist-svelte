<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import Tooltip from '$stylist/control/component/atom/tooltip/index.svelte';
  import { createBarChartState } from '$stylist/chart/function/state/bar-chart';
  import type { BarChartRecipe } from '$stylist/chart/interface/recipe/bar-chart';

  let props: BarChartRecipe = $props();
  const state = createBarChartState(props);
</script>

<div class={state.containerClasses} style={`width: ${props.width ?? 600}px; height: ${props.height ?? 400}px;`} {...props}>
  {#if props.title}
    <div class={state.titleContainerClasses}>
      <h3 class={state.titleClasses}>{props.title}</h3>
      {#if props.showTooltip}
        <Tooltip content="This is a bar chart showing categorical data with rectangular bars proportional to the values they represent." placement="top">
          <BaseIcon name="info" class={state.infoIconClasses} />
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
        />
        <!-- Y axis -->
        <line
          x1={props.showAxis ? 50 : 5}
          y1={10}
          x2={props.showAxis ? 50 : 5}
          y2={(props.height ?? 400) - 10}
          stroke={props.axisColor ?? 'var(--color-border-primary)'}
          stroke-width="1"
        />

        <!-- Y axis labels -->
        {#each state.yAxisValues as val, i}
          <text
            x={props.showAxis ? 45 : 0}
            y={(props.height ?? 400) - 15 - (i * (state.chartHeight / 4))}
            text-anchor="end"
            font-size="10"
            fill="var(--color-text-tertiary)"
          >
            {Math.round(val)}
          </text>
          <line
            x1={props.showAxis ? 48 : 3}
            y1={(props.height ?? 400) - 10 - (i * (state.chartHeight / 4))}
            x2={(props.width ?? 600) - 10}
            y2={(props.height ?? 400) - 10 - (i * (state.chartHeight / 4))}
            stroke={props.axisColor ?? 'var(--color-border-primary)'}
            stroke-dasharray="3,3"
            stroke-width="0.5"
          />
        {/each}

        <!-- X axis labels -->
        {#each state.barPositions as position, i (position.x)}
          <text
            x={position.x + (props.barWidth ?? 30) / 2}
            y={(props.height ?? 400) - 5}
            text-anchor="middle"
            font-size="10"
            fill="var(--color-text-tertiary)"
          >
            {props.data[i].name}
          </text>
        {/each}
      {/if}

      <!-- Bars -->
      {#each state.barPositions as position, i}
        <g
          class="cursor-pointer"
          onclick={() => props.onBarClick?.(props.data[i])}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              props.onBarClick?.(props.data[i]);
            }
          }}
          onfocus={() => state.handleBarFocus(i)}
          onblur={state.handleBarBlur}
          role="button"
          tabindex="0"
          aria-label={`Bar chart item: ${props.data[i].name}, Value: ${props.data[i].value}`}
        >
          <rect
            x={position.x}
            y={position.y}
            width={position.width}
            height={position.height}
            fill={position.color}
            rx="2"
            ry="2"
            class={state.barClasses(state.hoveredBar === i)}
            style={`opacity: ${state.hoveredBar === i ? 0.8 : 1};`}

          />
        </g>
      {/each}
    </svg>
  </div>

  {#if props.showLegend}
    <div class={state.legendClasses}>
      {#each props.data ?? [] as item, i}
        <div class={state.legendItemClasses}>
          <div
            class="w-4 h-4 rounded mr-2"
            style={`background-color: ${item.color ?? state.resolvedColorScheme}`}
          ></div>
          <span class={state.legendTextClasses}>{item.name}</span>
          <span class={state.legendValueClasses}>({item.value})</span>
        </div>
      {/each}
    </div>
  {/if}
</div>

