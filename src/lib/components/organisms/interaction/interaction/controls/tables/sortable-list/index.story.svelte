<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import SortableList from './index.svelte';

  const items = [
    { id: '1', title: 'Backlog', description: 'Initial list item' },
    { id: '2', title: 'In Progress', description: 'Work item' },
    { id: '3', title: 'Done', description: 'Finished item' }
  ];

  type Props = { showHandle: boolean; showActions: boolean; variant: 'minimal' | 'card' | 'compact' };
  const controls: ControlConfig[] = [
    { name: 'showHandle', type: 'boolean', defaultValue: true },
    { name: 'showActions', type: 'boolean', defaultValue: true },
    { name: 'variant', type: 'select', options: ['minimal', 'card', 'compact'], defaultValue: 'card' }
  ];
</script>

<Story id="organisms-sortable-list" title="Organisms / Interaction / Controls / Tables / Sortable List" component={SortableList} category="Organisms/Interaction/Controls/Tables" controls={controls}>
  {#snippet children(props: Record<string, unknown>)}
    {@const typedProps = props as Props}
    <div class="sb-organisms-sortable-list p-4">
      <SortableList {items} showHandle={typedProps.showHandle} showActions={typedProps.showActions} variant={typedProps.variant} />
    </div>
  {/snippet}
</Story>


