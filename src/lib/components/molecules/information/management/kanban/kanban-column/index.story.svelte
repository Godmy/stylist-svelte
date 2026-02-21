<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import KanbanColumn from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'droppable', type: 'boolean', defaultValue: true },
    { name: 'cardCount', type: 'number', defaultValue: 2, min: 1, max: 5 }
  ];

  function getColumn(cardCount: number) {
    return {
      id: 'todo',
      title: 'To do',
      cards: Array.from({ length: cardCount }, (_, i) => ({
        id: `c-${i + 1}`,
        title: `Task ${i + 1}`,
        description: `Task description ${i + 1}`,
        assignee: 'Team member',
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
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <KanbanColumn column={getColumn(args.cardCount)} droppable={args.droppable} />
    </div>
  {/snippet}
</Story>
