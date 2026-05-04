<script lang="ts">
  import type { KanbanBoardAction, KanbanBoardType } from '$stylist/management/type/struct/kanban-board';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import KanbanBoard from './index.svelte';

  let moves = $state(0);
  let newColumns = $state(0);
  let newCards = $state(0);
  let externalUpdates = $state(0);

  const controls: InterfaceControllerSettings[] = [
    { name: 'allowReordering', type: 'boolean', defaultValue: true },
    { name: 'controlled', type: 'boolean', defaultValue: false }
  ];

  const initialBoard: KanbanBoardType = {
    id: 'board1',
    title: 'Q1 Launch',
    columns: [
      { id: 'todo', title: 'To do', cards: [{ id: 't1', title: 'Draft plan', order: 0, priority: 'medium', status: 'todo' }] },
      { id: 'in-progress', title: 'In progress', cards: [{ id: 't2', title: 'Build onboarding', order: 0, priority: 'high', status: 'in-progress' }] },
      { id: 'done', title: 'Done', cards: [{ id: 't3', title: 'Design sync', order: 0, priority: 'low', status: 'done' }] }
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
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-[var(--color-background-secondary)] space-y-3">
      <div class="rounded border border-[var(--color-border-primary)] h-[560px] bg-[var(--color-background-primary)]">
        <KanbanBoard
          {board}
          controlled={args.controlled as boolean}
          allowReordering={args.allowReordering as boolean}
          onCardMove={() => (moves += 1)}
          onColumnAdd={() => (newColumns += 1)}
          onCardAdd={() => (newCards += 1)}
          onBoardChange={(nextBoard: KanbanBoardType, action: KanbanBoardAction) => {
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
