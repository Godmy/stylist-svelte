<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import CanvasChart from './CanvasChart.svelte';
  import type { ChartType } from './CanvasChart.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'type', type: 'select', options: ['line', 'bar', 'pie'], defaultValue: 'line' },
      { name: 'showGrid', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample data for different chart types
  const lineData = [
    { x: 'Jan', y: 30, label: 'January' },
    { x: 'Feb', y: 45, label: 'February' },
    { x: 'Mar', y: 60, label: 'March' },
    { x: 'Apr', y: 40, label: 'April' },
    { x: 'May', y: 70, label: 'May' },
    { x: 'Jun', y: 85, label: 'June' }
  ];

  const barData = [
    { x: 'Product A', y: 120, label: 'Product A' },
    { x: 'Product B', y: 200, label: 'Product B' },
    { x: 'Product C', y: 150, label: 'Product C' },
    { x: 'Product D', y: 180, label: 'Product D' }
  ];

  const pieData = [
    { x: 'Desktop', y: 45, label: 'Desktop' },
    { x: 'Mobile', y: 35, label: 'Mobile' },
    { x: 'Tablet', y: 15, label: 'Tablet' },
    { x: 'Other', y: 5, label: 'Other' }
  ];

  // State variables using runes
  let chartType = $state<ChartType>('line');
  let showGrid = $state<boolean>(true);

  // Function to handle type change
  function handleTypeChange(type: ChartType) {
    chartType = type;
  }

  // Function to handle grid toggle
  function handleGridToggle() {
    showGrid = !showGrid;
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={CanvasChart}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { type?: ChartType; showGrid?: boolean })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Canvas Chart Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive canvas chart with customizable types.</p>

        <div class="mt-6 flex justify-center">
          <CanvasChart
            type={chartType}
            data={chartType === 'line' ? lineData :
                  chartType === 'bar' ? barData :
                  pieData}
            title={`Sample ${chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart`}
            xAxisLabel={chartType !== 'pie' ? 'Month' : undefined}
            yAxisLabel={chartType !== 'pie' ? 'Value' : undefined}
            showGrid={showGrid}
            width={600}
            height={400}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Chart Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different chart types: line, bar, and pie charts with sample data.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Line Chart</p>
            <div class="flex justify-center">
              <CanvasChart
                type="line"
                data={lineData}
                title="Sales Trend"
                xAxisLabel="Month"
                yAxisLabel="Sales ($)"
                width={300}
                height={200}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Bar Chart</p>
            <div class="flex justify-center">
              <CanvasChart
                type="bar"
                data={barData}
                title="Product Performance"
                xAxisLabel="Product"
                yAxisLabel="Units Sold"
                width={300}
                height={200}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Pie Chart</p>
            <div class="flex justify-center">
              <CanvasChart
                type="pie"
                data={pieData}
                title="Device Distribution"
                width={300}
                height={200}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>