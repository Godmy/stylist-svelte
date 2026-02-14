<script lang="ts">
  import { ScrumBacklogStyleManager } from '$stylist/design-system/styles/scrum-backlog';
  import { Badge, Button, InputField, TextArea } from '$stylist/components/atoms';
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

  // Generate CSS classes using the style manager
  const containerClass = $derived(ScrumBacklogStyleManager.getContainerClass());
  const headerClass = $derived(ScrumBacklogStyleManager.getHeaderClass());
  const headerTitleClass = $derived(ScrumBacklogStyleManager.getHeaderTitleClass());
  const headerButtonContainerClass = $derived(ScrumBacklogStyleManager.getHeaderButtonContainerClass());
  const addButtonClass = $derived(ScrumBacklogStyleManager.getAddButtonClass());
  const addFormContainerClass = $derived(ScrumBacklogStyleManager.getAddFormContainerClass());
  const formGridClass = $derived(ScrumBacklogStyleManager.getFormGridClass());
  const formColSpanClass = $derived(ScrumBacklogStyleManager.getFormColSpanClass());
  const formLabelClass = $derived(ScrumBacklogStyleManager.getFormLabelClass());
  const formInputClass = $derived(ScrumBacklogStyleManager.getFormInputClass());
  const formTextareaClass = $derived(ScrumBacklogStyleManager.getFormTextareaClass());
  const formSelectClass = $derived(ScrumBacklogStyleManager.getFormSelectClass());
  const formButtonsContainerClass = $derived(ScrumBacklogStyleManager.getFormButtonsContainerClass());
  const filtersContainerClass = $derived(ScrumBacklogStyleManager.getFiltersContainerClass());
  const filtersGridClass = $derived(ScrumBacklogStyleManager.getFiltersGridClass());
  const filterLabelClass = $derived(ScrumBacklogStyleManager.getFilterLabelClass());
  const itemsContainerClass = $derived(ScrumBacklogStyleManager.getItemsContainerClass());
  const emptyStateContainerClass = $derived(ScrumBacklogStyleManager.getEmptyStateContainerClass());
  const emptyStateTextClass = $derived(ScrumBacklogStyleManager.getEmptyStateTextClass());
  const itemsGridClass = $derived(ScrumBacklogStyleManager.getItemsGridClass());
  const itemCardClass = $derived(ScrumBacklogStyleManager.getItemCardClass());
  const itemHeaderClass = $derived(ScrumBacklogStyleManager.getItemHeaderClass());
  const itemTitleClass = $derived(ScrumBacklogStyleManager.getItemTitleClass());
  const itemDescriptionClass = $derived(ScrumBacklogStyleManager.getItemDescriptionClass());
  const itemBadgesContainerClass = $derived(ScrumBacklogStyleManager.getItemBadgesContainerClass());
  const itemBadgeClass = $derived(ScrumBacklogStyleManager.getItemBadgeClass());
  const itemActionsContainerClass = $derived(ScrumBacklogStyleManager.getItemActionsContainerClass());
  const itemActionButtonClass = $derived(ScrumBacklogStyleManager.getItemActionButtonClass());
  const iconClass = $derived(ScrumBacklogStyleManager.getIconClass());
</script>

