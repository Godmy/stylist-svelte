<script lang="ts">
  type User = { id?: string; name: string; avatar?: string };
  export type KanbanCardType = {
    id: string;
    title: string;
    description?: string;
    assignee?: string | User;
    priority?: 'low' | 'medium' | 'high';
    status?: 'todo' | 'in-progress' | 'review' | 'done' | 'archived';
	tags?: string[];
	updatedAt?: Date;
  };

  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist';
const Archive = 'archive';
const Check = 'check';
const GripVertical = 'grip-vertical';
const Pencil = 'pencil';
const Trash2 = 'trash-2';
const X = 'x';

  import { Avatar, Badge, Divider } from '$stylist';

  let {
    card,
    draggable = true,
    selected = false,
    editable = true,
    archivable = true,
    deletable = true,
    ondragstart,
    ondragend,
    onTitleChange,
    onArchive,
    onDelete,
    children
  }: {
    card: KanbanCardType;
    draggable?: boolean;
    selected?: boolean;
    editable?: boolean;
    archivable?: boolean;
    deletable?: boolean;
    ondragstart?: (event: DragEvent) => void;
    ondragend?: (event: DragEvent) => void;
    onTitleChange?: (title: string) => void;
    onArchive?: () => void;
    onDelete?: () => void;
    children?: Snippet;
  } = $props();

  let isEditingTitle = $state(false);
  let draftTitle = $state(card.title);

  $effect(() => {
    draftTitle = card.title;
  });

  function startTitleEdit() {
    if (!editable) return;
    draftTitle = card.title;
    isEditingTitle = true;
  }

  function cancelTitleEdit() {
    draftTitle = card.title;
    isEditingTitle = false;
  }

  function commitTitleEdit() {
    const nextTitle = draftTitle.trim();
    if (!nextTitle) {
      draftTitle = card.title;
      isEditingTitle = false;
      return;
    }

    if (nextTitle !== card.title) {
      onTitleChange?.(nextTitle);
    }
    isEditingTitle = false;
  }

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

  const getPriorityAccentClass = (priority: 'low' | 'medium' | 'high' | undefined) => {
    if (!priority) return 'before:bg-[var(--color-background-tertiary)]';
    return {
      low: 'before:bg-emerald-400',
      medium: 'before:bg-COLOR_AMBER-400',
      high: 'before:bg-rose-400'
    }[priority];
  };
</script>

<div
  class={`c-kanban-card group relative rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)]/95 p-4 cursor-pointer transition-all duration-[var(--duration-200)] hover:-translate-y-[1px] hover:shadow-[0_14px_26px_-18px_color-mix(in srgb, var(--color-info-600) 55%, transparent)] before:absolute before:inset-y-3 before:left-0 before:w-1 before:rounded-full ${getPriorityAccentClass(card.priority)}`}
  class:drag-handle={draggable}
  class:ring-2={selected}
  class:ring-cyan-500={selected}
  draggable={draggable}
  role="listitem"
  {ondragstart}
  {ondragend}
>
  <div class="flex justify-between items-start mb-2 gap-3">
    <div class="min-w-0 flex-1">
      {#if isEditingTitle}
        <div class="flex items-center gap-1">
          <input
            class="w-full rounded border border-[var(--color-border-primary)] px-2 py-1 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary-500)]"
            bind:value={draftTitle}
            onblur={commitTitleEdit}
            onkeydown={(e) => {
              if (e.key === 'Enter') commitTitleEdit();
              if (e.key === 'Escape') cancelTitleEdit();
            }}
          />
          <button type="button" class="text-emerald-600 hover:text-emerald-700" onclick={commitTitleEdit} aria-label="Save title">
            <BaseIcon name={Check} class="h-4 w-4" />
          </button>
          <button type="button" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]" onclick={cancelTitleEdit} aria-label="Cancel title edit">
            <BaseIcon name={X} class="h-4 w-4" />
          </button>
        </div>
      {:else}
        <button
          type="button"
          class="max-w-full truncate text-left font-semibold text-[var(--color-text-primary)] hover:text-cyan-700 transition-colors"
          ondblclick={startTitleEdit}
          onclick={(e) => {
            if (e.altKey) startTitleEdit();
          }}
          aria-label="Edit card title"
        >
          {card.title}
        </button>
      {/if}
    </div>
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
    <div class="text-sm text-[var(--color-text-secondary)] mb-3 leading-relaxed">{card.description}</div>
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

  <div class="flex justify-between items-center text-xs text-[var(--color-text-secondary)]">
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
    {#if editable}
      <button type="button" class="mr-2 text-[var(--color-text-tertiary)] hover:text-cyan-600 transition-colors" onclick={startTitleEdit} aria-label="Edit card">
        <BaseIcon name={Pencil} class="w-4 h-4" />
      </button>
    {/if}
    {#if archivable}
      <button type="button" class="mr-2 text-[var(--color-text-tertiary)] hover:text-COLOR_AMBER-600 transition-colors" onclick={() => onArchive?.()} aria-label="Archive card">
        <BaseIcon name={Archive} class="w-4 h-4" />
      </button>
    {/if}
    {#if deletable}
      <button type="button" class="mr-2 text-[var(--color-text-tertiary)] hover:text-rose-600 transition-colors" onclick={() => onDelete?.()} aria-label="Delete card">
        <BaseIcon name={Trash2} class="w-4 h-4" />
      </button>
    {/if}
    <BaseIcon name={GripVertical} class="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors" />
  </div>

  {#if children}
    <div class="mt-3">
      {@render children()}
    </div>
  {/if}
</div>









