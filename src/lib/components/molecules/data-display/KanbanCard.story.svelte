<script lang="ts">
  import KanbanCard from './KanbanCard.svelte';
  import type { KanbanTask as KanbanCardType } from '$lib/types';

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

<div class="p-4">
  <h1 class="text-xl font-bold mb-4">Kanban Card Component</h1>
  
  <div class="space-y-4">
    <div>
      <h2 class="font-semibold mb-2">High Priority Card</h2>
      <KanbanCard card={sampleCard} />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Low Priority Card</h2>
      <KanbanCard card={lowPriorityCard} />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Medium Priority Card</h2>
      <KanbanCard card={mediumPriorityCard} />
    </div>
  </div>
</div>