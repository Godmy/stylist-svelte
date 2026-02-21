<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import Heatmap from './index.svelte';
  import type { IHeatmapCell } from './types';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/interaction/controls';

  // Generate sample data for the heatmap
  const generateHeatmapData = () => {
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

  const data = generateHeatmapData();

  const controls = [
    {
      name: 'title',
      type: CONTROL_TYPES.TEXT,
      defaultValue: 'Sales Performance by Month and Product'
    },
    {
      name: 'width',
      type: CONTROL_TYPES.SELECT,
      options: [500, 600, 700, 800],
      defaultValue: 700
    },
    {
      name: 'height',
      type: CONTROL_TYPES.SELECT,
      options: [300, 400, 500, 600],
      defaultValue: 500
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
      name: 'colorScheme',
      type: CONTROL_TYPES.SELECT,
      options: ['blue', 'red', 'green', 'purple', 'warm', 'cool'],
      defaultValue: 'blue'
    }
  ];

  let handleCellClick = (cell: IHeatmapCell) => {
    console.log('Cell clicked:', cell);
  };
</script>

<Story
  {controls}
  title="Heatmap"
  category="Organisms/Canvas"
  description="Interactive heatmap visualization with customizable color schemes."
  tags={['heatmap', 'data', 'visualization', 'analytics']}
>
  {#snippet children(values: any)}
    <Heatmap
      {data}
      title={values.title}
      width={values.width}
      height={values.height}
      showTooltip={values.showTooltip}
      showLegend={values.showLegend}
      colorScheme={values.colorScheme}
      showAxis={values.showAxis}
      cellPadding={2}
      onCellClick={handleCellClick}
    />
  {/snippet}
</Story>


