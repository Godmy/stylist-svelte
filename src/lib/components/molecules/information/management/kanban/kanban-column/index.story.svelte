<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import KanbanColumn from './index.svelte';

  interface SampleKanbanTask {
    id: string;
    title: string;
    description?: string;
    assignee?: { id: string; name: string; avatar?: string } | string;
    priority: 'low' | 'medium' | 'high';
    status: 'todo' | 'in-progress' | 'review' | 'done';
    tags?: string[];
    createdAt?: Date;
    updatedAt?: Date;
  }

  interface SampleKanbanColumnData {
    id: string;
    title: string;
    description?: string;
    cards: SampleKanbanTask[];
  }

  const sampleColumn: SampleKanbanColumnData = {
    id: 'col1',
    title: 'To Do',
    description: 'Tasks waiting to be worked on',
    cards: [
      { id: 'card1', title: 'Research new features', description: 'Investigate requirements for next sprint', assignee: 'John Doe', priority: 'medium', status: 'todo', tags: ['research'] },
      { id: 'card2', title: 'Fix critical bug', description: 'Resolve login issue reported by users', assignee: 'Jane Smith', priority: 'high', status: 'todo', tags: ['bug', 'urgent'] }
    ]
  };

  type Props = { droppable: boolean };

  const controls: ControlConfig[] = [
    { name: 'droppable', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="molecules-kanban-column"
  title="Molecules / Information / Management / Kanban / KanbanColumn"
  component={KanbanColumn}
  category="Molecules/Information/Management/Kanban"
  description="Kanban column with draggable cards."
  controls={controls}
>
  {#snippet children(args: Props)}
    <div class="sb-molecules-kanban-column p-4">
      <KanbanColumn column={sampleColumn} droppable={args.droppable} />
    </div>
  {/snippet}
</Story>
