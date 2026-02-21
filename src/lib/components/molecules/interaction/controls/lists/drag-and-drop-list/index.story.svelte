<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import DragAndDropList from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  type DragItem = {
    id: string;
    title: string;
    content?: string;
  };

  const initialItems: DragItem[] = [
    { id: '1', title: 'Define north star', content: 'Set success metrics for the next launch.' },
    { id: '2', title: 'Sync with design', content: 'Review motion specs for onboarding.' },
    { id: '3', title: 'QA checkout', content: 'Verify discount flows on mobile.' },
    { id: '4', title: 'Plan rollout', content: 'Confirm phased release with GTM.' }
  ];

  const controls = [
    {
      name: 'variant',
      type: 'select' as ControlType,
      defaultValue: 'card',
      options: ['card', 'minimal'],
      description: 'Visual variant of the list items'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether drag and drop is disabled'
    }
  ];

  let items = $state<DragItem[]>([...initialItems]);

  function handleItemsChange(updated: DragItem[]) {
    items = updated;
  }
</script>

<Story
  {controls}
  title="DragAndDropList Component"
  description="Reorderable list component for backlog grooming, playlists, or priority queues"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <DragAndDropList
      items={items}
      variant={controlValues.variant}
      disabled={controlValues.disabled}
      onItemsChange={handleItemsChange}
    />
  </div>

  {/snippet}
</Story>