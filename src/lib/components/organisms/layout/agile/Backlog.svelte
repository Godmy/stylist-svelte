<script lang="ts">
  import KanbanCard from '../kanban/molecules/KanbanCard.svelte';
  import { Badge, Button, Input, Select, Textarea } from '$lib/components/atoms';
  import { Plus, Calendar, User, Clock } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';

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

  /**
   * Компонент бэклога задач
   * 
   * Компонент для отображения, фильтрации и управления задачами в бэклоге.
   * Позволяет добавлять, изменять и удалять задачи, а также фильтровать их по различным критериям.
   * 
   * @param {BacklogData} data - Данные бэклога, содержащие список задач
   * @param {boolean} [showFilters=true] - Показывать ли панель фильтров
   * @param {(item: BacklogItem) => void} [onItemAdd] - Обработчик добавления новой задачи
   * @param {(item: BacklogItem) => void} [onItemUpdate] - Обработчик обновления задачи
   * @param {(id: string) => void} [onItemDelete] - Обработчик удаления задачи
   */
  let { 
    data,
    showFilters = true,
    onItemAdd,
    onItemUpdate,
    onItemDelete
  }: {
    data: BacklogData;
    showFilters?: boolean;
    onItemAdd?: (item: BacklogItem) => void;
    onItemUpdate?: (item: BacklogItem) => void;
    onItemDelete?: (id: string) => void;
  } = $props();

  const dispatch = createEventDispatcher();

  // State for filters
  let statusFilter = $state<string>('all');
  let priorityFilter = $state<string>('all');
  let searchQuery = $state<string>('');

  // State for new item form
  let showAddForm = $state<boolean>(false);
  let newItemTitle = $state<string>('');
  let newItemDescription = $state<string>('');
  let newItemAssignee = $state<string>('');
  let newItemPriority = $state<'low' | 'medium' | 'high'>('medium');
  let newItemEstimatedHours = $state<number>(0);
  let newItemEstimatedHoursStr = $state<string>('0');

  // Function to get filtered items
  const getFilteredItems = (): BacklogItem[] => {
    return data.items.filter((item: BacklogItem) => {
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const matchesPriority = priorityFilter === 'all' || item.priority === priorityFilter;
      const matchesSearch = !searchQuery || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.assignee && item.assignee.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesStatus && matchesPriority && matchesSearch;
    });
  };

  // Function to add a new item
  const addNewItem = () => {
    if (!newItemTitle.trim()) return;
    
    const newItem: BacklogItem = {
      id: `item-${Date.now()}`,
      title: newItemTitle,
      description: newItemDescription,
      assignee: newItemAssignee || undefined,
      priority: newItemPriority,
      estimatedHours: newItemEstimatedHours || undefined,
      status: 'todo',
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    if (onItemAdd) onItemAdd(newItem);
    
    // Reset form
    newItemTitle = '';
    newItemDescription = '';
    newItemAssignee = '';
    newItemPriority = 'medium';
    newItemEstimatedHours = 0;
    newItemEstimatedHoursStr = '0';
    showAddForm = false;
  };

  // Format date for display
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
</script>

<div class="backlog-container">
  <div class="header mb-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-bold text-gray-800">Бэклог</h2>
              <Button 
                variant="primary" 
                size="md"
                onclick={() => showAddForm = !showAddForm}
              > 
                <Plus class="inline w-4 h-4 mr-1" /> Добавить задачу
              </Button>    </div>
    
    {#if showAddForm}
      <div class="add-form bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="col-span-2">
            <Input 
              id="new-item-title"
              label="Название задачи *"
              bind:value={newItemTitle}
              placeholder="Введите название задачи"
              class="w-full"
            />
          </div>
          
          <div class="col-span-2">
            <Textarea 
              id="new-item-description"
              label="Описание"
              bind:value={newItemDescription}
              placeholder="Введите описание задачи"
              class="w-full"
            />
          </div>
          
          <div>
            <Select 
                id="new-item-priority" 
                label="Приоритет"
                bind:value={newItemPriority} 
                class="w-full"
                options={[
                    { value: 'low', label: 'Низкий' },
                    { value: 'medium', label: 'Средний' },
                    { value: 'high', label: 'Высокий' },
                ]}
            />
          </div>
          
          <div>
            <Input 
              id="new-item-hours"
              label="Оценка времени (часы)"
              type="number"
              value={newItemEstimatedHoursStr}
              onchange={(e: Event) => {
                const target = e.target as HTMLInputElement;
                const value = target.value;
                newItemEstimatedHoursStr = value;
                newItemEstimatedHours = parseInt(value || '0', 10);
              }}
              oninput={(e: Event) => {
                const target = e.target as HTMLInputElement;
                const value = target.value;
                newItemEstimatedHoursStr = value;
                newItemEstimatedHours = parseInt(value || '0', 10);
              }}
              placeholder="Часы"
              class="w-full"
            />
          </div>
          
          <div class="col-span-2">
            <Input 
              id="new-item-assignee"
              label="Назначена"
              bind:value={newItemAssignee}
              placeholder="Имя исполнителя"
              class="w-full"
            />
          </div>
        </div>
        
        <div class="mt-4 flex justify-end space-x-2">
          <Button 
            variant="secondary" 
            size="sm"
            onclick={() => showAddForm = false}
          >Отмена</Button>
          <Button 
            variant="primary" 
            size="sm"
            onclick={addNewItem}
          >Добавить</Button>
        </div>
      </div>
    {/if}
    
    {#if showFilters}
      <div class="filters bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Input 
              id="search-query"
              label="Поиск"
              bind:value={searchQuery}
              placeholder="Поиск задач..."
              class="w-full"
            />
          </div>
          
          <div>
            <Select 
                id="status-filter" 
                label="Статус"
                bind:value={statusFilter} 
                class="w-full"
                options={[
                    { value: 'all', label: 'Все статусы' },
                    { value: 'todo', label: 'К выполнению' },
                    { value: 'in-progress', label: 'В работе' },
                    { value: 'done', label: 'Выполнено' },
                ]}
            />
          </div>
          
          <div>
            <Select 
                id="priority-filter" 
                label="Приоритет"
                bind:value={priorityFilter} 
                class="w-full"
                options={[
                    { value: 'all', label: 'Все приоритеты' },
                    { value: 'low', label: 'Низкий' },
                    { value: 'medium', label: 'Средний' },
                    { value: 'high', label: 'Высокий' },
                ]}
            />
          </div>
        </div>
      </div>
    {/if}
  </div>
  
  <div class="items-container">
    {#if getFilteredItems().length === 0}
      <div class="empty-state text-center py-12">
        <p class="text-gray-500 text-lg">Бэклог пуст</p>
        <p class="text-gray-400 mt-2">Добавьте первую задачу или измените фильтры</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each getFilteredItems() as item}
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 relative">
            <div class="flex justify-between items-start mb-2">
              <h3 class="font-semibold text-gray-800">{item.title}</h3>
              {#if item.priority}
                <Badge 
                  variant={item.priority === 'high' ? 'danger' : item.priority === 'medium' ? 'warning' : 'success'}
                  size="sm"
                >
                  {item.priority === 'high' ? 'ВАЖНО' : item.priority === 'medium' ? 'СР.' : 'НОРМ.'}
                </Badge>
              {/if}
            </div>
            
            {#if item.description}
              <p class="text-sm text-gray-600 mb-3">{item.description}</p>
            {/if}
            
            <div class="flex flex-wrap gap-2 mb-3">
              {#if item.estimatedHours}
                <Badge variant="default" size="sm">
                  <Clock class="w-3 h-3 mr-1 inline" /> {item.estimatedHours} ч.
                </Badge>
              {/if}
              
              {#if item.assignee}
                <Badge variant="default" size="sm">
                  <User class="w-3 h-3 mr-1 inline" /> {item.assignee}
                </Badge>
              {/if}
              
              <Badge variant="default" size="sm">
                {item.status === 'todo' ? 'К выполнению' : 
                 item.status === 'in-progress' ? 'В работе' : 'Выполнено'}
              </Badge>
              
              <Badge variant="default" size="sm">
                <Calendar class="w-3 h-3 mr-1 inline" /> {formatDate(item.createdAt)}
              </Badge>
            </div>
            
            <div class="flex justify-end space-x-2">
              <Button 
                variant="secondary" 
                size="sm"
                onclick={() => { if (onItemUpdate) onItemUpdate(item); }}
              >
                Изменить
              </Button>
              <Button 
                variant="danger" 
                size="sm"
                onclick={() => { if (onItemDelete) onItemDelete(item.id); }}
              >
                Удалить
              </Button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>