<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';

  import type { ISelectProps } from './types';
  import { SelectStyleManager } from './styles';
  import './Select.css';

  /**
   * Select component - A stylized select with theme-aware dropdown
   *
   * @returns A form select element with custom dropdown visuals
   */
  type Props = ISelectProps;

  const dispatch = createEventDispatcher<{ change: { value: string }; input: { value: string } }>();

  let {
    id,
    label,
    value = $bindable(''),
    options,
    errors = [],
    required = false,
    disabled = false,
    placeholder,
    class: className = '',
    ...restProps
  }: Props = $props();

  const labelId = `${id}-label`;
  const triggerId = `${id}-trigger`;
  const listboxId = `${id}-listbox`;
  const nativeId = `${id}-native`;

  let hasError = $derived(errors.length > 0);
  let errorId = $derived(`${id}-error`);
  let selectClasses = $derived(SelectStyleManager.getSelectClasses(hasError, disabled, className));
  let labelClasses = $derived(SelectStyleManager.getLabelClasses());
  let errorClasses = $derived(SelectStyleManager.getErrorClasses());
  let containerClasses = $derived(SelectStyleManager.getContainerClasses());
  let fieldWrapperClasses = $derived(SelectStyleManager.getFieldWrapperClasses());
  let chevronClasses = $derived(SelectStyleManager.getChevronClasses(disabled, hasError));
  let dropdownClasses = $derived(SelectStyleManager.getDropdownClasses());
  let selectedOption = $derived(options.find((option) => option.value === value));
  let valueClasses = $derived(SelectStyleManager.getValueClasses(Boolean(selectedOption), disabled));
  let emptyStateClasses = $derived(SelectStyleManager.getEmptyStateClasses());

  let isOpen = $state(false);
  let highlightedIndex = $state(-1);
  let containerRef: HTMLDivElement | null = null;
  let nativeSelectRef: HTMLSelectElement | null = null;

  const optionId = (index: number) => `${id}-option-${index}`;

  $effect(() => {
    if (!isOpen) {
      highlightedIndex = -1;
    }
  });

  onMount(() => {
    const handleClickOutside = (event: Event) => {
      if (containerRef && !containerRef.contains(event.target as Node)) {
        isOpen = false;
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  });

  function toggleList() {
    if (disabled) return;

    if (isOpen) {
      isOpen = false;
    } else {
      isOpen = true;
      const currentIndex = options.findIndex((option) => option.value === value);
      highlightedIndex = currentIndex >= 0 ? currentIndex : 0;
    }
  }

  function moveHighlight(direction: 1 | -1) {
    if (!options.length) return;
    if (!isOpen) {
      isOpen = true;
      highlightedIndex = options.findIndex((option) => option.value === value);
      if (highlightedIndex === -1) highlightedIndex = 0;
      return;
    }

    const nextIndex = highlightedIndex + direction;
    if (nextIndex < 0) {
      highlightedIndex = options.length - 1;
    } else if (nextIndex >= options.length) {
      highlightedIndex = 0;
    } else {
      highlightedIndex = nextIndex;
    }
  }

  function selectByIndex(index: number) {
    if (index < 0 || index >= options.length) return;
    const option = options[index];
    handleValueChange(option.value);
    isOpen = false;
  }

  function handleTriggerKeydown(event: KeyboardEvent) {
    if (disabled) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        moveHighlight(1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        moveHighlight(-1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!isOpen) {
          toggleList();
        } else if (highlightedIndex >= 0) {
          selectByIndex(highlightedIndex);
        }
        break;
      case 'Escape':
        if (isOpen) {
          event.preventDefault();
          isOpen = false;
        }
        break;
    }
  }

  function handleOptionClick(index: number) {
    if (disabled) return;
    selectByIndex(index);
  }

  function handleValueChange(newValue: string) {
    value = newValue;
    dispatch('input', { value: newValue });
    dispatch('change', { value: newValue });
    if (nativeSelectRef) {
      nativeSelectRef.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
</script>

<div class={containerClasses} bind:this={containerRef}>
  <label
    id={labelId}
    for={triggerId}
    class={labelClasses}
  >
    {label}
    {#if required}
      <span class="text-[--color-danger-500]">*</span>
    {/if}
  </label>

  <div class={fieldWrapperClasses}>
    <button
      id={triggerId}
      type="button"
      class={selectClasses}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-controls={listboxId}
      aria-labelledby={labelId}
      onclick={toggleList}
      onkeydown={handleTriggerKeydown}
      disabled={disabled}
    >
      <span class={valueClasses}>
        {#if selectedOption}
          {selectedOption.label}
        {:else}
          {placeholder ?? 'Select an option'}
        {/if}
      </span>
      <span class={chevronClasses} aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </button>

    <!-- Hidden native select for form integration -->
    <select
      id={nativeId}
      class="select-native"
      bind:this={nativeSelectRef}
      bind:value={value}
      disabled={disabled}
      required={required}
      aria-hidden="true"
      tabindex="-1"
      aria-invalid={hasError}
      aria-describedby={hasError ? errorId : undefined}
      {...restProps}
    >
      {#if placeholder}
        <option value="">{placeholder}</option>
      {/if}
      {#each options as option}
        <option value={option.value}>
          {option.label}
        </option>
      {/each}
    </select>

    {#if isOpen}
      <ul
        id={listboxId}
        class={dropdownClasses}
        role="listbox"
        aria-labelledby={labelId}
        aria-activedescendant={highlightedIndex >= 0 ? optionId(highlightedIndex) : undefined}
        tabindex="-1"
      >
        {#if options.length === 0}
          <li class={emptyStateClasses}>No options available</li>
        {:else}
          {#each options as option, index}
            {#key option.value}
              <li>
                <button
                  id={optionId(index)}
                  role="option"
                  type="button"
                  aria-selected={option.value === value}
                  class={SelectStyleManager.getOptionClasses(option.value === value, highlightedIndex === index, disabled)}
                  onclick={() => handleOptionClick(index)}
                  onmouseenter={() => (highlightedIndex = index)}
                >
                  <span>{option.label}</span>
                  {#if option.value === value}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  {/if}
                </button>
              </li>
            {/key}
          {/each}
        {/if}
      </ul>
    {/if}
  </div>

  {#if hasError}
    <p id={errorId} class={errorClasses}>
      {#each errors as error, i}
        {error}{i < errors.length - 1 ? ' ' : ''}
      {/each}
    </p>
  {/if}
</div>
