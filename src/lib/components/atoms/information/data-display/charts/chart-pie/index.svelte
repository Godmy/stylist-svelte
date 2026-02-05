<script lang="ts">
  import type { PieChartProps } from '$stylist/design-system';
  import { createPieChartState } from '../../state.svelte';

  let props: PieChartProps = $props();
  const state = createPieChartState(props);
  const data = $derived(props.data ?? []);

  const total = $derived(data.reduce((sum, item) => sum + item.value, 0));
  const center = 100;
  const radius = 90;
  const startAngle = 0;
</script>

<div class={state.containerClasses}>
  <svg width="200" height="200" class={state.svgClasses}>
    {#each data as item, i (i)}
      {@const value = item.value}
      {@const sliceAngle = total === 0 ? 0 : (value / total) * 360}
      {@const currentSliceStartAngle = i === 0 ? startAngle : data.slice(0, i).reduce((sum, d) => sum + (total === 0 ? 0 : (d.value / total) * 360), startAngle)}
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
