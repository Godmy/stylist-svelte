<script lang="ts">
  import { KanbanBoardStyleManager } from '$stylist/design-system/styles/kanban-board';
  import KanbanColumn from '$stylist/components/molecules/information/management/kanban/kanban-column/index.svelte';
  import { Button } from '$stylist/components/atoms';
  import { Plus } from 'lucide-svelte';

  let {
    board,
    allowReordering = true,
    onCardMove,
    onColumnAdd,
    onCardAdd,
    content
  }: {
    board: any; // Using any for now since we need to define the proper type
    allowReordering?: boolean;
    onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string, position: number) => void;
    onColumnAdd?: () => void;
    onCardAdd?: (columnId: string) => void;
    content?: any;
  } = $props();

  // Handle card drop within the board
  const handleCardDrop = (cardId: string, fromColumnId: string, toColumnId: string, position: number) => {
    if (onCardMove) {
      onCardMove(cardId, fromColumnId, toColumnId, position);
    }
  };

  // Handle add card to a specific column
  const handleAddCard = (columnId: string) => {
    if (onCardAdd) {
      onCardAdd(columnId);
    }
  };

  // Handle add column
  const handleAddColumn = () => {
    if (onColumnAdd) {
      onColumnAdd();
    }
  };

  // Generate CSS classes using the style manager
  const containerClass = $derived(KanbanBoardStyleManager.getContainerClass());
  const columnContainerClass = $derived(KanbanBoardStyleManager.getColumnContainerClass());
  const buttonContainerClass = $derived(KanbanBoardStyleManager.getButtonContainerClass());
  const addButtonClass = $derived(KanbanBoardStyleManager.getAddButtonClass());
  const iconClass = $derived(KanbanBoardStyleManager.getIconClass());
  const contentContainerClass = $derived(KanbanBoardStyleManager.getContentContainerClass());
</script>

<div class={containerClass}>
  {#each board.columns as column (column.id)}
    <div class={columnContainerClass}>
      <KanbanColumn
        {column}
        droppable={allowReordering}
        onAddCard={handleAddCard}
        onCardDrop={handleCardDrop}
      />
    </div>
  {/each}

  <div class={buttonContainerClass}>
    <Button
      variant="secondary"
      size="md"
      onclick={handleAddColumn}
      class={addButtonClass}
    >
      <Plus class={iconClass} /> Add Column
    </Button>
  </div>

  {#if content}
    <div class={contentContainerClass}>
      {@render content()}
    </div>
  {/if}
</div>

