<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import TableSkeleton from '../TableSkeleton.svelte';

  type TableSkeletonStoryProps = {
    rows: number;
    columns: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'rows',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 20
    },
    {
      name: 'columns',
      type: 'number',
      defaultValue: 4,
      min: 1,
      max: 10
    }
  ];
</script>

<Story
  id="atoms-table-skeleton"
  title="TableSkeleton"
  component={TableSkeleton}
  category="Atoms"
  description="TableSkeleton component for showing loading states of table data."
  tags={['skeleton', 'loading', 'table', 'placeholder']}
  controls={controls}
>
  {#snippet children(props: TableSkeletonStoryProps)}
    <TableSkeleton
      rows={props.rows}
      columns={props.columns}
    />
  {/snippet}
</Story>