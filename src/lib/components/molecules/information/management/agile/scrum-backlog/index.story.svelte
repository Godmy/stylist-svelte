<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ScrumBacklog from './index.svelte';

  interface BacklogItem {
    id: string;
    title: string;
    description?: string;
    assignee?: string;
    priority: 'low' | 'medium' | 'high';
    estimatedHours?: number;
    status: 'todo' | 'in-progress' | 'done';
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
  }

  interface BacklogData {
    items: BacklogItem[];
  }

  // Sample backlog data
  const sampleData: BacklogData = {
    items: [
      {
        id: 'item1',
        title: 'Разработать аутентификацию пользователей',
        description: 'Создать систему регистрации, входа и восстановления пароля',
        assignee: 'Иван Петров',
        priority: 'high',
        estimatedHours: 16,
        status: 'todo',
        tags: ['backend', 'auth'],
        createdAt: new Date(2024, 9, 15),
        updatedAt: new Date(2024, 9, 15)
      },
      {
        id: 'item2',
        title: 'Дизайн главной страницы',
        description: 'Создать макет главной страницы с учетом новой брендинговой политики',
        assignee: 'Анна Сидорова',
        priority: 'medium',
        estimatedHours: 12,
        status: 'in-progress',
        tags: ['frontend', 'ui/ux'],
        createdAt: new Date(2024, 9, 10),
        updatedAt: new Date(2024, 9, 12)
      },
      {
        id: 'item3',
        title: 'Интеграция платежной системы',
        description: 'Подключить внешний платежный провайдер для обработки транзакций',
        assignee: 'Михаил Козлов',
        priority: 'high',
        estimatedHours: 24,
        status: 'todo',
        tags: ['backend', 'payments'],
        createdAt: new Date(2024, 9, 5),
        updatedAt: new Date(2024, 9, 5)
      },
      {
        id: 'item4',
        title: 'Тестирование производительности',
        description: 'Провести нагрузочное тестирование API и базы данных',
        assignee: 'Дмитрий Волков',
        priority: 'medium',
        estimatedHours: 8,
        status: 'done',
        tags: ['testing', 'performance'],
        createdAt: new Date(2024, 8, 25),
        updatedAt: new Date(2024, 9, 20)
      },
      {
        id: 'item5',
        title: 'Рефакторинг компонентов',
        description: 'Обновить устаревшие компоненты в соответствии с новыми стандартами',
        assignee: 'Елена Морозова',
        priority: 'low',
        estimatedHours: 20,
        status: 'todo',
        tags: ['refactoring'],
        createdAt: new Date(2024, 8, 30),
        updatedAt: new Date(2024, 8, 30)
      }
    ]
  };

  // Handles for backlog events
  const handleItemAdd = (item: BacklogItem) => {
    console.log('Добавление задачи:', item);
    // Here would be the logic to add item to the backlog
  };

  const handleItemUpdate = (item: BacklogItem) => {
    console.log('Обновление задачи:', item);
    // Here would be the logic to update item in the backlog
  };

  const handleItemDelete = (id: string) => {
    console.log('Удаление задачи с ID:', id);
    // Here would be the logic to remove item from the backlog
  };

  type Props = {
    showFilters: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showFilters',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-scrum-backlog"
  title="Molecules / Information / Management / Agile / ScrumBacklog"
  component={ScrumBacklog}
  category="Molecules/Information/Management/Agile"
  description="A backlog component for managing sprint tasks with filtering and CRUD operations."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-scrum-backlog p-4">
      <h1 class="text-xl font-bold mb-4">Scrum Backlog Component</h1>

      <div class="border rounded-lg p-4 bg-white h-[800px]">
        <ScrumBacklog
          data={sampleData}
          showFilters={args.showFilters}
          onItemAdd={handleItemAdd}
          onItemUpdate={handleItemUpdate}
          onItemDelete={handleItemDelete}
        />
      </div>
    </div>
  {/snippet}
</Story>


