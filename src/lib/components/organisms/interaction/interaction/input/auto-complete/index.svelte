<script lang="ts">
  import { Search } from 'lucide-svelte';
  import type { AutoCompleteOption } from '$stylist/design-system/props/interaction-input';
  import { InteractionInputStyleManager } from '$stylist/design-system/styles/interaction-input';

  interface ExtendedAutoCompleteProps {
    options?: AutoCompleteOption[];
    placeholder?: string;
    value?: string;
    class?: string;
    inputClass?: string;
    listClass?: string;
    itemClass?: string;
    selectedClass?: string;
    onInput?: (value: string) => void;
    onSelect?: (option: AutoCompleteOption) => void;
    debounce?: number;
    showAllSuggestions?: boolean;
  }

  let {
    options = [],
    placeholder = 'Search...',
    value = '',
    class: className = '',
    inputClass = '',
    listClass = '',
    itemClass = '',
    selectedClass = 'bg-blue-100',
    onInput,
    onSelect,
    debounce = 250,
    showAllSuggestions = false,
    ...restProps
  }: ExtendedAutoCompleteProps = $props();

  let filteredOptions = $state<AutoCompleteOption[]>([]);
  let isOpen = $state(false);
  let highlightedIndex = $state(-1);
  let inputValue = $state(value);

  $effect(() => {
    if (inputValue) {
      filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase()) || option.value.toLowerCase().includes(inputValue.toLowerCase())
      );
    } else {
      filteredOptions = showAllSuggestions ? options : [];
    }
  });

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    inputValue = target.value;
    onInput?.(inputValue);
    isOpen = true;
    highlightedIndex = -1;
  }

  function handleSelect(option: AutoCompleteOption) {
    inputValue = option.label;
    onSelect?.(option);
    isOpen = false;
    highlightedIndex = -1;
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && highlightedIndex >= 0) {
      event.preventDefault();
      handleSelect(filteredOptions[highlightedIndex]);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      highlightedIndex = Math.min(highlightedIndex + 1, filteredOptions.length - 1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      highlightedIndex = Math.max(highlightedIndex - 1, -1);
    } else if (event.key === 'Escape') {
      isOpen = false;
    }
  }
</script>

<div class={InteractionInputStyleManager.root('c-auto-complete relative', className)}>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Search class="h-5 w-5 text-gray-400" />
    </div>
    <input
      type="text"
      class={InteractionInputStyleManager.input(`block w-full pl-10 pr-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 ${inputClass}`)}
      placeholder={placeholder}
      value={inputValue}
      oninput={handleInput}
      onkeydown={handleKeyDown}
      onfocus={() => (isOpen = true)}
      onblur={() => setTimeout(() => (isOpen = false), 120)}
      {...restProps}
    />
  </div>

  {#if isOpen && filteredOptions.length > 0}
    <ul class={`absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 overflow-auto ${listClass}`} role="listbox">
      {#each filteredOptions as option, index}
        <li
          class={`relative py-2 px-3 cursor-pointer hover:bg-blue-100 ${index === highlightedIndex ? selectedClass : ''} ${itemClass}`}
          role="option"
          aria-selected={index === highlightedIndex}
          onclick={() => handleSelect(option)}
          onkeydown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleSelect(option);
            }
          }}
          tabindex={0}
        >
          <span>{option.label}</span>
          {#if option.meta}
            <span class="ml-2 text-xs text-gray-500">{option.meta}</span>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>
