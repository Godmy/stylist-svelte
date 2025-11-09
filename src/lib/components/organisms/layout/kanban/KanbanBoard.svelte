<script lang="ts">
  import type { KanbanBoardData, KanbanColumnData } from '$lib/types';
  import KanbanColumn from './KanbanColumn.svelte';
  import Button from '../../../atoms/controls/buttons/Button.svelte';
  import { Plus } from 'lucide-svelte';

  let { 
    board, 
    allowReordering = true, 
    onCardMove, 
    onColumnAdd, 
    onCardAdd,
    content 
  }: {
    board: KanbanBoardData;
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
</script>

<div class="flex h-full overflow-x-auto pb-4">
  {#each board.columns as column (column.id)}
    <div class="mr-4 min-w-[320px]">
      <KanbanColumn 
        {column}
        droppable={allowReordering}
        onAddCard={handleAddCard}
        onCardDrop={handleCardDrop}
      />
    </div>
  {/each}
  
  <div class="flex items-center">
    <Button
      variant="secondary"
      size="md"
      onclick={handleAddColumn}
    >
      <Plus class="w-4 h-4 mr-2" /> Add Column
    </Button>
  </div>
  
  {#if content}
    <div class="ml-4">
      {@render content()}
    </div>
  {/if}
</div>