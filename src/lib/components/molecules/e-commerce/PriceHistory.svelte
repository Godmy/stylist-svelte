<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { TrendingUp, TrendingDown, Info, Calendar, DollarSign } from 'lucide-svelte';

  type PricePoint = {
    date: Date;
    price: number;
    volume?: number; // Optional trading volume
    change?: number; // Price change in %
  };

  type TimeRange = '7d' | '30d' | '90d' | '1y' | 'all';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    productTitle?: string;
    initialData: PricePoint[];
    timeRange?: TimeRange;
    showTrendArrow?: boolean;
    showPercentageChange?: boolean;
    showPriceChange?: boolean;
    showVolume?: boolean;
    showTooltips?: boolean;
    showAxis?: boolean;
    chartHeight?: number;
    colorUp?: string;
    colorDown?: string;
    class?: string;
    headerClass?: string;
    chartClass?: string;
    onTimeRangeChange?: (range: TimeRange) => void;
    onPricePointHover?: (point: PricePoint) => void;
    locale?: string;
    currency?: string;
  };

  let {
    productTitle = 'Product',
    initialData = [],
    timeRange = '30d',
    showTrendArrow = true,
    showPercentageChange = true,
    showPriceChange = true,
    showVolume = false,
    showTooltips = true,
    showAxis = true,
    chartHeight = 300,
    colorUp = '#10B981',
    colorDown = '#EF4444',
    class: hostClass = '',
    headerClass = '',
    chartClass = '',
    onTimeRangeChange,
    onPricePointHover,
    locale = 'en-US',
    currency = 'USD',
    ...restProps
  }: Props = $props();

  let data = $state<PricePoint[]>(initialData);
  let selectedTimeRange = $state(timeRange);

  $effect(() => {
    data = [...initialData];
  });

  $effect(() => {
    selectedTimeRange = timeRange;
  });

  function setTimeRange(range: TimeRange) {
    selectedTimeRange = range;
    onTimeRangeChange?.(range);

    // In a real implementation, we would fetch new data for the selected range
    // For now, we'll just filter the existing data
    const now = new Date();
    let fromDate = new Date(now);

    switch (range) {
      case '7d':
        fromDate.setDate(now.getDate() - 7);
        break;
      case '30d':
        fromDate.setDate(now.getDate() - 30);
        break;
      case '90d':
        fromDate.setDate(now.getDate() - 90);
        break;
      case '1y':
        fromDate.setFullYear(now.getFullYear() - 1);
        break;
    }

    data = initialData.filter(point => new Date(point.date) >= fromDate);
  }

  let minPrice = $derived(Math.min(...data.map(p => p.price)));
  let maxPrice = $derived(Math.max(...data.map(p => p.price)));
  let currentPrice = $derived(data.length > 0 ? data[data.length - 1].price : 0);
  let previousPrice = $derived(data.length > 1 ? data[data.length - 2].price : 0);
  let priceChange = $derived(currentPrice - previousPrice);
  let priceChangePercent = $derived(data.length > 1 ? ((currentPrice - previousPrice) / previousPrice) * 100 : 0);
  let isPriceUp = $derived(priceChange >= 0);

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }

  function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString(locale, {
      month: 'short',
      day: 'numeric'
    });
  }

  // Prepare data for the chart
  let chartData = $derived(data.map(point => ({
    date: new Date(point.date).toLocaleDateString(locale, { month: 'short', day: 'numeric' }),
    price: point.price,
    change: point.change,
    ...(showVolume && { volume: point.volume || 0 })
  })));

  // Function to create SVG path for line chart
  function createLinePath(points: {x: number, y: number}[]): string {
    if (points.length === 0) return '';

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currPoint = points[i];
      // Use a simple curve between points (cubic Bezier curve)
      const c1x = prevPoint.x + (currPoint.x - prevPoint.x) / 2;
      const c2x = c1x;
      path += ` C ${c1x} ${prevPoint.y} ${c2x} ${currPoint.y} ${currPoint.x} ${currPoint.y}`;
    }
    return path;
  }

  // Function to get chart points for SVG
  function getChartPoints(): { x: number; y: number; date: string; price: number }[] {
    if (chartData.length === 0) return [];

    const margin = { top: 20, right: 30, bottom: 40, left: 60 };
    const width = 1000; // This will be dynamically set based on container
    const height = chartHeight - margin.top - margin.bottom;

    const maxValue = maxPrice * 1.05;
    const minValue = minPrice * 0.95;

    // Calculate the range of the data
    const valueRange = maxValue - minValue;
    const dateRange = chartData.length > 1
      ? new Date(chartData[chartData.length - 1].date).getTime() - new Date(chartData[0].date).getTime()
      : 1;

    return chartData.map((point, i) => {
      const x = margin.left + (i / Math.max(chartData.length - 1, 1)) * (width - margin.left - margin.right);
      const y = margin.top + height - ((point.price - minValue) / valueRange) * height;
      return { x, y, date: point.date, price: point.price };
    });
  }
