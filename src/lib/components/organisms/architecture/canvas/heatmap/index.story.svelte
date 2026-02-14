<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import Heatmap from './index.svelte';
  import type { IHeatmapCell } from './types';

  let {
    id = '',
    title = '',
    description = '',
    controls = []
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Generate sample data for the heatmap
  let generateHeatmapData = () => {
    const rows = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const columns = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
    const data = [];

    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < columns.length; j++) {
        const value = Math.floor(Math.random() * 100);
        data.push({
          id: `cell-${i}-${j}`,
          row: rows[i],
          column: columns[j],
          value: value,
          description: `${columns[j]} in ${rows[i]}: ${value} units`
        });
      }
    }

    return data;
  };

  let data = generateHeatmapData();
  let titleState = $state<string>('Sales Performance by Month and Product');
  let width = $state<number>(700);
  let height = $state<number>(500);
  let showTooltip = $state<boolean>(true);
  let showLegend = $state<boolean>(true);
  let colorScheme = $state<'blue' | 'red' | 'green' | 'purple' | 'warm' | 'cool'>('blue');
  let showAxis = $state<boolean>(true);
  let cellPadding = $state<number>(2);
</script>

<div class="sb-organisms-heatmap">
  <Story
    {id}
    {title}
    {description}
    component={Heatmap}
    category="Organisms"
    controls={controls}
  >
    {#snippet children(props: {})}
      <div class="p-4">
        <h1 class="text-lg font-semibold mb-4">Heatmap Component</h1>

        <div class="mb-6 p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">Interactive Heatmap</h2>
          <div class="flex justify-center">
            <Heatmap
              {data}
              title={titleState}
              {width}
              {height}
              {showTooltip}
              {showLegend}
              {colorScheme}
              {showAxis}
              {cellPadding}
              onCellClick={(cell: IHeatmapCell) => {
                console.log('Cell clicked:', cell);
              }}
            />
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <div>
              <label for="heatmap-title" class="block text-sm mb-1">Title:</label>
              <input
                id="heatmap-title"
                type="text"
                bind:value={titleState}
                class="border rounded p-1 w-40"
              />
            </div>

            <div>
              <label for="heatmap-width" class="block text-sm mb-1">Width:</label>
              <input
                id="heatmap-width"
                type="number"
                bind:value={width}
                class="border rounded p-1 w-20"
                min="300"
                max="1000"
              />
            </div>

            <div>
              <label for="heatmap-height" class="block text-sm mb-1">Height:</label>
              <input
                id="heatmap-height"
                type="number"
                bind:value={height}
                class="border rounded p-1 w-20"
                min="200"
                max="800"
              />
            </div>

            <div>
              <label for="heatmap-colorscheme" class="block text-sm mb-1">Color Scheme:</label>
              <select
                id="heatmap-colorscheme"
                bind:value={colorScheme}
                class="border rounded p-1"
              >
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
                <option value="warm">Warm</option>
                <option value="cool">Cool</option>
              </select>
            </div>

            <div class="flex items-end">
              <label for="heatmap-tooltip" class="flex items-center gap-1">
                <input id="heatmap-tooltip" type="checkbox" bind:checked={showTooltip} />
                Show Tooltip
              </label>
            </div>

            <div class="flex items-end">
              <label for="heatmap-legend" class="flex items-center gap-1">
                <input id="heatmap-legend" type="checkbox" bind:checked={showLegend} />
                Show Legend
              </label>
            </div>

            <div class="flex items-end">
              <label for="heatmap-axis" class="flex items-center gap-1">
                <input id="heatmap-axis" type="checkbox" bind:checked={showAxis} />
                Show Axis
              </label>
            </div>
          </div>
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">Heatmap Variations</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 class="text-sm font-medium mb-2">Red Color Scheme</h3>
              <div class="flex justify-center">
                <Heatmap
                  data={generateHeatmapData()}
                  title="User Activity Heatmap"
                  width={500}
                  height={300}
                  colorScheme="red"
                  showLegend={true}
                />
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium mb-2">Green Color Scheme (No Axis)</h3>
              <div class="flex justify-center">
                <Heatmap
                  data={generateHeatmapData()}
                  title="Server Response Times"
                  width={500}
                  height={300}
                  colorScheme="green"
                  showAxis={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    {/snippet}
  </Story>
</div>


