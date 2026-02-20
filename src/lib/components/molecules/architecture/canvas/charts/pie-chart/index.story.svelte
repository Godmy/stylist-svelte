<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PieChart from './index.svelte';

  type Props = {
    width: number;
    height: number;
    colors: string; // Changed to string for input control
  };

  const controls: ControlConfig[] = [
    {
      name: 'width',
      type: 'number',
      defaultValue: 200,
      min: 50,
      max: 500
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: 200,
      min: 50,
      max: 500
    },
    {
      name: 'colors',
      type: 'text', // Representing as a comma-separated string for simplicity in controls
      defaultValue: '#3B82F6,#10B981,#F59E0B,#EF4444,#8B5CF6'
    }
  ];

  // Helper to parse colors from string to array
  function parseColors(colorString: string): string[] {
    return colorString.split(',').map(c => c.trim());
  }
</script>

<Story
  id="molecules-pie-chart"
  title="PieChart"
  component={PieChart}
  category="Molecules"
  description="A customizable pie chart component."
  tags={['chart', 'pie', 'data-visualization']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PieChart Story</h2>
      <PieChart
        data={[
          { label: 'Category A', value: 30 },
          { label: 'Category B', value: 20 },
          { label: 'Category C', value: 25 },
          { label: 'Category D', value: 25 }
        ]}
        width={values.width}
        height={values.height}
        colors={parseColors(values.colors)}
      />
    </div>
  {/snippet}
</Story>




