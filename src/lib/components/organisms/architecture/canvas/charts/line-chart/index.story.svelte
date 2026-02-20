<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import LineChart from './index.svelte';
  import type { ILineChartProps } from './types';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

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

  const controls = [
    {
      name: 'title',
      type: CONTROL_TYPES.TEXT,
      defaultValue: 'Sales & Profit Chart'
    },
    {
      name: 'width',
      type: CONTROL_TYPES.SELECT,
      options: [400, 500, 600, 700, 800],
      defaultValue: 600
    },
    {
      name: 'height',
      type: CONTROL_TYPES.SELECT,
      options: [300, 400, 500, 600],
      defaultValue: 400
    },
    {
      name: 'showTooltip',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showLegend',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showAxis',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'smooth',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'colorScheme',
      type: CONTROL_TYPES.SELECT,
      options: ['default', 'warm', 'cool', 'neutral'],
      defaultValue: 'default'
    },
    {
      name: 'variant',
      type: CONTROL_TYPES.SELECT,
      options: ['default', 'minimal', 'elegant', 'bold'],
      defaultValue: 'default'
    },
    {
      name: 'size',
      type: CONTROL_TYPES.SELECT,
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    }
  ];

  let handlePointClick = (point: any, series: any) => {
    console.log('Point clicked:', point, series);
  };
</script>

<Story
  {controls}
  title="LineChart"
  category="Organisms/Charts"
  description="Interactive line chart with customizable appearance and data."
  tags={['chart', 'line', 'data', 'visualization']}
>
  {#snippet children(values: any)}
    <LineChart
      {data}
      title={values.title}
      width={values.width}
      height={values.height}
      showTooltip={values.showTooltip}
      showLegend={values.showLegend}
      colorScheme={values.colorScheme}
      maxValue={100}
      showAxis={values.showAxis}
      smooth={values.smooth}
      strokeWidth={2}
      variant={values.variant}
      size={values.size}
      onPointClick={handlePointClick}
    />
  {/snippet}
</Story>


