<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Search, X } from 'lucide-svelte';

  type SearchOption = {
    id: string;
    label: string;
    value: string;
  };

  type Props = {
    placeholder?: string;
    defaultValue?: string;
    suggestions?: SearchOption[];
    showSuggestions?: boolean;
    showButton?: boolean;
    buttonLabel?: string;
    disabled?: boolean;
    class?: string;
    inputClass?: string;
    suggestionsClass?: string;
    suggestionClass?: string;
    buttonClass?: string;
    onSearch?: (query: string) => void;
    onInput?: (query: string) => void;
    onSuggestionSelect?: (option: SearchOption) => void;
  } & HTMLAttributes<HTMLFormElement>;

  let {
    placeholder = 'Search...',
    defaultValue = '',
    suggestions = [],
    showSuggestions = true,
    showButton = true,
    buttonLabel = 'Search',
    disabled = false,
    class: className = '',
    inputClass = '',
    suggestionsClass = '',
    suggestionClass = '',
    buttonClass = '',
    onSearch,
    onInput,
    onSuggestionSelect,
    ...restProps
  }: Props = $props();

  let searchQuery = $state(defaultValue);
  let showSuggestionList = $state(false);
  let selectedSuggestionIndex = $state(-1);

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
    
    if (onInput) {
      onInput(searchQuery);
    }
    
    if (searchQuery && suggestions.length > 0) {
      showSuggestionList = true;
      selectedSuggestionIndex = -1;
    } else {
      showSuggestionList = false;
    }
  }

  function handleSearch(e: SubmitEvent) {
    e.preventDefault();
    
    if (onSearch) {
      onSearch(searchQuery);
    }
    
    showSuggestionList = false;
  }

  function selectSuggestion(option: SearchOption) {
    searchQuery = option.label;
    showSuggestionList = false;
    
    if (onSuggestionSelect) {
      onSuggestionSelect(option);
    }
  }

  function clearSearch() {
    searchQuery = '';
    
    if (onInput) {
      onInput('');
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (!showSuggestionList) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, suggestions.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedSuggestionIndex >= 0 && selectedSuggestionIndex < suggestions.length) {
        selectSuggestion(suggestions[selectedSuggestionIndex]);
      } else {
        handleSearch(e as any); // Type assertion since we know it's a submit event
      }
    } else if (e.key === 'Escape') {
      showSuggestionList = false;
    }
  }
</script>

<form class={`relative w-full max-w-2xl mx-auto ${className}`} onsubmit={handleSearch} {...restProps}>
  <div class="relative">
    <div class="flex items-center">
      <input
        type="text"
        class={`w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
          disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
        } ${inputClass}`}
        placeholder={placeholder}
        bind:value={searchQuery}
        oninput={handleInput}
        onkeydown={handleKeyDown}
        disabled={disabled}
        autocomplete="off"
      />
      
      <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <Search class="h-5 w-5" />
      </div>
      
      {#if searchQuery}
        <button
          type="button"
          class="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onclick={clearSearch}
          aria-label="Clear search"
        >
          <X class="h-5 w-5" />
        </button>
      {/if}
      
      {#if showButton}
        <button
          type="submit"
          class={`ml-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          } ${buttonClass}`}
          disabled={disabled}
        >
          {buttonLabel}
        </button>
      {/if}
    </div>
  </div>

  {#if showSuggestions && showSuggestionList && suggestions.length > 0 && searchQuery}
    <div role="listbox" class={`absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto ${suggestionsClass}`}>
      {#each suggestions as suggestion, index}
        <button
          type="button"
          role="option"
          class={`w-full text-left px-4 py-2 cursor-pointer hover:bg-gray-100 ${
            index === selectedSuggestionIndex ? 'bg-blue-50' : ''
          } ${suggestionClass}`}
          onclick={() => selectSuggestion(suggestion)}
          onmouseenter={() => selectedSuggestionIndex = index}
          aria-selected={index === selectedSuggestionIndex}
        >
          {suggestion.label}
        </button>
      {/each}
    </div>
  {/if}
</form>
