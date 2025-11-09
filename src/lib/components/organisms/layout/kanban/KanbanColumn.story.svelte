<script lang="ts">
  import KanbanColumn from './KanbanColumn.svelte';

  // Define a local type that allows assignee as string for sample data
  interface SampleKanbanTask {
    id: string;
    title: string;
    description?: string;
    assignee?: {
      id: string;
      name: string;
      avatar?: string;
    } | string; // Can be string for sample data
    dueDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    priority: 'low' | 'medium' | 'high';
    status: 'todo' | 'in-progress' | 'review' | 'done';
    tags?: string[];
  }

  interface SampleKanbanColumnData {
    id: string;
    title: string;
    description?: string;
    cards: SampleKanbanTask[];
  }

  // Sample column data
  const sampleColumn: SampleKanbanColumnData = {
    id: 'col1',
    title: 'To Do',
    description: 'Tasks waiting to be worked on',
    cards: [
      {
        id: 'card1',
        title: 'Research new features',
        description: 'Investigate requirements for next sprint',
        assignee: 'John Doe',
        priority: 'medium',
        status: 'todo',
        tags: ['research', 'planning'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'card2',
        title: 'Fix critical bug',
        description: 'Resolve login issue reported by users',
        assignee: 'Jane Smith',
        priority: 'high',
        status: 'todo',
        tags: ['bug', 'urgent'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  };

  const inProgressColumn: SampleKanbanColumnData = {
    id: 'col2',
    title: 'In Progress',
    description: 'Tasks currently being worked on',
    cards: [
      {
        id: 'card3',
        title: 'Implement dashboard',
        description: 'Build the main dashboard UI',
        assignee: 'Alex Johnson',
        priority: 'high',
        status: 'in-progress',
        tags: ['ui', 'dashboard'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  };
</script>

<div class="p-4">
  <h1 class="text-xl font-bold mb-4">Kanban Column Component</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h2 class="font-semibold mb-2">To Do Column</h2>
      <KanbanColumn column={sampleColumn} />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">In Progress Column</h2>
      <KanbanColumn column={inProgressColumn} />
    </div>
  </div>
</div>