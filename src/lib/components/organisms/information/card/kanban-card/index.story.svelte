<script lang="ts">
  type KanbanCardType = {
    id: string;
    title: string;
    description?: string;
    assignee?: { id?: string; name: string } | string;
    priority?: 'low' | 'medium' | 'high';
    status?: 'todo' | 'in-progress' | 'done';
    tags?: string[];
    createdAt?: Date;
    updatedAt?: Date;
  };

  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import KanbanCard from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = []
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample card data
  const sampleCard: KanbanCardType = {
    id: 'card1',
    title: 'Implement user authentication',
    description: 'Add login and registration functionality',
    assignee: { id: 'user1', name: 'John Doe' },
    priority: 'high',
    status: 'todo',
    tags: ['backend', 'security'],
    createdAt: new Date(),
    updatedAt: new Date()
  };

  // Additional sample cards
  const lowPriorityCard: KanbanCardType = {
    id: 'card2',
    title: 'Improve documentation',
    description: 'Update API documentation',
    assignee: { id: 'user2', name: 'Jane Smith' },
    priority: 'low',
    status: 'todo',
    tags: ['docs'],
    createdAt: new Date(),
    updatedAt: new Date()
  };

  const mediumPriorityCard: KanbanCardType = {
    id: 'card3',
    title: 'Fix responsive issues',
    description: 'Resolve mobile layout problems',
    assignee: { id: 'user3', name: 'Alex Johnson' },
    priority: 'medium',
    status: 'todo',
    tags: ['ui', 'mobile'],
    createdAt: new Date(),
    updatedAt: new Date()
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={KanbanCard}
  category="Organisms"
  controls={controls}
>
  {#snippet children()}
    <section class="sb-organisms-kanban-card grid w-full gap-8 lg:grid-cols-[1fr_1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          High Priority Card
        </p>
        <p class="mt-1 text-[--color-text-primary]">Example of a high priority kanban card.</p>

        <div class="mt-6">
          <KanbanCard card={sampleCard} />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Low Priority Card
        </p>
        <p class="mt-1 text-[--color-text-primary]">Example of a low priority kanban card.</p>

        <div class="mt-6">
          <KanbanCard card={lowPriorityCard} />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Medium Priority Card
        </p>
        <p class="mt-1 text-[--color-text-primary]">Example of a medium priority kanban card.</p>

        <div class="mt-6">
          <KanbanCard card={mediumPriorityCard} />
        </div>
      </div>
    </section>
  {/snippet}
</Story>




