<script lang="ts">
  import LineChart from './LineChart.svelte';
  import type { ILineChartProps } from './types';

  // Define sample data for the chart
  const data: ILineChartProps['data'] = [
    {
      id: 'series1',
      label: 'Sales',
      color: '#3B82F6',
      data: [
        { id: 'd1', name: 'Jan', value: 30 },
        { id: 'd2', name: 'Feb', value: 45 },
        { id: 'd3', name: 'Mar', value: 35 },
        { id: 'd4', name: 'Apr', value: 55 },
        { id: 'd5', name: 'May', value: 75 },
        { id: 'd6', name: 'Jun', value: 65 }
      ]
    },
    {
      id: 'series2',
      label: 'Profit',
      color: '#10B981',
      data: [
        { id: 'd1', name: 'Jan', value: 20 },
        { id: 'd2', name: 'Feb', value: 25 },
        { id: 'd3', name: 'Mar', value: 30 },
        { id: 'd4', name: 'Apr', value: 40 },
        { id: 'd5', name: 'May', value: 50 },
        { id: 'd6', name: 'Jun', value: 55 }
      ]
    }
  ];

  let title = $state('Sales & Profit Chart');
  let width = $state(600);
  let height = $state(400);
  let showTooltip = $state(true);
  let showLegend = $state(true);
  let colorScheme: ILineChartProps['colorScheme'] = $state('default');
  let maxValue = $state(100);
  let showAxis = $state(true);
  let smooth = $state(true);
  let strokeWidth = $state(2);
  let variant: ILineChartProps['variant'] = $state('default');
  let size: ILineChartProps['size'] = $state('md');

  let handlePointClick = (point: any, series: any) => {
    console.log('Point clicked:', point, series);
  };
</script>

<div class="p-8">
  <h1>LineChart Story</h1>

  <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label for="title-input" class="block mb-1">Title:</label>
      <input
        id="title-input"
        type="text"
        bind:value={title}
        class="border rounded p-1 w-full"
      />
    </div>

    <div>
      <label for="width-input" class="block mb-1">Width: {width}</label>
      <input
        id="width-input"
        type="range"
        min="300"
        max="800"
        bind:value={width}
        class="w-full"
      />
    </div>

    <div>
      <label for="height-input" class="block mb-1">Height: {height}</label>
      <input
        id="height-input"
        type="range"
        min="200"
        max="600"
        bind:value={height}
        class="w-full"
      />
    </div>

    <div>
      <label for="maxvalue-input" class="block mb-1">Max Value: {maxValue}</label>
      <input
        id="maxvalue-input"
        type="number"
        bind:value={maxValue}
        class="border rounded p-1 w-full"
        min="0"
      />
    </div>

    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={showTooltip}
        id="showTooltip"
      />
      <label for="showTooltip">Show Tooltip</label>
    </div>

    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={showLegend}
        id="showLegend"
      />
      <label for="showLegend">Show Legend</label>
    </div>

    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={showAxis}
        id="showAxis"
      />
      <label for="showAxis">Show Axis</label>
    </div>

    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={smooth}
        id="smooth"
      />
      <label for="smooth">Smooth Lines</label>
    </div>

    <div>
      <label for="strokeWidth-input" class="block mb-1">Stroke Width: {strokeWidth}</label>
      <input
        id="strokeWidth-input"
        type="range"
        min="1"
        max="5"
        bind:value={strokeWidth}
        class="w-full"
      />
    </div>

    <div>
      <label for="colorScheme-select" class="block mb-1">Color Scheme:</label>
      <select id="colorScheme-select" bind:value={colorScheme} class="border rounded p-1 w-full">
        <option value="default">Default</option>
        <option value="warm">Warm</option>
        <option value="cool">Cool</option>
        <option value="neutral">Neutral</option>
      </select>
    </div>

    <div>
      <label for="variant-select" class="block mb-1">Variant:</label>
      <select id="variant-select" bind:value={variant} class="border rounded p-1 w-full">
        <option value="default">Default</option>
        <option value="minimal">Minimal</option>
        <option value="elegant">Elegant</option>
        <option value="bold">Bold</option>
      </select>
    </div>
  </div>

  <LineChart
    {data}
    {title}
    {width}
    {height}
    {showTooltip}
    {showLegend}
    {colorScheme}
    {maxValue}
    {showAxis}
    {smooth}
    {strokeWidth}
    {variant}
    {size}
    onPointClick={handlePointClick}
  />
</div>