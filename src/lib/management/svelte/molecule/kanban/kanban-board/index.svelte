<script lang="ts">
  import { Icon as BaseIcon, Button } from '$stylist';
  import { createKanbanBoardState } from '$stylist/management/function/state/kanban-board';
  import KanbanColumn from '$stylist/management/svelte/molecule/kanban/kanban-column/index.svelte';
  import type { KanbanBoardType, KanbanBoardAction } from '$stylist/management/type/struct/kanban-board';
  import type { KanbanColumnType } from '$stylist/management/type/struct/kanban-column';
  import type { KanbanCardType } from '$stylist/management/type/struct/kanban-card';
  import type { Snippet } from 'svelte';

  let {
    board,
    controlled = false,
    allowReordering = true,
    allowColumnAdd = true,
    allowCardAdd = true,
    allowInlineEdit = true,
    allowCardArchive = true,
    allowCardDelete = true,
    showArchivedCards = false,
    onCardMove,
    onColumnAdd,
    onCardAdd,
    onColumnTitleChange,
    onCardTitleChange,
    onCardArchive,
    onCardDelete,
    onBoardChange,
    content
  }: {
    board: KanbanBoardType;
    controlled?: boolean;
    allowReordering?: boolean;
    allowColumnAdd?: boolean;
    allowCardAdd?: boolean;
    allowInlineEdit?: boolean;
    allowCardArchive?: boolean;
    allowCardDelete?: boolean;
    showArchivedCards?: boolean;
    onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string, position: number) => void;
    onColumnAdd?: (column: KanbanColumnType) => void;
    onCardAdd?: (columnId: string, card: KanbanCardType) => void;
    onColumnTitleChange?: (columnId: string, title: string) => void;
    onCardTitleChange?: (columnId: string, cardId: string, title: string) => void;
    onCardArchive?: (columnId: string, cardId: string) => void;
    onCardDelete?: (columnId: string, cardId: string) => void;
    onBoardChange?: (nextBoard: KanbanBoardType, action: KanbanBoardAction) => void;
    content?: Snippet;
  } = $props();

  const state = createKanbanBoardState({
    board,
    controlled,
    allowReordering,
    allowColumnAdd,
    allowCardAdd,
    allowInlineEdit,
    allowCardArchive,
    allowCardDelete,
    showArchivedCards,
    onCardMove,
    onColumnAdd,
    onCardAdd,
    onColumnTitleChange,
    onCardTitleChange,
    onCardArchive,
    onCardDelete,
    onBoardChange,
    content
  });
</script>

<section class="flex h-full flex-col gap-3">
  {#if state.boardState.title}
    <header class="px-1">
      <h2 class="text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">{state.boardState.title}</h2>
      <p class="text-xs text-[var(--color-text-secondary)]">Drag tasks between lanes, edit inline, archive or delete when done.</p>
    </header>
  {/if}

  <div class={state.containerClass}>
    {#each state.boardState.columns as column (column.id)}
      <div class={state.columnContainerClass}>
        <KanbanColumn
          {column}
          droppable={state.allowReordering}
          editable={state.allowInlineEdit}
          showArchivedCards={state.showArchivedCards}
          onAddCard={state.handleAddCard}
          onCardDrop={state.handleCardDrop}
          onColumnTitleChange={state.handleColumnTitleChange}
          onCardTitleChange={state.handleCardTitleChange}
          onCardArchive={state.handleCardArchive}
          onCardDelete={state.handleCardDelete}
        />
      </div>
    {/each}

    {#if state.allowColumnAdd}
      <div class={state.buttonContainerClass}>
        <Button
          variant="secondary"
          size="md"
          onclick={state.handleAddColumn}
          class={state.addButtonClass}
        >
          <BaseIcon name={state.plusIcon} class={state.iconClass} /> Add Column
        </Button>
      </div>
    {/if}

    {#if state.content}
      <div class={state.contentContainerClass}>
        {@render state.content()}
      </div>
    {/if}
  </div>
</section>
