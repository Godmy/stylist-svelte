<script lang="ts">
  import { Icon as BaseIcon, Badge, Button } from '$stylist';
  import { createKanbanColumnState } from '$stylist/management/function/state/kanban-column';
  import KanbanCard from '$stylist/management/component/organism/card/kanban-card/index.svelte';
  import type { KanbanColumnType } from '$stylist/management/type/struct/kanban-column';
  import type { KanbanCardType } from '$stylist/management/type/struct/kanban-card';
  import type { Snippet } from 'svelte';

  let {
    column,
    droppable = true,
    editable = true,
    showArchivedCards = false,
    onAddCard,
    onCardDrop,
    onColumnTitleChange,
    onCardTitleChange,
    onCardDelete,
    onCardArchive,
    content
  }: {
    column: KanbanColumnType;
    droppable?: boolean;
    editable?: boolean;
    showArchivedCards?: boolean;
    onAddCard?: (columnId: string) => void;
    onCardDrop?: (cardId: string, fromColumnId: string, toColumnId: string, position: number) => void;
    onColumnTitleChange?: (columnId: string, title: string) => void;
    onCardTitleChange?: (columnId: string, cardId: string, title: string) => void;
    onCardDelete?: (columnId: string, cardId: string) => void;
    onCardArchive?: (columnId: string, cardId: string) => void;
    content?: Snippet;
  } = $props();

  const state = createKanbanColumnState({
    column,
    droppable,
    editable,
    showArchivedCards,
    onAddCard,
    onCardDrop,
    onColumnTitleChange,
    onCardTitleChange,
    onCardDelete,
    onCardArchive,
    content
  });
</script>

<div
  class={state.containerClass}
  ondrop={state.handleColumnDrop}
  ondragover={state.handleDragOver}
  role="list"
  aria-label="Kanban column: {state.column.title}"
>
  <div class="p-4 border-b border-[var(--color-border-primary)]/80 [background-image:var(--gradient-neutral)]">
    <div class="flex justify-between items-center mb-2">
      {#if state.isEditingTitle}
        <div class="flex min-w-0 flex-1 items-center gap-1">
          <input
            class="w-full rounded border border-[var(--color-border-primary)] px-2 py-1 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary-500)]"
            bind:value={state.draftTitle}
            onkeydown={(e) => {
              if (e.key === 'Enter') state.commitTitleEdit();
              if (e.key === 'Escape') state.cancelTitleEdit();
            }}
            onblur={state.commitTitleEdit}
          />
          <button type="button" class="text-emerald-600 hover:text-emerald-700" onclick={state.commitTitleEdit} aria-label="Save column title">
            <BaseIcon name={state.checkIcon} class="h-4 w-4" />
          </button>
          <button type="button" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]" onclick={state.cancelTitleEdit} aria-label="Cancel column title edit">
            <BaseIcon name={state.xIcon} class="h-4 w-4" />
          </button>
        </div>
      {:else}
        <h3 class="font-semibold text-[var(--color-text-primary)] tracking-tight">{state.column.title}</h3>
      {/if}
      <div class="flex items-center gap-2">
        <Badge variant="default" size="sm">{state.visibleCards.length}</Badge>
        {#if state.editable && !state.isEditingTitle}
          <button type="button" class="text-[var(--color-text-tertiary)] hover:text-cyan-600 transition-colors" onclick={state.startTitleEdit} aria-label="Edit column title">
            <BaseIcon name={state.pencilIcon} class="h-4 w-4" />
          </button>
        {/if}
      </div>
    </div>

    {#if state.column.description}
      <p class="text-sm text-[var(--color-text-secondary)]">{state.column.description}</p>
    {/if}

    <div class="mt-3">
      <Button variant="ghost" size="sm" onclick={state.handleAddCard} class="rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">
        <BaseIcon name={state.plusIcon} class="w-4 h-4 mr-1" />
        Add Card
      </Button>
    </div>
  </div>

  <div
    class="flex-grow p-3 space-y-3 overflow-y-auto max-h-[calc(100vh-250px)]"
    style="--gradient-inner: color-mix(in srgb, var(--color-border-primary) 8%, transparent); --gradient-outer: transparent; background-image: var(--gradient-radial-center);"
  >
    {#each state.visibleCards as card, index (card.id)}
      {#if state.dragOverIndex === index}
        <div class="h-2 rounded-full bg-cyan-300/80 ring-2 ring-cyan-200/70 animate-pulse" aria-hidden="true"></div>
      {/if}

      <div
        role="listitem"
        ondrop={(e) => state.handleCardDrop(e, index)}
        ondragover={(e) => state.handleDragOver(e, index)}
      >
        <KanbanCard
          {card}
          draggable={state.droppable}
          editable={state.editable}
          ondragstart={(e: DragEvent) => state.handleCardDragStart(e, card)}
          ondragend={state.handleCardDragEnd}
          onTitleChange={(title) => onCardTitleChange?.(state.column.id, card.id, title)}
          onDelete={() => onCardDelete?.(state.column.id, card.id)}
          onArchive={() => onCardArchive?.(state.column.id, card.id)}
        />
      </div>
    {/each}

    {#if state.dragOverIndex === state.visibleCards.length}
      <div class="h-2 rounded-full bg-cyan-300/80 ring-2 ring-cyan-200/70 animate-pulse" aria-hidden="true"></div>
    {/if}
  </div>

  {#if state.content}
    <div class="p-2 mt-auto">
      {@render state.content()}
    </div>
  {/if}
</div>
