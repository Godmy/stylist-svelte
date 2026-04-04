<script lang="ts">
	// @ts-nocheck
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import KanbanBoard, { type KanbanBoardType } from './index.svelte';

  let moves = $state(0);
  let newColumns = $state(0);
  let newCards = $state(0);
  let externalUpdates = $state(0);

  const controls: InterfaceControllerSettings[] = [
    { name: 'allowReordering', type: 'boolean', defaultValue: true },
    { name: 'controlled', type: 'boolean', defaultValue: false },
    { name: 'compact', type: 'boolean', defaultValue: false }
  ];

  const initialBoard: KanbanBoardType = {
    id: 'board1',
    title: 'Q1 Launch',
    columns: [
      { id: 'todo', title: 'To do', cards: [{ id: 't1', title: 'Draft plan', priority: 'medium', status: 'todo' }, { id: 't2', title: 'Collect feedback', priority: 'high', status: 'todo' }] },
      { id: 'in-progress', title: 'In progress', cards: [{ id: 't3', title: 'Build onboarding', priority: 'high', status: 'in-progress' }] },
      { id: 'review', title: 'Review', cards: [{ id: 't4', title: 'QA pass', priority: 'medium', status: 'review' }] },
      { id: 'done', title: 'Done', cards: [{ id: 't5', title: 'Design system sync', priority: 'low', status: 'done' }] }
    ]
  };

  let board = $state<KanbanBoardType>(initialBoard);
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
    <div class="p-4 rounded-xl bg-[var(--color-background-secondary)] space-y-3">
      <div class={`rounded border border-[var(--color-border-primary)] ${args.compact ? 'h-[500px]' : 'h-[640px]'} bg-[var(--color-background-primary)]`}>
        <KanbanBoard
          board={board}
          controlled={args.controlled}
          allowReordering={args.allowReordering}
          onCardMove={() => (moves += 1)}
          onColumnAdd={() => (newColumns += 1)}
          onCardAdd={() => (newCards += 1)}
          onBoardChange={(nextBoard) => {
            if (args.controlled) {
              board = nextBoard;
              externalUpdates += 1;
            }
          }}
        />
      </div>
      <p class="text-sm text-[var(--color-text-secondary)]">Actions: move {moves}, add column {newColumns}, add card {newCards}, external sync {externalUpdates}</p>
    </div>
  {/snippet}
</Story>




