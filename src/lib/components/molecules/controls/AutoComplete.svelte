<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Search } from 'lucide-svelte';

  type Option = {
    id: string;
    label: string;
    value: string;
    meta?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLInputElement>, 'class'>;

  type Props = RestProps & {
    options: Option[];
    placeholder?: string;
    value?: string;
    class?: string;
    inputClass?: string;
    listClass?: string;
    itemClass?: string;
    selectedClass?: string;
    onInput?: (value: string, event?: Event) => void;
    onSelect?: (option: Option) => void;
    debounce?: number;
    showAllSuggestions?: boolean;
  };

  let {
    options,
    placeholder = 'Search...',
    value = '',
    class: hostClass = '',
    inputClass = '',
    listClass = '',
    itemClass = '',
    selectedClass = 'bg-blue-100',
    onInput,
    onSelect,
    debounce = 300,
    showAllSuggestions = false,
    ...restProps
  }: Props = $props();

  let filteredOptions = $state<Option[]>([]);
  let isOpen = $state(false);
  let highlightedIndex = $state(-1);
  let inputValue = $state(value);
  let searchTimeout = $state<number | null>(null);

  $effect(() => {
    if (inputValue) {
      filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
        option.value.toLowerCase().includes(inputValue.toLowerCase())
      );
    } else {
      filteredOptions = showAllSuggestions ? options : [];
    }
  });

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    inputValue = target.value;
    
    // Clear previous debounce
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    // Debounce the input event
    searchTimeout = window.setTimeout(() => {
      onInput?.(inputValue, event);
      
      if (inputValue) {
        filteredOptions = options.filter(option =>
          option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
          option.value.toLowerCase().includes(inputValue.toLowerCase())
        );
      } else {
        filteredOptions = showAllSuggestions ? options : [];
      }
      isOpen = true;
      highlightedIndex = -1;
    }, debounce) as unknown as number;
  }

  function handleSelect(option: Option) {
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
      highlightedIndex = -1;
    }
  }

  function handleFocus() {
    if (showAllSuggestions) {
      filteredOptions = options;
    }
    isOpen = true;
  }

  function handleBlur() {
    // Delay blur to allow item click to register
    setTimeout(() => {
      isOpen = false;
    }, 150);
  }
</script>

<div class={`autocomplete-container relative ${hostClass}`}>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <Search class="h-5 w-5 text-gray-400" />
    </div>
    <input
      type="text"
      class={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${inputClass}`}
      placeholder={placeholder}
      value={inputValue}
      oninput={handleInput}
      onkeydown={handleKeyDown}
      onfocus={handleFocus}
      onblur={handleBlur}
      {...restProps}
    />
  </div>

  {#if isOpen && filteredOptions.length > 0}
    <ul
      class={`absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm ${listClass}`}
      role="listbox"
    >
      {#each filteredOptions as option, index}
        <li
          class={`relative py-2 pl-3 pr-9 cursor-pointer select-none hover:bg-blue-100 ${
            index === highlightedIndex ? selectedClass : ''
          } ${itemClass}`}
          role="option"
          aria-selected={index === highlightedIndex}
          onclick={() => handleSelect(option)}
          onkeydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleSelect(option);
            }
          }}
          tabindex={0}
        >
          <div class="flex items-center">
            <span class="block font-normal">{option.label}</span>
            {#if option.meta}
              <span class="ml-2 inline-block px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                {option.meta}
              </span>
            {/if}
          </div>
          {#if index === highlightedIndex}
            <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>