</script>

<div class={`price-history ${hostClass}`} {...restProps}>
  <div class={`border border-gray-200 rounded-lg p-6 ${headerClass}`}>
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-xl font-bold text-gray-900">{productTitle} Price History</h2>
        <div class="mt-1 flex items-baseline">
          <span class="text-2xl font-semibold text-gray-900">{formatPrice(currentPrice)}</span>
          {#if showPercentageChange || showPriceChange}
            <span class={`ml-3 inline-flex items-center text-sm ${
              isPriceUp ? 'text-green-600' : 'text-red-600'
            }`}>
              {#if showTrendArrow}
                {#if isPriceUp}
                  <TrendingUp class="h-4 w-4 mr-1" />
                {:else}
                  <TrendingDown class="h-4 w-4 mr-1" />
                {/if}
              {/if}

              {#if showPriceChange}
                <span class="font-medium">
                  {isPriceUp ? '+' : ''}{formatPrice(priceChange)}
                </span>
              {/if}

              {#if showPercentageChange}
                <span class="ml-1">
                  ({priceChangePercent > 0 ? '+' : ''}{priceChangePercent.toFixed(2)}%)
                </span>
              {/if}
            </span>
          {/if}
        </div>
      </div>

      <div class="flex items-center space-x-2">
        {#each ['7d', '30d', '90d', '1y', 'all'] as range}
          <button
            type="button"
            class={`px-3 py-1.5 text-sm font-medium rounded-md ${
              selectedTimeRange === range
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onclick={() => setTimeRange(range as TimeRange)}
          >
            {range === 'all' ? 'All' : range}
          </button>
        {/each}

        {#if showTooltips}
          <button
            type="button"
            class="ml-4"
            aria-label="Info about price history"
            title="Historical price changes for this product over time. Prices may fluctuate based on market demand, availability, and other factors."
          >
            <Info class="h-5 w-5 text-gray-500" />
          </button>
        {/if}
      </div>
    </div>
  </div>

  <div class={`mt-6 p-4 bg-white border border-gray-200 rounded-lg ${chartClass}`}>
    {#if data.length > 0}
      <div class="w-full" style="height: {chartHeight}px;">
        <svg width="100%" height="100%" viewBox="0 0 1000 {chartHeight}" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color={isPriceUp ? colorUp : colorDown} stop-opacity="0.2" />
              <stop offset="100%" stop-color={isPriceUp ? colorUp : colorDown} stop-opacity="0" />
            </linearGradient>
          </defs>

          <!-- Grid lines -->
          {#if showAxis}
            <!-- Horizontal grid lines -->
            {#each Array(5) as _, i}
              <line
                x1="60"
                y1={chartHeight - 40 - i * (chartHeight - 60) / 4}
                x2="970"
                y2={chartHeight - 40 - i * (chartHeight - 60) / 4}
                stroke="#eee"
                stroke-dasharray="4"
              />
            {/each}
          {/if}

          <!-- Area under the line -->
          {#if getChartPoints().length > 0}
            <path
              d={createLinePath([...getChartPoints(),
                {x: getChartPoints()[getChartPoints().length - 1].x, y: chartHeight - 40},
                {x: getChartPoints()[0].x, y: chartHeight - 40}])}
              fill="url(#lineGradient)"
            />
          {/if}

          <!-- Price line -->
          {#if getChartPoints().length > 0}
            <path
              d={createLinePath(getChartPoints())}
              fill="none"
              stroke={isPriceUp ? colorUp : colorDown}
              stroke-width="2"
            />
          {/if}

          <!-- Data points -->
          {#each getChartPoints() as point, i}
            <circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill={isPriceUp ? colorUp : colorDown}
              onmouseover={() => onPricePointHover?.(data[i])}
              onfocus={() => onPricePointHover?.(data[i])}
              role="button"
              tabindex="0"
            />
          {/each}

          <!-- X Axis labels -->
          {#if showAxis}
            {#each getChartPoints() as point, i (i)}
              {#if i % Math.max(1, Math.floor(getChartPoints().length / 5)) === 0}
                <text
                  x={point.x}
                  y={chartHeight - 15}
                  font-size="12"
                  text-anchor="middle"
                  fill="#666"
                >
                  {point.date}
                </text>
              {/if}
            {/each}

            <!-- Y Axis labels -->
            {#each Array(5) as _, i}
              <text
                x="50"
                y={chartHeight - 35 - i * (chartHeight - 60) / 4}
                font-size="12"
                text-anchor="end"
                fill="#666"
              >
                {formatPrice(minPrice + (maxPrice - minPrice) * i / 4)}
              </text>
            {/each}
          {/if}
        </svg>
      </div>
    {:else}
      <div class="flex items-center justify-center h-64">
        <div class="text-center">
          <DollarSign class="h-12 w-12 text-gray-400 mx-auto" />
          <p class="mt-4 text-gray-500">No price history data available</p>
        </div>
      </div>
    {/if}
  </div>

  <!-- Historical data details -->
  <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="border border-gray-200 rounded-lg p-4">
      <h3 class="text-sm font-medium text-gray-900 mb-2 flex items-center">
        <Calendar class="h-4 w-4 mr-2 text-gray-500" />
        Historical Data
      </h3>

      <div class="space-y-2 max-h-48 overflow-y-auto">
        {#each data.slice().reverse() as point, i}
          <div class={`flex justify-between items-center p-2 rounded ${
            i === 0 ? 'bg-blue-50 font-medium' : 'hover:bg-gray-50'
          }`}>
            <div class="text-sm">
              <span>{formatDate(point.date)}</span>
              {#if point.change !== undefined}
                <span class={`ml-2 text-xs ${
                  point.change >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {point.change >= 0 ? '+' : ''}{point.change.toFixed(2)}%
                </span>
              {/if}
            </div>
            <div class={`text-sm ${i === 0 ? 'text-blue-700 font-medium' : 'text-gray-900'}`}>
              {formatPrice(point.price)}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="border border-gray-200 rounded-lg p-4">
      <h3 class="text-sm font-medium text-gray-900 mb-2">Price Statistics</h3>

      <div class="space-y-2">
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Highest Price</span>
          <span class="text-sm font-medium">{formatPrice(maxPrice)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Lowest Price</span>
          <span class="text-sm font-medium">{formatPrice(minPrice)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Price Range</span>
          <span class="text-sm font-medium">{formatPrice(maxPrice - minPrice)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-gray-600">Average Price</span>
          <span class="text-sm font-medium">
            {formatPrice(data.reduce((sum, point) => sum + point.price, 0) / data.length)}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
