<script lang="ts">
  import { createAutocompleteDropdownState } from '$stylist/control/function/state/autocomplete-dropdown';
  import type { AutocompleteDropdownProps } from '$stylist/control/interface/component/autocomplete-dropdown/other';

  let {
    options = [],
    value = '',
    placeholder = 'Select...',
    onValueInput,
    onValueChange,
    /** @deprecated use onValueInput/onValueChange */
    onChange = (value: string) => {},
    class: className = ''
  }: AutocompleteDropdownProps = $props();

  const state = createAutocompleteDropdownState({
    options,
    value,
    placeholder,
    onValueInput,
    onValueChange,
    onChange,
    class: className
  });
</script>

<div class={state.rootClass}>
  <button
    class={state.triggerClass}
    onclick={state.toggle}
    onkeydown={state.handleKeyDown}
    aria-haspopup="listbox"
    aria-expanded={state.isOpen}
  >
    {state.selectedOption ? state.selectedOption.label : placeholder}
    <svg
      class={state.chevronClass}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>

  {#if state.isOpen}
    <div role="listbox" class={state.listboxClass}>
      {#each options as option, i}
        <div
          role="option"
          aria-selected={state.localValue === option.value}
          tabindex={0}
          class={state.optionClass}
          onclick={() => state.handleSelect(option)}
          onkeydown={(event) => state.handleOptionKeyDown(event, option)}
        >
          {option.label}
        </div>
      {/each}
    </div>
  {/if}
</div>





