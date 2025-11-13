<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronDown, X } from 'lucide-svelte';

  type Option = {
    value: string;
    label: string;
    disabled?: boolean;
  };

  type Props = {
    options: Option[];
    value?: string[];
    placeholder?: string;
    disabled?: boolean;
    searchable?: boolean;
    maxSelections?: number;
    class?: string;
    dropdownClass?: string;
    selectedClass?: string;
    optionClass?: string;
    placeholderClass?: string;
    searchInputClass?: string;
    onInput?: (value: string[]) => void;
    onChange?: (value: string[]) => void;
  } & HTMLAttributes<HTMLDivElement>;

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
  }: Props = $props();

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
</script>

<div class={`relative w-full ${className}`} bind:this={containerRef} {...restProps}>
  <!-- Selected values display -->
  <div 
    class={`min-h-[42px] w-full px-3 py-2 border rounded-md shadow-sm cursor-pointer flex flex-wrap items-center ${
      disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white hover:border-gray-400'
    } ${isOpen ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'}`}
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
      <span class={`text-gray-400 ${placeholderClass}`}>{placeholder}</span>
    {:else}
      {#each selectedValues as selectedValue}
        {#if options.find(opt => opt.value === selectedValue)}
          {@const foundOption = options.find(opt => opt.value === selectedValue)}
          <span class={`inline-flex items-center px-2 py-1 mr-2 mb-1 text-sm bg-blue-100 text-blue-800 rounded-full ${selectedClass}`}>
            {foundOption?.label}
            <button
              type="button"
              class="ml-1 text-blue-800 hover:text-blue-900"
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
      class="ml-auto pl-1 text-gray-500 hover:text-gray-700"
      onclick={(e: Event) => {
        e.stopPropagation();
        clearSelections();
      }}
      disabled={disabled || selectedValues.length === 0}
    >
      <X class="h-4 w-4" />
    </button>
    
    <div class="ml-2">
      <ChevronDown class={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </div>
  </div>

  <!-- Dropdown -->
  {#if isOpen}
    <div
      bind:this={dropdownRef}
      class={`absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto ${dropdownClass}`}
      onclick={(e: Event) => e.stopPropagation()}
      onkeydown={(e: KeyboardEvent) => e.stopPropagation()}
      role="dialog"
      tabindex={0}
    >
      {#if searchable}
        <div class="p-2 border-b">
          <input
            type="text"
            class={`w-full px-3 py-2 border rounded-md ${searchInputClass}`}
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
            class={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
              option.disabled ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'
            } ${optionClass} ${
              selectedValues.includes(option.value) ? 'bg-blue-50 text-blue-700' : ''
            }`}
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
        <div class="px-4 py-2 text-gray-500">
          {searchQuery ? 'No options match your search' : 'No options available'}
        </div>
      {/if}
    </div>
  {/if}
</div>