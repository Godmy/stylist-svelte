<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import KanbanBoard from './index.svelte';

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

  interface SampleKanbanBoardData {
    id?: string;
    title?: string;
    columns: SampleKanbanColumnData[];
  }

  // Sample board data
  const sampleBoard: SampleKanbanBoardData = {
    id: 'board1',
    title: 'Project Board',
    columns: [
      {
        id: 'todo',
        title: 'To Do',
        description: 'Tasks waiting to be worked on',
        cards: [
          {
            id: 'task1',
            title: 'Research new features',
            description: 'Investigate requirements for next sprint',
            assignee: 'John Doe',
            priority: 'medium',
            status: 'todo',
            tags: ['research', 'planning'],
            createdAt: new Date('2023-01-15'),
            updatedAt: new Date('2023-01-15')
          },
          {
            id: 'task2',
            title: 'Fix critical bug',
            description: 'Resolve login issue reported by users',
            assignee: 'Jane Smith',
            priority: 'high',
            status: 'todo',
            tags: ['bug', 'urgent'],
            createdAt: new Date('2023-01-16'),
            updatedAt: new Date('2023-01-16')
          }
        ]
      },
      {
        id: 'inprogress',
        title: 'In Progress',
        description: 'Tasks currently being worked on',
        cards: [
          {
            id: 'task3',
            title: 'Implement dashboard',
            description: 'Build the main dashboard UI',
            assignee: 'Alex Johnson',
            priority: 'high',
            status: 'in-progress',
            tags: ['ui', 'dashboard'],
            createdAt: new Date('2023-01-10'),
            updatedAt: new Date('2023-01-14')
          },
          {
            id: 'task4',
            title: 'API integration',
            description: 'Connect frontend to backend services',
            assignee: 'Sam Wilson',
            priority: 'medium',
            status: 'in-progress',
            tags: ['api', 'backend'],
            createdAt: new Date('2023-01-12'),
            updatedAt: new Date('2023-01-13')
          }
        ]
      },
      {
        id: 'review',
        title: 'Review',
        description: 'Tasks awaiting review',
        cards: [
          {
            id: 'task5',
            title: 'Update documentation',
            description: 'Refresh user guides and API docs',
            assignee: 'Taylor Reed',
            priority: 'low',
            status: 'review',
            tags: ['docs'],
            createdAt: new Date('2023-01-05'),
            updatedAt: new Date('2023-01-12')
          }
        ]
      },
      {
        id: 'done',
        title: 'Done',
        description: 'Tasks completed',
        cards: [
          {
            id: 'task6',
            title: 'Setup CI/CD pipeline',
            description: 'Implement automated testing and deployment',
            assignee: 'Jordan Lee',
            priority: 'high',
            status: 'done',
            tags: ['devops', 'automation'],
            createdAt: new Date('2023-01-01'),
            updatedAt: new Date('2023-01-10')
          }
        ]
      }
    ]
  };

  // Handle card movement
  const handleCardMove = (cardId: string, fromColumnId: string, toColumnId: string, position: number) => {
    console.log(`Moving card ${cardId} from ${fromColumnId} to ${toColumnId} at position ${position}`);
  };

  // Handle adding a new column
  const handleColumnAdd = () => {
    console.log('Adding new column');
  };

  // Handle adding a new card
  const handleCardAdd = (columnId: string) => {
    console.log(`Adding new card to column ${columnId}`);
  };

  type Props = {
    allowReordering: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'allowReordering',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-kanban-board"
  title="Molecules / Information / Management / Kanban / KanbanBoard"
  component={KanbanBoard}
  category="Molecules/Information/Management/Kanban"
  description="A kanban board component for managing tasks across different stages."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-kanban-board p-4">
      <h1 class="text-xl font-bold mb-4">Kanban Board Component</h1>

      <div class="border rounded-lg p-4 bg-gray-50 h-[600px]">
        <KanbanBoard
          board={sampleBoard}
          allowReordering={args.allowReordering}
          onCardMove={handleCardMove}
          onColumnAdd={handleColumnAdd}
          onCardAdd={handleCardAdd}
        />
      </div>
    </div>
  {/snippet}
</Story>


