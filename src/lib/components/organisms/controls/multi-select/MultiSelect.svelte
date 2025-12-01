<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronDown, X } from 'lucide-svelte';

  import type { IMultiSelectProps } from './types';
  import { MultiSelectStyleManager } from './styles';

  /**
   * MultiSelect component - A select component that allows multiple selections
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles multi-select functionality and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other select components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param options - Array of options to select from
   * @param value - Currently selected values
   * @param placeholder - Placeholder text when no options are selected
   * @param disabled - Whether the component is disabled
   * @param searchable - Whether to allow searching options
   * @param maxSelections - Maximum number of selections allowed (0 means unlimited)
   * @param class - Additional CSS classes for the container
   * @param dropdownClass - Additional CSS classes for the dropdown
   * @param selectedClass - Additional CSS classes for selected options
   * @param optionClass - Additional CSS classes for options
   * @param placeholderClass - Additional CSS classes for placeholder
   * @param searchInputClass - Additional CSS classes for search input
   * @param onInput - Callback when input changes
   * @param onChange - Callback when selection changes
   * @returns An accessible, styled multi-select component
   */
  let {
    options = [],
    value = [],
    placeholder = 'Select options...',
    disabled = false,
    searchable = true,
    maxSelections = 0, // 0 means unlimited
    class: className = '',
    dropdownClass = '',
    selectedClass = '',
    optionClass = '',
    placeholderClass = '',
    searchInputClass = '',
    onInput,
    onChange,
    ...restProps
  }: IMultiSelectProps = $props();

  let isOpen = $state(false);
  let selectedValues = $state<string[]>(value);
  let searchQuery = $state('');
  let containerRef: HTMLDivElement;
  let dropdownRef = $state<HTMLDivElement>();

  // Update selectedValues when the value prop changes externally
  $effect(() => {
    if (JSON.stringify(selectedValues) !== JSON.stringify(value)) {
      selectedValues = [...value];
    }
  });

  // Filter options based on search query
  function getFilteredOptions() {
    if (!searchQuery) return options;

    return options.filter(option =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !selectedValues.includes(option.value)
    );
  }

  function selectOption(optionValue: string) {
    if (disabled || options.find(o => o.value === optionValue)?.disabled) return;

    if (!selectedValues.includes(optionValue)) {
      if (maxSelections <= 0 || selectedValues.length < maxSelections) {
        selectedValues = [...selectedValues, optionValue];
        emitChange();
      }
    }

    if (searchable) {
      searchQuery = '';
    }
  }

  function removeOption(optionValue: string) {
    if (disabled) return;

    selectedValues = selectedValues.filter(v => v !== optionValue);
    emitChange();
  }

  function clearSelections() {
    if (disabled) return;

    selectedValues = [];
    emitChange();
  }

  function emitChange() {
    if (onChange) {
      onChange([...selectedValues]);
    }
    if (onInput) {
      onInput([...selectedValues]);
    }
  }

  function toggleDropdown() {
    if (!disabled) {
      isOpen = !isOpen;
    }
  }

  // Handle clicks outside to close the dropdown
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

  // Derived classes using StyleManager
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
  let optionClasses = (option: {disabled?: boolean}, isSelected: boolean) =>
    MultiSelectStyleManager.getOptionClasses(optionClass, isSelected, !!option.disabled);
  let noOptionsMessageClasses = $derived(MultiSelectStyleManager.getNoOptionsMessageClasses());
</script>

<div class={containerClasses} bind:this={containerRef} {...restProps}>
  <!-- Selected values display -->
  <div
    class={selectDisplayClasses}
    onclick={toggleDropdown}
    onkeydown={(e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
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
        {#if options.find(opt => opt.value === selectedValue)}
          {@const foundOption = options.find(opt => opt.value === selectedValue)}
          <span class={selectedValueContainerClasses}>
            {foundOption?.label}
            <button
              type="button"
              class={removeButtonClasses}
              onclick={(e: Event) => {
                e.stopPropagation();
                removeOption(selectedValue);
              }}
              aria-label={`Remove ${foundOption?.label}`}
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
      onclick={(e: Event) => {
        e.stopPropagation();
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

  <!-- Dropdown -->
  {#if isOpen}
    <div
      bind:this={dropdownRef}
      class={dropdownClasses}
      onclick={(e: Event) => e.stopPropagation()}
      onkeydown={(e: KeyboardEvent) => e.stopPropagation()}
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
            onkeydown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
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
            class={optionClasses(option, selectedValues.includes(option.value))}
            onclick={() => selectOption(option.value)}
            onkeydown={(e: KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectOption(option.value);
              }
            }}
            class:opacity-50={option.disabled}
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