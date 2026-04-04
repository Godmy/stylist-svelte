<script lang="ts">
  import { Icon as BaseIcon, Badge, Button } from '$stylist';
  import { KanbanColumnStyleManager } from '$stylist/management/class/style-manager/kanban-column';
  import KanbanCard, { type KanbanCardType } from '$stylist/management/svelte/organism/card/kanban-card/index.svelte';
  import type { Snippet } from 'svelte';

  const Check = 'check';
  const Pencil = 'pencil';
  const Plus = 'plus';
  const X = 'x';

  export type KanbanColumnType = {
    id: string;
    title: string;
    description?: string;
    cards: KanbanCardType[];
  };

  type DragPayload = {
    cardId: string;
    fromColumnId: string;
  };

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

  let dragOverIndex = $state<number | null>(null);
  let isEditingTitle = $state(false);
  let draftTitle = $state(column.title);
  const visibleCards = $derived(
    showArchivedCards ? column.cards : column.cards.filter((card) => card.status !== 'archived')
  );

  $effect(() => {
    draftTitle = column.title;
  });

  function parsePayload(e: DragEvent): DragPayload | null {
    const raw = e.dataTransfer?.getData('application/json') || e.dataTransfer?.getData('text/plain');
    if (!raw) return null;

    try {
      const payload = JSON.parse(raw) as Partial<DragPayload>;
      if (!payload.cardId || !payload.fromColumnId) return null;
      return { cardId: payload.cardId, fromColumnId: payload.fromColumnId };
    } catch {
      return null;
    }
  }

  function applyDrop(e: DragEvent, position: number) {
    if (!droppable || !onCardDrop) return;
    e.preventDefault();

    const payload = parsePayload(e);
    if (!payload) return;

    onCardDrop(payload.cardId, payload.fromColumnId, column.id, position);
    dragOverIndex = null;
  }

  function handleColumnDrop(e: DragEvent) {
    applyDrop(e, visibleCards.length);
  }

  function handleCardDrop(e: DragEvent, index: number) {
    applyDrop(e, index);
  }

  function handleDragOver(e: DragEvent, index?: number) {
    if (!droppable) return;
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }

    dragOverIndex = typeof index === 'number' ? index : null;
  }

  function handleAddCard() {
    onAddCard?.(column.id);
  }

  function startTitleEdit() {
    if (!editable) return;
    draftTitle = column.title;
    isEditingTitle = true;
  }

  function cancelTitleEdit() {
    draftTitle = column.title;
    isEditingTitle = false;
  }

  function commitTitleEdit() {
    const nextTitle = draftTitle.trim();
    if (!nextTitle) {
      draftTitle = column.title;
      isEditingTitle = false;
      return;
    }
    if (nextTitle !== column.title) {
      onColumnTitleChange?.(column.id, nextTitle);
    }
    isEditingTitle = false;
  }
</script>

<div
  class={KanbanColumnStyleManager.getContainerClass()}
  ondrop={handleColumnDrop}
  ondragover={handleDragOver}
  role="list"
  aria-label="Kanban column: {column.title}"
>
  <div class="p-4 border-b border-[var(--color-border-primary)]/80 [background-image:var(--gradient-neutral)]">
    <div class="flex justify-between items-center mb-2">
      {#if isEditingTitle}
        <div class="flex min-w-0 flex-1 items-center gap-1">
          <input
            class="w-full rounded border border-[var(--color-border-primary)] px-2 py-1 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-primary-500)]"
            bind:value={draftTitle}
            onkeydown={(e) => {
              if (e.key === 'Enter') commitTitleEdit();
              if (e.key === 'Escape') cancelTitleEdit();
            }}
            onblur={commitTitleEdit}
          />
          <button type="button" class="text-emerald-600 hover:text-emerald-700" onclick={commitTitleEdit} aria-label="Save column title">
            <BaseIcon name={Check} class="h-4 w-4" />
          </button>
          <button type="button" class="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]" onclick={cancelTitleEdit} aria-label="Cancel column title edit">
            <BaseIcon name={X} class="h-4 w-4" />
          </button>
        </div>
      {:else}
        <h3 class="font-semibold text-[var(--color-text-primary)] tracking-tight">{column.title}</h3>
      {/if}
      <div class="flex items-center gap-2">
        <Badge variant="default" size="sm">{visibleCards.length}</Badge>
        {#if editable && !isEditingTitle}
          <button type="button" class="text-[var(--color-text-tertiary)] hover:text-cyan-600 transition-colors" onclick={startTitleEdit} aria-label="Edit column title">
            <BaseIcon name={Pencil} class="h-4 w-4" />
          </button>
        {/if}
      </div>
    </div>

    {#if column.description}
      <p class="text-sm text-[var(--color-text-secondary)]">{column.description}</p>
    {/if}

    <div class="mt-3">
      <Button variant="ghost" size="sm" onclick={handleAddCard} class="rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">
        <BaseIcon name={Plus} class="w-4 h-4 mr-1" />
        Add Card
      </Button>
    </div>
  </div>

  <div
    class="flex-grow p-3 space-y-3 overflow-y-auto max-h-[calc(100vh-250px)]"
    style="--gradient-inner: color-mix(in srgb, var(--color-border-primary) 8%, transparent); --gradient-outer: transparent; background-image: var(--gradient-radial-center);"
  >
    {#each visibleCards as card, index (card.id)}
      {#if dragOverIndex === index}
        <div class="h-2 rounded-full bg-cyan-300/80 ring-2 ring-cyan-200/70 animate-pulse" aria-hidden="true"></div>
      {/if}

      <div
        role="listitem"
        ondrop={(e) => handleCardDrop(e, index)}
        ondragover={(e) => handleDragOver(e, index)}
      >
        <KanbanCard
          {card}
          draggable={droppable}
          editable={editable}
          ondragstart={(e: DragEvent) => {
            if (!droppable) return;
            const payload: DragPayload = { cardId: card.id, fromColumnId: column.id };
            e.dataTransfer?.setData('application/json', JSON.stringify(payload));
            e.dataTransfer?.setData('text/plain', JSON.stringify(payload));
            if (e.dataTransfer) {
              e.dataTransfer.effectAllowed = 'move';
            }
          }}
          ondragend={() => {
            dragOverIndex = null;
          }}
          onTitleChange={(title) => onCardTitleChange?.(column.id, card.id, title)}
          onDelete={() => onCardDelete?.(column.id, card.id)}
          onArchive={() => onCardArchive?.(column.id, card.id)}
        />
      </div>
    {/each}

    {#if dragOverIndex === visibleCards.length}
      <div class="h-2 rounded-full bg-cyan-300/80 ring-2 ring-cyan-200/70 animate-pulse" aria-hidden="true"></div>
    {/if}
  </div>

  {#if content}
    <div class="p-2 mt-auto">
      {@render content()}
    </div>
  {/if}
</div>