<div class={containerClass}>
  <div class={headerClass}>
    <div class={ScrumBacklogStyleManager.getHeaderFlexClass()}>
      <h2 class={headerTitleClass}>Бэклог</h2>
      <Button
        variant="primary"
        size="md"
        onclick={() => showAddForm = !showAddForm}
        class={addButtonClass}
      >
        <Plus class={iconClass} /> Добавить задачу
      </Button>
    </div>

    {#if showAddForm}
      <div class={addFormContainerClass}>
        <div class={formGridClass}>
          <div class={formColSpanClass}>
            <InputField
              id="new-item-title"
              label="Название задачи *"
              bind:value={newItemTitle}
              placeholder="Введите название задачи"
              class={formInputClass}
            />
          </div>

          <div class={formColSpanClass}>
            <TextArea
              id="new-item-description"
              label="Описание"
              bind:value={newItemDescription}
              placeholder="Введите описание задачи"
              class={formTextareaClass}
            />
          </div>

          <div>
            <label for="new-item-priority" class={formLabelClass}>Приоритет</label>
            <select
                id="new-item-priority"
                class={formSelectClass}
                bind:value={newItemPriority}
            >
                <option value="low">Низкий</option>
                <option value="medium">Средний</option>
                <option value="high">Высокий</option>
            </select>
          </div>

          <div>
            <InputField
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
              class={formInputClass}
            />
          </div>

          <div class={formColSpanClass}>
            <InputField
              id="new-item-assignee"
              label="Назначена"
              bind:value={newItemAssignee}
              placeholder="Имя исполнителя"
              class={formInputClass}
            />
          </div>
        </div>

        <div class={formButtonsContainerClass}>
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
      <div class={filtersContainerClass}>
        <div class={filtersGridClass}>
          <div>
            <InputField
              id="search-query"
              label="Поиск"
              bind:value={searchQuery}
              placeholder="Поиск задач..."
              class={formInputClass}
            />
          </div>

          <div>
            <label for="status-filter" class={filterLabelClass}>Статус</label>
            <select
                id="status-filter"
                class={formSelectClass}
                bind:value={statusFilter}
            >
                <option value="all">Все статусы</option>
                <option value="todo">К выполнению</option>
                <option value="in-progress">В работе</option>
                <option value="done">Выполнено</option>
            </select>
          </div>

          <div>
            <label for="priority-filter" class={filterLabelClass}>Приоритет</label>
            <select
                id="priority-filter"
                class={formSelectClass}
                bind:value={priorityFilter}
            >
                <option value="all">Все приоритеты</option>
                <option value="low">Низкий</option>
                <option value="medium">Средний</option>
                <option value="high">Высокий</option>
            </select>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <div class={itemsContainerClass}>
    {#if getFilteredItems().length === 0}
      <div class={emptyStateContainerClass}>
        <p class={emptyStateTextClass}>Бэклог пуст</p>
        <p class={ScrumBacklogStyleManager.getEmptyStateSubtextClass()}>Добавьте первую задачу или измените фильтры</p>
      </div>
    {:else}
      <div class={itemsGridClass}>
        {#each getFilteredItems() as item}
          <div class={itemCardClass}>
            <div class={itemHeaderClass}>
              <h3 class={itemTitleClass}>{item.title}</h3>
              {#if item.priority}
                <Badge
                  variant={item.priority === 'high' ? 'danger' : item.priority === 'medium' ? 'warning' : 'success'}
                  size="sm"
                  class={itemBadgeClass}
                >
                  {item.priority === 'high' ? 'ВАЖНО' : item.priority === 'medium' ? 'СР.' : 'НОРМ.'}
                </Badge>
              {/if}
            </div>

            {#if item.description}
              <p class={itemDescriptionClass}>{item.description}</p>
            {/if}

            <div class={itemBadgesContainerClass}>
              {#if item.estimatedHours}
                <Badge variant="default" size="sm" class={itemBadgeClass}>
                  <Clock class={iconClass} /> {item.estimatedHours} ч.
                </Badge>
              {/if}

              {#if item.assignee}
                <Badge variant="default" size="sm" class={itemBadgeClass}>
                  <User class={iconClass} /> {item.assignee}
                </Badge>
              {/if}

              <Badge variant="default" size="sm" class={itemBadgeClass}>
                {item.status === 'todo' ? 'К выполнению' :
                 item.status === 'in-progress' ? 'В работе' : 'Выполнено'}
              </Badge>

              <Badge variant="default" size="sm" class={itemBadgeClass}>
                <Calendar class={iconClass} /> {formatDate(item.createdAt)}
              </Badge>
            </div>

            <div class={itemActionsContainerClass}>
              <Button
                variant="secondary"
                size="sm"
                onclick={() => { if (onItemUpdate) onItemUpdate(item); }}
                class={itemActionButtonClass}
              >
                Изменить
              </Button>
              <Button
                variant="danger"
                size="sm"
                onclick={() => { if (onItemDelete) onItemDelete(item.id); }}
                class={itemActionButtonClass}
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



