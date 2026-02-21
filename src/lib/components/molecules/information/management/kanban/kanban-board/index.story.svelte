<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import KanbanBoard from './index.svelte';

  let moves = $state(0);
  let newColumns = $state(0);
  let newCards = $state(0);

  const controls: ControlConfig[] = [
    { name: 'allowReordering', type: 'boolean', defaultValue: true },
    { name: 'compact', type: 'boolean', defaultValue: false }
  ];

  const board = {
    id: 'board1',
    title: 'Q1 Launch',
    columns: [
      { id: 'todo', title: 'To do', cards: [{ id: 't1', title: 'Draft plan', priority: 'medium', status: 'todo' }, { id: 't2', title: 'Collect feedback', priority: 'high', status: 'todo' }] },
      { id: 'in-progress', title: 'In progress', cards: [{ id: 't3', title: 'Build onboarding', priority: 'high', status: 'in-progress' }] },
      { id: 'review', title: 'Review', cards: [{ id: 't4', title: 'QA pass', priority: 'medium', status: 'review' }] },
      { id: 'done', title: 'Done', cards: [{ id: 't5', title: 'Design system sync', priority: 'low', status: 'done' }] }
    ]
  };
</script>

<Story
  id="molecules-kanban-board"
  title="Molecules / Information / Management / Kanban / KanbanBoard"
  component={KanbanBoard}
  category="Molecules/Information/Management/Kanban"
  description="Task board with columns and card movement callbacks."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50 space-y-3">
      <div class={`rounded border border-gray-200 ${args.compact ? 'h-[500px]' : 'h-[640px]'} bg-white`}>
        <KanbanBoard
          board={board}
          allowReordering={args.allowReordering}
          onCardMove={() => (moves += 1)}
          onColumnAdd={() => (newColumns += 1)}
          onCardAdd={() => (newCards += 1)}
        />
      </div>
      <p class="text-sm text-gray-600">Actions: move {moves}, add column {newColumns}, add card {newCards}</p>
    </div>
  {/snippet}
</Story>
