<script lang="ts">
  type User = { id?: string; name: string; avatar?: string };
  type KanbanCardType = {
    id: string;
    title: string;
    description?: string;
    assignee?: string | User;
    priority?: 'low' | 'medium' | 'high';
    tags?: string[];
    updatedAt?: Date;
  };

  import type { Snippet } from 'svelte';
  import { GripVertical } from 'lucide-svelte';
  import { Avatar, Badge, Divider } from '$stylist/components/atoms';

  let {
    card,
    draggable = true,
    selected = false,
    children
  }: {
    card: KanbanCardType;
    draggable?: boolean;
    selected?: boolean;
    children?: Snippet;
  } = $props();

  // Format date for display
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Priority badge color mapping
  const getPriorityColor = (priority: 'low' | 'medium' | 'high' | undefined) => {
    if (!priority) return 'default';
    return {
      low: 'success',
      medium: 'warning',
      high: 'danger'
    }[priority];
  };
</script>

<div
  class="c-kanban-card bg-white rounded-lg shadow-sm border border-gray-200 p-4 cursor-pointer transition-all hover:shadow-md"
  class:drag-handle={draggable}
  class:ring-2={selected}
  class:ring-indigo-500={selected}
  draggable={draggable}
>
  <div class="flex justify-between items-start mb-2">
    <div class="font-medium text-gray-900">{card.title}</div>
    {#if card.priority}
      <Badge
        variant={getPriorityColor(card.priority) as any}
        size="sm"
      >
        {card.priority}
      </Badge>
    {/if}
  </div>

  {#if card.description}
    <div class="text-sm text-gray-600 mb-3">{card.description}</div>
  {/if}

  {#if card.tags?.length}
    <div class="flex flex-wrap gap-1 mb-3">
      {#each card.tags as tag}
        <Badge
          variant="default"
          size="sm"
        >
          {tag}
        </Badge>
      {/each}
    </div>
  {/if}

  <Divider class="my-2" />

  <div class="flex justify-between items-center text-xs text-gray-500">
    {#if card.assignee}
      <div class="flex items-center">
        {#if typeof card.assignee === 'object'}
          <Avatar
            name={card.assignee.name}
            size="sm"
            class="mr-2"
          />
          <span>{card.assignee.name}</span>
        {:else}
          <Avatar
            name={card.assignee}
            size="sm"
            class="mr-2"
          />
          <span>{card.assignee}</span>
        {/if}
      </div>
    {/if}

    <div class="ml-auto">{card.updatedAt ? formatDate(card.updatedAt) : ''}</div>
  </div>

  <div class="mt-2 flex justify-end">
    <GripVertical class="w-4 h-4 text-gray-400" />
  </div>

  {#if children}
    <div class="mt-3">
      {@render children()}
    </div>
  {/if}
</div>




