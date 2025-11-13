<script lang="ts">
  import type { KanbanColumnData } from '$lib/types';
  import type { Snippet } from 'svelte';
  import { Plus } from 'lucide-svelte';

  import KanbanCard from './molecules/KanbanCard.svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../../atoms/typography/elements/Badge.svelte';

  let { 
    column, 
    droppable = true, 
    onAddCard, 
    onCardDrop, 
    content 
  }: {
    column: KanbanColumnData;
    droppable?: boolean;
    onAddCard?: (columnId: string) => void;
    onCardDrop?: (cardId: string, fromColumnId: string, toColumnId: string, position: number) => void;
    content?: Snippet;
  } = $props();

  // Handle drop event
  const handleDrop = (e: DragEvent) => {
    if (!droppable || !onCardDrop) return;
    
    e.preventDefault();
    const cardId = e.dataTransfer?.getData('text/plain');
    if (cardId) {
      onCardDrop(cardId, 'unknown', column.id, column.cards.length);
    }
  };

  // Handle drag over
  const handleDragOver = (e: DragEvent) => {
    if (!droppable) return;
    
    e.preventDefault();
    e.dataTransfer!.dropEffect = 'move';
  };

  // Handle add card
  const handleAddCard = () => {
    if (onAddCard) {
      onAddCard(column.id);
    }
  };
</script>

<div 
  class="bg-gray-50 rounded-lg shadow-sm border border-gray-200 min-w-[300px] h-full flex flex-col"
  ondrop={handleDrop}
  ondragover={handleDragOver}
  role="list"
  aria-label="Kanban column: {column.title}"
>
  <div class="p-4 border-b border-gray-200">
    <div class="flex justify-between items-center mb-2">
      <h3 class="font-semibold text-gray-800">{column.title}</h3>
      <Badge variant="default" size="sm">{column.cards.length}</Badge>
    </div>
    
    {#if column.description}
      <p class="text-sm text-gray-600">{column.description}</p>
    {/if}
    
    <div class="mt-3">
      <Button 
        variant="ghost" 
        size="sm"
        onclick={handleAddCard}
      >
        <Plus class="w-4 h-4 mr-1" />
        Add Card
      </Button>
    </div>
  </div>
  
  <div class="flex-grow p-2 space-y-3 overflow-y-auto max-h-[calc(100vh-250px)]">
    {#each column.cards as card (card.id)}
      <KanbanCard 
        {card}
        draggable={true}
        {...{
          ondragstart: (e: DragEvent) => {
            if (!droppable) return;
            e.dataTransfer?.setData('text/plain', card.id);
          }
        }}
      />
    {/each}
  </div>
  
  {#if content}
    <div class="p-2 mt-auto">
      {@render content()}
    </div>
  {/if}
</div>