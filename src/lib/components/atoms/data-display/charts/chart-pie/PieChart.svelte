<script lang="ts">
  import type { ChartDataPoint } from './types';
  import { AnalyticsChartStyleManager } from './styles';

  let { data }: {
    data: ChartDataPoint[];
  } = $props();

  // Pie chart calculations
  const total = $derived(data.reduce((sum, item) => sum + item.value, 0));
  const center = 100; // Assuming a 200x200 SVG, center is 100,100
  const radius = 90; // Slightly less than 100 for padding
  const startAngle = 0;
</script>

<div class="flex items-center justify-center h-full">
  <svg width="200" height="200" class={AnalyticsChartStyleManager.getChartSVGClass()}>
    {#each data as item, i (i)}
      {@const value = item.value}
      {@const sliceAngle = (value / total) * 360}
      {@const currentSliceStartAngle = i === 0 ? startAngle : data.slice(0, i).reduce((sum, d) => sum + (d.value / total) * 360, startAngle)}
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
