<script lang="ts">
  import { ChevronDown, X } from 'lucide-svelte';
  import { MultiSelectStyleManager } from '$stylist/design-system/styles';
  import type { MultiSelectOption, MultiSelectProps } from '$stylist/design-system/props';

  let {
    options = [],
    value = [],
    placeholder = 'Select options...',
    disabled = false,
    searchable = true,
    maxSelections = 0,
    class: className = '',
    dropdownClass = '',
    selectedClass = '',
    optionClass = '',
    placeholderClass = '',
    searchInputClass = '',
    onInput,
    onChange,
    ...restProps
  }: MultiSelectProps = $props();

  let isOpen = $state(false);
  let selectedValues = $state<string[]>(value);
  let searchQuery = $state('');
  let containerRef: HTMLDivElement;
  let dropdownRef = $state<HTMLDivElement>();

  $effect(() => {
    if (JSON.stringify(selectedValues) !== JSON.stringify(value)) {
      selectedValues = [...value];
    }
  });

  function getFilteredOptions(): MultiSelectOption[] {
    if (!searchQuery) return options;
    return options.filter(
      (option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !selectedValues.includes(option.value)
    );
  }

  function emitChange(nextValue: string[]): void {
    onChange?.(nextValue);
    onInput?.(nextValue);
  }

  function selectOption(optionValue: string): void {
    if (disabled || options.find((o) => o.value === optionValue)?.disabled) return;
    if (!selectedValues.includes(optionValue)) {
      if (maxSelections <= 0 || selectedValues.length < maxSelections) {
        selectedValues = [...selectedValues, optionValue];
        emitChange([...selectedValues]);
      }
    }
    if (searchable) {
      searchQuery = '';
    }
  }

  function removeOption(optionValue: string): void {
    if (disabled) return;
    selectedValues = selectedValues.filter((v) => v !== optionValue);
    emitChange([...selectedValues]);
  }

  function clearSelections(): void {
    if (disabled) return;
    selectedValues = [];
    emitChange([]);
  }

  function toggleDropdown(): void {
    if (!disabled) {
      isOpen = !isOpen;
    }
  }

  $effect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        containerRef &&
        dropdownRef &&
        !containerRef.contains(event.target as Node) &&
        !dropdownRef.contains(event.target as Node)
      ) {
        isOpen = false;
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  let containerClasses = $derived(MultiSelectStyleManager.getContainerClasses(className));
  let selectDisplayClasses = $derived(MultiSelectStyleManager.getSelectDisplayClasses(disabled, isOpen));
  let placeholderClasses = $derived(MultiSelectStyleManager.getPlaceholderClasses(placeholderClass));
  let selectedValueContainerClasses = $derived(MultiSelectStyleManager.getSelectedValueContainerClasses(selectedClass));
  let removeButtonClasses = $derived(MultiSelectStyleManager.getRemoveButtonClasses());
  let clearButtonClasses = $derived(MultiSelectStyleManager.getClearButtonClasses(disabled, selectedValues.length > 0));
  let chevronClasses = $derived(MultiSelectStyleManager.getChevronClasses(isOpen));
  let dropdownClasses = $derived(MultiSelectStyleManager.getDropdownClasses(dropdownClass));
  let searchContainerClasses = $derived(MultiSelectStyleManager.getSearchContainerClasses());
  let searchInputClasses = $derived(MultiSelectStyleManager.getSearchInputClasses(searchInputClass));
  let noOptionsMessageClasses = $derived(MultiSelectStyleManager.getNoOptionsMessageClasses());
</script>

<div class={containerClasses} bind:this={containerRef} {...restProps}>
  <div
    class={selectDisplayClasses}
    onclick={toggleDropdown}
    onkeydown={(event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleDropdown();
      }
    }}
    role="button"
    tabindex={disabled ? -1 : 0}
  >
    {#if selectedValues.length === 0}
      <span class={placeholderClasses}>{placeholder}</span>
    {:else}
      {#each selectedValues as selectedValue}
        {@const foundOption = options.find((opt) => opt.value === selectedValue)}
        {#if foundOption}
          <span class={selectedValueContainerClasses}>
            {foundOption.label}
            <button
              type="button"
              class={removeButtonClasses}
              onclick={(event) => {
                event.stopPropagation();
                removeOption(selectedValue);
              }}
              aria-label={`Remove ${foundOption.label}`}
            >
              <X class="h-3 w-3" />
            </button>
          </span>
        {/if}
      {/each}
    {/if}

    <button
      type="button"
      class={clearButtonClasses}
      onclick={(event) => {
        event.stopPropagation();
        clearSelections();
      }}
      disabled={disabled || selectedValues.length === 0}
    >
      <X class="h-4 w-4" />
    </button>
    <div class="ml-2">
      <ChevronDown class={chevronClasses} />
    </div>
  </div>

  {#if isOpen}
    <div
      bind:this={dropdownRef}
      class={dropdownClasses}
      onclick={(event) => event.stopPropagation()}
      onkeydown={(event) => event.stopPropagation()}
      role="dialog"
      tabindex={0}
    >
      {#if searchable}
        <div class={searchContainerClasses}>
          <input
            type="text"
            class={searchInputClasses}
            placeholder="Search..."
            bind:value={searchQuery}
            onkeydown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                const firstOption = getFilteredOptions()[0];
                if (firstOption) {
                  selectOption(firstOption.value);
                }
              }
            }}
          />
        </div>
      {/if}

      {#if getFilteredOptions().length > 0}
        {#each getFilteredOptions() as option}
          <div
            class={MultiSelectStyleManager.getOptionClasses(optionClass, selectedValues.includes(option.value), !!option.disabled)}
            onclick={() => selectOption(option.value)}
            onkeydown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                selectOption(option.value);
              }
            }}
            role="option"
            aria-selected={selectedValues.includes(option.value)}
            tabindex={0}
          >
            {option.label}
          </div>
        {/each}
      {:else}
        <div class={noOptionsMessageClasses}>
          {searchQuery ? 'No options match your search' : 'No options available'}
        </div>
      {/if}
    </div>
  {/if}
</div>


