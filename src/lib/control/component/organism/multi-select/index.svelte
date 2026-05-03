<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import type { SlotMultiSelect as MultiSelectProps } from '$stylist/control/interface/slot/multi-select';
  import { createMultiSelectState } from '$stylist/control/function/state/multi-select';

  let props: MultiSelectProps = $props();
  const state = createMultiSelectState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      options: _options,
      value: _value,
      placeholder: _placeholder,
      disabled: _disabled,
      searchable: _searchable,
      maxSelections: _maxSelections,
      dropdownClass: _dropdownClass,
      selectedClass: _selectedClass,
      optionClass: _optionClass,
      placeholderClass: _placeholderClass,
      searchInputClass: _searchInputClass,
      onInput: _onInput,
      onChange: _onChange,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={state.containerClasses} bind:this={state.containerRef} {...restProps}>
  <div
    class={state.selectDisplayClasses}
    onclick={state.toggleDropdown}
    onkeydown={(event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        state.toggleDropdown();
      }
    }}
    role="button"
    tabindex={state.disabled ? -1 : 0}
  >
    {#if state.selectedValues.length === 0}
      <span class={state.placeholderClasses}>{state.placeholder}</span>
    {:else}
      {#each state.selectedValues as selectedValue}
        {@const foundOption = state.options.find((opt) => opt.value === selectedValue)}
        {#if foundOption}
          <span class={state.selectedValueContainerClasses}>
            {foundOption.label}
            <button
              type="button"
              class={state.removeButtonClasses}
              onclick={(event) => {
                event.stopPropagation();
                state.removeOption(selectedValue);
              }}
              aria-label={`Remove ${foundOption.label}`}
            >
              <BaseIcon name={state.X} class="h-3 w-3" />
            </button>
          </span>
        {/if}
      {/each}
    {/if}

    <button
      type="button"
      class={state.clearButtonClasses}
      onclick={(event) => {
        event.stopPropagation();
        state.clearSelections();
      }}
      disabled={state.disabled || state.selectedValues.length === 0}
    >
      <BaseIcon name={state.X} class="h-4 w-4" />
    </button>
    <div class="ml-2">
      <BaseIcon name={state.ChevronDown} class={state.chevronClasses} />
    </div>
  </div>

  {#if state.isOpen}
    <div
      bind:this={state.dropdownRef}
      class={state.dropdownClasses}
      onclick={(event) => event.stopPropagation()}
      onkeydown={(event) => event.stopPropagation()}
      role="dialog"
      tabindex={0}
    >
      {#if state.searchable}
        <div class={state.searchContainerClasses}>
          <input
            type="text"
            class={state.searchInputClasses}
            placeholder="Search..."
            bind:value={state.searchQuery}
            onkeydown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                const firstOption = state.getFilteredOptions()[0];
                if (firstOption) {
                  state.selectOption(firstOption.value);
                }
              }
            }}
          />
        </div>
      {/if}

      {#if state.getFilteredOptions().length > 0}
        {#each state.getFilteredOptions() as option}
          <div
            class={state.getOptionClasses(option)}
            onclick={() => state.selectOption(option.value)}
            onkeydown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                state.selectOption(option.value);
              }
            }}
            role="option"
            aria-selected={state.selectedValues.includes(option.value)}
            tabindex={0}
          >
            {option.label}
          </div>
        {/each}
      {:else}
        <div class={state.noOptionsMessageClasses}>
          {state.searchQuery ? 'No options match your search' : 'No options available'}
        </div>
      {/if}
    </div>
  {/if}
</div>
