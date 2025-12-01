<script lang="ts">
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
</script>

<div class={`bg-white p-4 rounded-lg shadow ${className}`}>
  <h3 class="font-semibold mb-4">{title}</h3>
  <div class="relative">
    {#if data.length > 0}
      <svg width={chartWidth} height={chartHeight} class="w-full">
        <!-- Grid lines -->
        {#each [0, 0.25, 0.5, 0.75, 1] as tick}
          <line 
            x1="0" 
            y1={tick * chartHeight} 
            x2={chartWidth} 
            y2={tick * chartHeight} 
            class="stroke-gray-200 stroke-1" 
          />
          <text 
            x={chartWidth + 5} 
            y={tick * chartHeight + 4} 
            class="text-xs fill-gray-500"
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
        />
        
        <!-- Data points -->
        {#each data as d, i}
          <circle
            cx={(i / (data.length - 1)) * chartWidth}
            cy={chartHeight - ((d.price - minPrice) / priceRange) * chartHeight}
            r="3"
            fill="#3B82F6"
          />
        {/each}
      </svg>
    {:else}
      <div class="h-48 flex items-center justify-center text-gray-500">
        No price history data available
      </div>
    {/if}
  </div>
  <div class="mt-4 text-sm text-gray-600">
    {#if data.length > 0}
      <div>Lowest: {currency}{minPrice}, Highest: {currency}{maxPrice}</div>
    {/if}
  </div>
</div>