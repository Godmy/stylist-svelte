<script lang="ts">
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import Story from '$stylist/playground/component/molecule/story/index.svelte';

  import PieChart from './index.svelte';

  const balancedData = [
    { label: 'A', value: 40 },
    { label: 'B', value: 25 },
    { label: 'C', value: 20 },
    { label: 'D', value: 15 }
  ];

  const skewedData = [
    { label: 'Main', value: 78 },
    { label: 'Alt 1', value: 12 },
    { label: 'Alt 2', value: 7 },
    { label: 'Alt 3', value: 3 }
  ];

  const controls: InterfaceControllerSettings[] = [
    { name: 'dataset', type: 'select', options: ['balanced', 'skewed'], defaultValue: 'balanced' },
    { name: 'size', type: 'text', defaultValue: '200' }
  ];
</script>

<Story {controls} component={PieChart} title="PieChart Component" description="A pie chart component for displaying proportional data" tags={['information', 'data-display', 'chart', 'pie']}>
  {#snippet children(values: any)}
    {@const size = Number(values.size)}
    <PieChart
      data={values.dataset === 'skewed' ? skewedData : balancedData}
      width={Number.isNaN(size) ? 200 : size}
      height={Number.isNaN(size) ? 200 : size}
    />
  {/snippet}
</Story>
