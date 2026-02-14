<script lang="ts">
  import { PriceHistoryStyleManager } from '$stylist/design-system/styles/price-history';

  let {
    data = [],
    title = 'Price History',
    currency = '$',
    class: className = ''
  } = $props<{
    data: Array<{ date: string; price: number }>;
    title?: string;
    currency?: string;
    class?: string;
  }>();

  // Find min and max prices for scaling the chart
  const minPrice = $derived(data.length > 0 ? Math.min(...data.map((d: { date: string; price: number }) => d.price)) : 0);
  const maxPrice = $derived(data.length > 0 ? Math.max(...data.map((d: { date: string; price: number }) => d.price)) : 100);
  const priceRange = $derived(maxPrice - minPrice || 1); // Avoid division by zero

  // Calculate chart dimensions
  const chartHeight = 200;
  const chartWidth = 400;

  // Generate CSS classes using the style manager
  const containerClass = $derived(PriceHistoryStyleManager.getContainerClass(className));
  const titleClass = $derived(PriceHistoryStyleManager.getTitleClass());
  const chartContainerClass = $derived(PriceHistoryStyleManager.getChartContainerClass());
  const noDataClass = $derived(PriceHistoryStyleManager.getNoDataClass());
  const infoClass = $derived(PriceHistoryStyleManager.getInfoClass());
  const infoTextClass = $derived(PriceHistoryStyleManager.getInfoTextClass());
</script>

<div class={containerClass}>
  <h3 class={titleClass}>{title}</h3>
  <div class={chartContainerClass}>
    {#if data.length > 0}
      <svg width={chartWidth} height={chartHeight} class={PriceHistoryStyleManager.getSVGClass()}>
        <!-- Grid lines -->
        {#each [0, 0.25, 0.5, 0.75, 1] as tick}
          <line
            x1="0"
            y1={tick * chartHeight}
            x2={chartWidth}
            y2={tick * chartHeight}
            class={PriceHistoryStyleManager.getGridLineClass()}
          />
          <text
            x={chartWidth + 5}
            y={tick * chartHeight + 4}
            class={PriceHistoryStyleManager.getGridTextClass()}
          >
            {Math.round(maxPrice - (tick * priceRange))}
          </text>
        {/each}

        <!-- Price line -->
        <polyline
          fill="none"
          stroke="#3B82F6"
          stroke-width="2"
          points={
            data.map((d: { date: string; price: number }, i: number) => {
              const x = (i / (data.length - 1)) * chartWidth;
              const y = chartHeight - ((d.price - minPrice) / priceRange) * chartHeight;
              return `${x},${y}`;
            }).join(' ')
          }
          class={PriceHistoryStyleManager.getPriceLineClass()}
        />

        <!-- Data points -->
        {#each data as d, i}
          <circle
            cx={(i / (data.length - 1)) * chartWidth}
            cy={chartHeight - ((d.price - minPrice) / priceRange) * chartHeight}
            r="3"
            fill="#3B82F6"
            class={PriceHistoryStyleManager.getDataPointClass()}
          />
        {/each}
      </svg>
    {:else}
      <div class={noDataClass}>
        No price history data available
      </div>
    {/if}
  </div>
  <div class={infoClass}>
    {#if data.length > 0}
      <div class={infoTextClass}>Lowest: {currency}{minPrice}, Highest: {currency}{maxPrice}</div>
    {/if}
  </div>
</div>
