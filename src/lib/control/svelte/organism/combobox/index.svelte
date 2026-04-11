<script lang="ts">
  import type { ComboboxItem } from '$stylist/control/type/struct/combobox/item';
  import type { ComboboxProps } from '$stylist/control/type/struct/combobox-props';
  import { createComboboxState } from '$stylist/control/function/state/combobox';

  let props: ComboboxProps = $props();
  const state = createComboboxState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      id: _id,
      items: _items,
      value: _value,
      label: _label,
      description: _description,
      placeholder: _placeholder,
      emptyText: _emptyText,
      disabled: _disabled,
      clearable: _clearable,
      loading: _loading,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={`c-combobox space-y-2 ${state.className}`} data-combobox={state.id}>
  {#if state.label}
    <label for={state.id} class="text-sm font-medium text-[var(--color-text-primary)]">
      {state.label}
    </label>
  {/if}

  <div class="relative">
    <div class="flex items-center gap-2 rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 text-sm shadow-sm focus-within:border-[var(--color-primary-500)] focus-within:ring-2 focus-within:ring-indigo-500 ${state.disabled ? 'bg-[var(--color-background-secondary)] cursor-not-allowed opacity-[var(--opacity-70)]' : ''}">
      <input
        id={state.id}
        type="text"
        bind:this={state.inputRef}
        class="flex-1 bg-transparent outline-none placeholder:text-[var(--color-text-tertiary)]"
        placeholder={state.placeholder}
        bind:value={state.query}
        oninput={state.handleInput}
        onkeydown={state.handleKeydown}
        onfocus={state.handleFocus}
        onblur={state.handleBlur}
        disabled={state.disabled}
        aria-autocomplete="list"
        aria-controls={`${state.id}-listbox`}
      />

      {#if state.loading}
        <svg class="h-4 w-4 animate-spin text-[var(--color-text-tertiary)]" viewBox="0 0 24 24" fill="none">
          <circle class="opacity-[var(--opacity-25)]" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-[var(--opacity-75)]" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      {:else if state.clearable && state.query}
        <button
          type="button"
          class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          onclick={state.clearSelection}
          aria-label="Очистить выбор"
        >
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      {/if}

      <button
        type="button"
        class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
        aria-label="Переключить список вариантов"
        onclick={() => (state.isOpen ? state.closeList() : state.openList())}
        disabled={state.disabled}
      >
        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.105l3.71-3.874a.75.75 0 111.08 1.04l-4.24 4.431a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    {#if state.isOpen}
      <div
        id={`${state.id}-listbox`}
        class="absolute z-[var(--z-index-docked)] mt-2 max-h-60 w-full overflow-auto rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-lg"
        role="listbox"
      >
        {#if !state.loading && state.hasResults}
          {@const options = state.filteredItems()}
          {#each options as item, index (item.id)}
            <button
              type="button"
              class={`w-full text-left px-3 py-2 text-sm flex flex-col gap-1 transition-colors ${item.disabled ? 'text-[var(--color-text-tertiary)] cursor-not-allowed' : 'hover:bg-[var(--color-primary-50)]'} ${state.selectedItem?.id === item.id ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)]' : ''} ${state.highlighted === index ? 'bg-[var(--color-primary-50)]' : ''}`}
              disabled={item.disabled}
              onclick={() => state.selectItem(item)}
              onmouseenter={() => (state.highlighted = index)}
              onfocus={() => (state.highlighted = index)}
            >
              <span class="font-medium">{item.label}</span>
              {#if item.description}
                <span class="text-xs text-[var(--color-text-secondary)]">{item.description}</span>
              {/if}
              {#if item.meta}
                <span class="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wide">{item.meta}</span>
              {/if}
            </button>
          {/each}
        {:else if state.loading}
          <div class="flex justify-center py-4 text-sm text-[var(--color-text-secondary)]">Загрузка...</div>
        {:else}
          <div class="px-3 py-4 text-sm text-[var(--color-text-secondary)]">{state.emptyText}</div>
        {/if}
      </div>
    {/if}
  </div>

  {#if state.description}
    <p class="text-sm text-[var(--color-text-secondary)]">{state.description}</p>
  {/if}
</div>
