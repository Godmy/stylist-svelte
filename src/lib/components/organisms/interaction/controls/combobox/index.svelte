<script lang="ts">
  type ComboboxItem = {
    id: string;
    label: string;
    description?: string;
    disabled?: boolean;
    meta?: string;
  };

  type Props = {
    id: string;
    items: ComboboxItem[];
    value?: string | null;
    label?: string;
    description?: string;
    placeholder?: string;
    emptyText?: string;
    disabled?: boolean;
    clearable?: boolean;
    loading?: boolean;
    class?: string;
  };

  let {
    id,
    items,
    value = $bindable<string | null>(null),
    label,
    description,
    placeholder = 'Начните вводить...',
    emptyText = 'Ничего не найдено',
    disabled = false,
    clearable = true,
    loading = false,
    class: className = ''
  }: Props = $props();

  let query = $state('');
  let isOpen = $state(false);
  let highlighted = $state(0);
  let inputRef: HTMLInputElement | null = null;

  const selectedItem = $derived(() => items.find((item) => item.id === value) ?? null);

  const filteredItems = $derived(() => {
    const text = query.trim().toLowerCase();
    if (!text) return items;
    return items.filter((item) => {
      const haystack = `${item.label} ${item.description ?? ''} ${item.meta ?? ''}`.toLowerCase();
      return haystack.includes(text);
    });
  });

  const hasResults = $derived(() => filteredItems().length > 0);

  $effect(() => {
    if (!isOpen) {
      const current = selectedItem();
      query = current ? current.label : '';
    }
  });

  function openList() {
    if (disabled) return;
    isOpen = true;
    highlighted = 0;
  }

  function closeList() {
    isOpen = false;
    highlighted = 0;
    const current = selectedItem();
    query = current ? current.label : query;
  }

  function handleInput(event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    query = target.value;
    value = null;
    if (!isOpen) {
      openList();
    }
  }

  function handleFocus() {
    openList();
  }

  function handleBlur(event: FocusEvent) {
    const related = event.relatedTarget as HTMLElement | null;
    if (!related || !related.closest(`[data-combobox="${id}"]`)) {
      closeList();
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!isOpen) {
      if (event.key === 'Enter' || event.key === 'ArrowDown') {
        openList();
        event.preventDefault();
      }
      return;
    }

    const options = filteredItems();
    if (!options.length) return;

    if (event.key === 'ArrowDown') {
      highlighted = (highlighted + 1) % options.length;
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      highlighted = (highlighted - 1 + options.length) % options.length;
      event.preventDefault();
    } else if (event.key === 'Enter') {
      selectItem(options[highlighted]);
      event.preventDefault();
    } else if (event.key === 'Escape') {
      closeList();
      event.preventDefault();
    }
  }

  function selectItem(item: ComboboxItem) {
    if (item.disabled) return;
    value = item.id;
    query = item.label;
    closeList();
    inputRef?.blur();
  }

  function clearSelection() {
    if (!clearable || disabled) return;
    value = null;
    query = '';
    inputRef?.focus();
    openList();
  }
</script>

<div class={`c-combobox space-y-2 ${className}`} data-combobox={id}>
  {#if label}
    <label for={id} class="text-sm font-medium text-gray-700">
      {label}
    </label>
  {/if}

  <div class="relative">
    <div class={`flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500 ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-70' : ''}`}>
      <input
        id={id}
        type="text"
        bind:this={inputRef}
        class="flex-1 bg-transparent outline-none placeholder:text-gray-400"
        placeholder={placeholder}
        bind:value={query}
        oninput={handleInput}
        onkeydown={handleKeydown}
        onfocus={handleFocus}
        onblur={handleBlur}
        disabled={disabled}
        aria-autocomplete="list"
        aria-controls={`${id}-listbox`}
      />

      {#if loading}
        <svg class="h-4 w-4 animate-spin text-gray-400" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      {:else if clearable && query}
        <button
          type="button"
          class="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          onclick={clearSelection}
          aria-label="Очистить выбор"
        >
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      {/if}

      <button
        type="button"
        class="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
        aria-label="Переключить список вариантов"
        onclick={() => (isOpen ? closeList() : openList())}
        disabled={disabled}
      >
        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.105l3.71-3.874a.75.75 0 111.08 1.04l-4.24 4.431a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    {#if isOpen}
      <div
        id={`${id}-listbox`}
        class="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg"
        role="listbox"
      >
        {#if !loading && hasResults()}
          {@const options = filteredItems()}
          {#each options as item, index (item.id)}
            <button
              type="button"
              class={`w-full text-left px-3 py-2 text-sm flex flex-col gap-1 transition-colors ${item.disabled ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-indigo-50'} ${value === item.id ? 'bg-indigo-100 text-indigo-700' : ''} ${highlighted === index ? 'bg-indigo-50' : ''}`}
              disabled={item.disabled}
              onclick={() => selectItem(item)}
              onmouseenter={() => (highlighted = index)}
              onfocus={() => (highlighted = index)}
            >
              <span class="font-medium">{item.label}</span>
              {#if item.description}
                <span class="text-xs text-gray-500">{item.description}</span>
              {/if}
              {#if item.meta}
                <span class="text-xs text-gray-400 uppercase tracking-wide">{item.meta}</span>
              {/if}
            </button>
          {/each}
        {:else if loading}
          <div class="flex justify-center py-4 text-sm text-gray-500">Загрузка...</div>
        {:else}
          <div class="px-3 py-4 text-sm text-gray-500">{emptyText}</div>
        {/if}
      </div>
    {/if}
  </div>

  {#if description}
    <p class="text-sm text-gray-500">{description}</p>
  {/if}
</div>
