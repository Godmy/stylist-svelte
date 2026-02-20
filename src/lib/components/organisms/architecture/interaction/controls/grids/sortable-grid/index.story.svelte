<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import SortableGrid from './index.svelte';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

  const defaultItems = [
    { id: '1', title: 'Item 1', content: 'Content for Item 1' },
    { id: '2', title: 'Item 2', content: 'Content for Item 2' },
    { id: '3', title: 'Item 3', content: 'Content for Item 3' },
    { id: '4', title: 'Item 4', content: 'Content for Item 4' },
    { id: '5', title: 'Item 5', content: 'Content for Item 5' },
    { id: '6', title: 'Item 6', content: 'Content for Item 6' },
  ];

  const controls = [
    {
      name: 'cols',
      type: CONTROL_TYPES.SELECT,
      options: [1, 2, 3, 4, 5, 6],
      defaultValue: 3
    },
    {
      name: 'disabled',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: false
    },
    {
      name: 'gap',
      type: CONTROL_TYPES.SELECT,
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    {
      name: 'variant',
      type: CONTROL_TYPES.SELECT,
      options: ['card', 'minimal'],
      defaultValue: 'card'
    }
  ];
</script>

<Story
  {controls}
  title="SortableGrid"
  category="Organisms/Interaction/Controls/Grids"
  description="Sortable grid component for organizing items."
  tags={['grid', 'sortable', 'drag-and-drop', 'layout']}
>
  {#snippet children(values: any)}
    <SortableGrid
      items={defaultItems}
      cols={values.cols}
      disabled={values.disabled}
      gap={values.gap}
      variant={values.variant}
    />
  {/snippet}
</Story>


