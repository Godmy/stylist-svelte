<script lang="ts">
  import { Icon, Badge, Button, InputField } from '$stylist';
  import TextArea from '$stylist/input/svelte/atom/input/field/text-area/index.svelte';
  import { createScrumBacklogState } from '$stylist/management/function/state/scrum-backlog';
  import type { SlotBacklogItem as BacklogItem } from '$stylist/management/interface/slot/backlog-item';
  import type { SlotBacklogData as BacklogData } from '$stylist/management/interface/slot/backlog-data';
  import { ScrumBacklogStyleManager } from '$stylist/management/class/style-manager/scrum-backlog';

  const Plus = 'plus';
  const Calendar = 'calendar';
  const User = 'user';
  const Clock = 'clock';

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

  const state = createScrumBacklogState({ data, showFilters, onItemAdd, onItemUpdate, onItemDelete });
</script>

<div class={state.containerClass}>
  <div class={state.headerClass}>
    <div class={ScrumBacklogStyleManager.getHeaderFlexClass()}>
      <h2 class={state.headerTitleClass}>Бэклог</h2>
      <Button
        variant="primary"
        size="md"
        onclick={() => state.showAddForm = !state.showAddForm}
        class={state.addButtonClass}
      >
        <Icon name={Plus} class={state.iconClass} /> Добавить задачу
      </Button>
    </div>

    {#if state.showAddForm}
      <div class={state.addFormContainerClass}>
        <div class={state.formGridClass}>
          <div class={state.formColSpanClass}>
            <InputField
              id="new-item-title"
              label="Название задачи *"
              value={state.newItemTitle}
              oninput={(e: Event) => {
                const target = e.target as HTMLInputElement;
                state.newItemTitle = target.value;
              }}
              placeholder="Введите название задачи"
              class={state.formInputClass}
            />
          </div>

          <div class={state.formColSpanClass}>
            <TextArea
              id="new-item-description"
              label="Описание"
              value={state.newItemDescription}
              oninput={(e: Event) => {
                const target = e.target as HTMLTextAreaElement;
                state.newItemDescription = target.value;
              }}
              placeholder="Введите описание задачи"
              class={state.formTextareaClass}
            />
          </div>

          <div>
            <label for="new-item-priority" class={state.formLabelClass}>Приоритет</label>
            <select
                id="new-item-priority"
                class={state.formSelectClass}
                bind:value={state.newItemPriority}
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
              value={state.newItemEstimatedHoursStr}
              onchange={(e: Event) => {
                const target = e.target as HTMLInputElement;
                state.handleHoursInput(target.value);
              }}
              oninput={(e: Event) => {
                const target = e.target as HTMLInputElement;
                state.handleHoursInput(target.value);
              }}
              placeholder="Часы"
              class={state.formInputClass}
            />
          </div>

          <div class={state.formColSpanClass}>
            <InputField
              id="new-item-assignee"
              label="Назначена"
              value={state.newItemAssignee}
              oninput={(e: Event) => {
                const target = e.target as HTMLInputElement;
                state.newItemAssignee = target.value;
              }}
              placeholder="Имя исполнителя"
              class={state.formInputClass}
            />
          </div>
        </div>

        <div class={state.formButtonsContainerClass}>
          <Button
            variant="secondary"
            size="sm"
            onclick={() => state.showAddForm = false}
          >Отмена</Button>
          <Button
            variant="primary"
            size="sm"
            onclick={state.handleAddNewItem}
          >Добавить</Button>
        </div>
      </div>
    {/if}

    {#if state.showFilters}
      <div class={state.filtersContainerClass}>
        <div class={state.filtersGridClass}>
          <div>
            <InputField
              id="search-query"
              label="Поиск"
              value={state.searchQuery}
              oninput={(e: Event) => {
                const target = e.target as HTMLInputElement;
                state.searchQuery = target.value;
              }}
              placeholder="Поиск задач..."
              class={state.formInputClass}
            />
          </div>

          <div>
            <label for="status-filter" class={state.filterLabelClass}>Статус</label>
            <select
                id="status-filter"
                class={state.formSelectClass}
                bind:value={state.statusFilter}
            >
                <option value="all">Все статусы</option>
                <option value="todo">К выполнению</option>
                <option value="in-progress">В работе</option>
                <option value="done">Выполнено</option>
            </select>
          </div>

          <div>
            <label for="priority-filter" class={state.filterLabelClass}>Приоритет</label>
            <select
                id="priority-filter"
                class={state.formSelectClass}
                bind:value={state.priorityFilter}
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

  <div class={state.itemsContainerClass}>
    {#if state.filteredItems.length === 0}
      <div class={state.emptyStateContainerClass}>
        <p class={state.emptyStateTextClass}>Бэклог пуст</p>
        <p class={ScrumBacklogStyleManager.getEmptyStateSubtextClass()}>Добавьте первую задачу или измените фильтры</p>
      </div>
    {:else}
      <div class={state.itemsGridClass}>
        {#each state.filteredItems as item}
          <div class={state.itemCardClass}>
            <div class={state.itemHeaderClass}>
              <h3 class={state.itemTitleClass}>{item.title}</h3>
              {#if item.priority}
                <Badge
                  variant={item.priority === 'high' ? 'danger' : item.priority === 'medium' ? 'warning' : 'success'}
                  size="sm"
                  class={state.itemBadgeClass}
                >
                  {item.priority === 'high' ? 'ВАЖНО' : item.priority === 'medium' ? 'СР.' : 'НОРМ.'}
                </Badge>
              {/if}
            </div>

            {#if item.description}
              <p class={state.itemDescriptionClass}>{item.description}</p>
            {/if}

            <div class={state.itemBadgesContainerClass}>
              {#if item.estimatedHours}
                <Badge variant="default" size="sm" class={state.itemBadgeClass}>
                  <Icon name={Clock} class={state.iconClass} /> {item.estimatedHours} ч.
                </Badge>
              {/if}

              {#if item.assignee}
                <Badge variant="default" size="sm" class={state.itemBadgeClass}>
                  <Icon name={User} class={state.iconClass} /> {item.assignee}
                </Badge>
              {/if}

              <Badge variant="default" size="sm" class={state.itemBadgeClass}>
                {item.status === 'todo' ? 'К выполнению' :
                 item.status === 'in-progress' ? 'В работе' : 'Выполнено'}
              </Badge>

              <Badge variant="default" size="sm" class={state.itemBadgeClass}>
                <Icon name={Calendar} class={state.iconClass} /> {state.formatDate(item.createdAt)}
              </Badge>
            </div>

            <div class={state.itemActionsContainerClass}>
              <Button
                variant="secondary"
                size="sm"
                onclick={() => { if (onItemUpdate) onItemUpdate(item); }}
                class={state.itemActionButtonClass}
              >
                Изменить
              </Button>
              <Button
                variant="danger"
                size="sm"
                onclick={() => { if (onItemDelete) onItemDelete(item.id); }}
                class={state.itemActionButtonClass}
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
