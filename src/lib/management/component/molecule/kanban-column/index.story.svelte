<script lang="ts">
  import type { KanbanColumnType } from '$stylist/management/type/struct/kanban-column';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import KanbanColumn from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'droppable', type: 'boolean', defaultValue: true },
    { name: 'cardCount', type: 'number', defaultValue: 2, min: 1, max: 5 }
  ];

  function getColumn(cardCount: number): KanbanColumnType {
    return {
      id: 'todo',
      title: 'To do',
      cards: Array.from({ length: cardCount }, (_, i) => ({
        id: `c-${i + 1}`,
        title: `Task ${i + 1}`,
        description: `Task description ${i + 1}`,
        assignee: 'Team member',
        order: i,
        priority: i % 2 === 0 ? 'high' : 'medium',
        status: 'todo'
      }))
    };
  }
</script>

<Story
  id="molecules-kanban-column"
  title="Molecules / Information / Management / Kanban / KanbanColumn"
  component={KanbanColumn}
  category="Molecules/Information/Management/Kanban"
  description="Single Kanban column with configurable card amount."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-[var(--color-background-secondary)]">
      <KanbanColumn column={getColumn(args.cardCount as number)} droppable={args.droppable as boolean} />
    </div>
  {/snippet}
</Story>
