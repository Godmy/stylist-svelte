<script lang="ts">
  import { Icon, Badge, Button, InputField, TextArea } from '$stylist/components/atoms';
  import { ScrumBacklogStyleManager } from '$stylist/design-system/styles/information/scrum-backlog';
  import { createEventDispatcher } from 'svelte';

  const Plus = 'plus';
  const Calendar = 'calendar';
  const User = 'user';
  const Clock = 'clock';

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
   * РљРѕРјРїРѕРЅРµРЅС‚ Р±СЌРєР»РѕРіР° Р·Р°РґР°С‡
   *
   * РљРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ, С„РёР»СЊС‚СЂР°С†РёРё Рё СѓРїСЂР°РІР»РµРЅРёСЏ Р·Р°РґР°С‡Р°РјРё РІ Р±СЌРєР»РѕРіРµ.
   * РџРѕР·РІРѕР»СЏРµС‚ РґРѕР±Р°РІР»СЏС‚СЊ, РёР·РјРµРЅСЏС‚СЊ Рё СѓРґР°Р»СЏС‚СЊ Р·Р°РґР°С‡Рё, Р° С‚Р°РєР¶Рµ С„РёР»СЊС‚СЂРѕРІР°С‚СЊ РёС… РїРѕ СЂР°Р·Р»РёС‡РЅС‹Рј РєСЂРёС‚РµСЂРёСЏРј.
   *
   * @param {BacklogData} data - Р”Р°РЅРЅС‹Рµ Р±СЌРєР»РѕРіР°, СЃРѕРґРµСЂР¶Р°С‰РёРµ СЃРїРёСЃРѕРє Р·Р°РґР°С‡
   * @param {boolean} [showFilters=true] - РџРѕРєР°Р·С‹РІР°С‚СЊ Р»Рё РїР°РЅРµР»СЊ С„РёР»СЊС‚СЂРѕРІ
   * @param {(item: BacklogItem) => void} [onItemAdd] - РћР±СЂР°Р±РѕС‚С‡РёРє РґРѕР±Р°РІР»РµРЅРёСЏ РЅРѕРІРѕР№ Р·Р°РґР°С‡Рё
   * @param {(item: BacklogItem) => void} [onItemUpdate] - РћР±СЂР°Р±РѕС‚С‡РёРє РѕР±РЅРѕРІР»РµРЅРёСЏ Р·Р°РґР°С‡Рё
   * @param {(id: string) => void} [onItemDelete] - РћР±СЂР°Р±РѕС‚С‡РёРє СѓРґР°Р»РµРЅРёСЏ Р·Р°РґР°С‡Рё
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
      <h2 class={headerTitleClass}>Р‘СЌРєР»РѕРі</h2>
      <Button
        variant="primary"
        size="md"
        onclick={() => showAddForm = !showAddForm}
        class={addButtonClass}
      >
        <Icon name={Plus} class={iconClass} /> Р”РѕР±Р°РІРёС‚СЊ Р·Р°РґР°С‡Сѓ
      </Button>
    </div>

    {#if showAddForm}
      <div class={addFormContainerClass}>
        <div class={formGridClass}>
          <div class={formColSpanClass}>
            <InputField
              id="new-item-title"
              label="РќР°Р·РІР°РЅРёРµ Р·Р°РґР°С‡Рё *"
              bind:value={newItemTitle}
              placeholder="Р’РІРµРґРёС‚Рµ РЅР°Р·РІР°РЅРёРµ Р·Р°РґР°С‡Рё"
              class={formInputClass}
            />
          </div>

          <div class={formColSpanClass}>
            <TextArea
              id="new-item-description"
              label="РћРїРёСЃР°РЅРёРµ"
              bind:value={newItemDescription}
              placeholder="Р’РІРµРґРёС‚Рµ РѕРїРёСЃР°РЅРёРµ Р·Р°РґР°С‡Рё"
              class={formTextareaClass}
            />
          </div>

          <div>
            <label for="new-item-priority" class={formLabelClass}>РџСЂРёРѕСЂРёС‚РµС‚</label>
            <select
                id="new-item-priority"
                class={formSelectClass}
                bind:value={newItemPriority}
            >
                <option value="low">РќРёР·РєРёР№</option>
                <option value="medium">РЎСЂРµРґРЅРёР№</option>
                <option value="high">Р’С‹СЃРѕРєРёР№</option>
            </select>
          </div>

          <div>
            <InputField
              id="new-item-hours"
              label="РћС†РµРЅРєР° РІСЂРµРјРµРЅРё (С‡Р°СЃС‹)"
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
              placeholder="Р§Р°СЃС‹"
              class={formInputClass}
            />
          </div>

          <div class={formColSpanClass}>
            <InputField
              id="new-item-assignee"
              label="РќР°Р·РЅР°С‡РµРЅР°"
              bind:value={newItemAssignee}
              placeholder="РРјСЏ РёСЃРїРѕР»РЅРёС‚РµР»СЏ"
              class={formInputClass}
            />
          </div>
        </div>

        <div class={formButtonsContainerClass}>
          <Button
            variant="secondary"
            size="sm"
            onclick={() => showAddForm = false}
          >РћС‚РјРµРЅР°</Button>
          <Button
            variant="primary"
            size="sm"
            onclick={addNewItem}
          >Р”РѕР±Р°РІРёС‚СЊ</Button>
        </div>
      </div>
    {/if}

    {#if showFilters}
      <div class={filtersContainerClass}>
        <div class={filtersGridClass}>
          <div>
            <InputField
              id="search-query"
              label="РџРѕРёСЃРє"
              bind:value={searchQuery}
              placeholder="РџРѕРёСЃРє Р·Р°РґР°С‡..."
              class={formInputClass}
            />
          </div>

          <div>
            <label for="status-filter" class={filterLabelClass}>РЎС‚Р°С‚СѓСЃ</label>
            <select
                id="status-filter"
                class={formSelectClass}
                bind:value={statusFilter}
            >
                <option value="all">Р’СЃРµ СЃС‚Р°С‚СѓСЃС‹</option>
                <option value="todo">Рљ РІС‹РїРѕР»РЅРµРЅРёСЋ</option>
                <option value="in-progress">Р’ СЂР°Р±РѕС‚Рµ</option>
                <option value="done">Р’С‹РїРѕР»РЅРµРЅРѕ</option>
            </select>
          </div>

          <div>
            <label for="priority-filter" class={filterLabelClass}>РџСЂРёРѕСЂРёС‚РµС‚</label>
            <select
                id="priority-filter"
                class={formSelectClass}
                bind:value={priorityFilter}
            >
                <option value="all">Р’СЃРµ РїСЂРёРѕСЂРёС‚РµС‚С‹</option>
                <option value="low">РќРёР·РєРёР№</option>
                <option value="medium">РЎСЂРµРґРЅРёР№</option>
                <option value="high">Р’С‹СЃРѕРєРёР№</option>
            </select>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <div class={itemsContainerClass}>
    {#if getFilteredItems().length === 0}
      <div class={emptyStateContainerClass}>
        <p class={emptyStateTextClass}>Р‘СЌРєР»РѕРі РїСѓСЃС‚</p>
        <p class={ScrumBacklogStyleManager.getEmptyStateSubtextClass()}>Р”РѕР±Р°РІСЊС‚Рµ РїРµСЂРІСѓСЋ Р·Р°РґР°С‡Сѓ РёР»Рё РёР·РјРµРЅРёС‚Рµ С„РёР»СЊС‚СЂС‹</p>
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
                  {item.priority === 'high' ? 'Р’РђР–РќРћ' : item.priority === 'medium' ? 'РЎР .' : 'РќРћР Рњ.'}
                </Badge>
              {/if}
            </div>

            {#if item.description}
              <p class={itemDescriptionClass}>{item.description}</p>
            {/if}

            <div class={itemBadgesContainerClass}>
              {#if item.estimatedHours}
                <Badge variant="default" size="sm" class={itemBadgeClass}>
                  <Icon name={Clock} class={iconClass} /> {item.estimatedHours} С‡.
                </Badge>
              {/if}

              {#if item.assignee}
                <Badge variant="default" size="sm" class={itemBadgeClass}>
                  <Icon name={User} class={iconClass} /> {item.assignee}
                </Badge>
              {/if}

              <Badge variant="default" size="sm" class={itemBadgeClass}>
                {item.status === 'todo' ? 'Рљ РІС‹РїРѕР»РЅРµРЅРёСЋ' :
                 item.status === 'in-progress' ? 'Р’ СЂР°Р±РѕС‚Рµ' : 'Р’С‹РїРѕР»РЅРµРЅРѕ'}
              </Badge>

              <Badge variant="default" size="sm" class={itemBadgeClass}>
                <Icon name={Calendar} class={iconClass} /> {formatDate(item.createdAt)}
              </Badge>
            </div>

            <div class={itemActionsContainerClass}>
              <Button
                variant="secondary"
                size="sm"
                onclick={() => { if (onItemUpdate) onItemUpdate(item); }}
                class={itemActionButtonClass}
              >
                РР·РјРµРЅРёС‚СЊ
              </Button>
              <Button
                variant="danger"
                size="sm"
                onclick={() => { if (onItemDelete) onItemDelete(item.id); }}
                class={itemActionButtonClass}
              >
                РЈРґР°Р»РёС‚СЊ
              </Button>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>




