<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist';
const Archive = 'archive';
const Check = 'check';
const GripVertical = 'grip-vertical';
const Pencil = 'pencil';
const Trash2 = 'trash-2';
const X = 'x';

  import { Avatar, Badge, Divider } from '$stylist';
  import { createKanbanCardState, type KanbanCardType, type KanbanCardUser } from '$stylist/management/function/state/kanban-card';

  interface KanbanCardProps {
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
  }

  let props: KanbanCardProps = $props();
  const state = createKanbanCardState(props);
</script>

<div
  class={state.containerClasses}
  class:drag-handle={state.draggable}
  class:ring-2={state.selected}
  class:ring-cyan-500={state.selected}
  draggable={state.draggable}
  role="listitem"
  ondragstart={props.ondragstart}
  ondragend={props.ondragend}
>
  <div class="flex justify-between items-start mb-2 gap-3">
    <div class="min-w-0 flex-1">
      {#if state.isEditingTitle}
        <div class="flex items-center gap-1">
          <input
            class="w-full rounded border border-[var(--color-border-primary)] px-2 py-1 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary-500)]"
            bind:value={state.draftTitle}
            onblur={state.commitTitleEdit}
            onkeydown={(e) => {
              if (e.key === 'Enter') state.commitTitleEdit();
              if (e.key === 'Escape') state.cancelTitleEdit();
            }}
          />
          <button type="button" class="text-emerald-600 hover:text-emerald-700" onclick={state.commitTitleEdit} aria-label="Save title">
            <BaseIcon name={Check} class="h-4 w-4" />
          </button>
          <button type="button" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]" onclick={state.cancelTitleEdit} aria-label="Cancel title edit">
            <BaseIcon name={X} class="h-4 w-4" />
          </button>
        </div>
      {:else}
        <button
          type="button"
          class="max-w-full truncate text-left font-semibold text-[var(--color-text-primary)] hover:text-cyan-700 transition-colors"
          ondblclick={state.startTitleEdit}
          onclick={(e) => {
            if (e.altKey) state.startTitleEdit();
          }}
          aria-label="Edit card title"
        >
          {state.card.title}
        </button>
      {/if}
    </div>
    {#if state.card.priority}
      <Badge
        variant={state.getPriorityColor(state.card.priority) as any}
        size="sm"
      >
        {state.card.priority}
      </Badge>
    {/if}
  </div>

  {#if state.card.description}
    <div class="text-sm text-[var(--color-text-secondary)] mb-3 leading-relaxed">{state.card.description}</div>
  {/if}

  {#if state.card.tags?.length}
    <div class="flex flex-wrap gap-1 mb-3">
      {#each state.card.tags as tag}
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
    {#if state.card.assignee}
      <div class="flex items-center">
        {#if typeof state.card.assignee === 'object'}
          <Avatar
            name={state.card.assignee.name}
            size="sm"
            class="mr-2"
          />
          <span>{state.card.assignee.name}</span>
        {:else}
          <Avatar
            name={state.card.assignee}
            size="sm"
            class="mr-2"
          />
          <span>{state.card.assignee}</span>
        {/if}
      </div>
    {/if}

    <div class="ml-auto">{state.card.updatedAt ? state.formatDate(state.card.updatedAt) : ''}</div>
  </div>

  <div class="mt-2 flex justify-end">
    {#if state.editable}
      <button type="button" class="mr-2 text-[var(--color-text-tertiary)] hover:text-cyan-600 transition-colors" onclick={state.startTitleEdit} aria-label="Edit card">
        <BaseIcon name={Pencil} class="w-4 h-4" />
      </button>
    {/if}
    {#if state.archivable}
      <button type="button" class="mr-2 text-[var(--color-text-tertiary)] hover:text-COLOR_AMBER-600 transition-colors" onclick={() => props.onArchive?.()} aria-label="Archive card">
        <BaseIcon name={Archive} class="w-4 h-4" />
      </button>
    {/if}
    {#if state.deletable}
      <button type="button" class="mr-2 text-[var(--color-text-tertiary)] hover:text-rose-600 transition-colors" onclick={() => props.onDelete?.()} aria-label="Delete card">
        <BaseIcon name={Trash2} class="w-4 h-4" />
      </button>
    {/if}
    <BaseIcon name={GripVertical} class="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-secondary)] transition-colors" />
  </div>

  {#if props.children}
    <div class="mt-3">
      {@render props.children()}
    </div>
  {/if}
</div>
