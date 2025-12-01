<script lang="ts">
  import type { ISearchBarProps } from './types';
  import SearchBar from './SearchBar.svelte';

  let {
    variant = 'primary'
  } = $props();

  let placeholder: string = $state('Search...');
  let value: string = $state('');
  let disabled: boolean = $state(false);
  let debounceMs: number = $state(300);
  let className: string = $state('');

  function handleSearch(query: string) {
    console.log('Search event:', query);
  }

  function handleClear() {
    console.log('Clear event');
  }

  // Define controls for the story
  const args = $derived({
    placeholder,
    value,
    disabled,
    debounceMs,
    className
  });
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">SearchBar Component</h1>
  <p class="mb-4">A search input component with clear and search buttons.</p>

  <div class="mb-4 space-y-4">
    <div>
      <label class="block mb-1" for="search-placeholder">Placeholder: </label>
      <input
        id="search-placeholder"
        type="text"
        bind:value={placeholder}
        class="border rounded p-1 ml-2"
      />
    </div>

    <div>
      <label class="block mb-1" for="search-value">Value: </label>
      <input
        id="search-value"
        type="text"
        bind:value={value}
        class="border rounded p-1 ml-2"
      />
    </div>

    <div>
      <label class="block mb-1">
        <input
          type="checkbox"
          bind:checked={disabled}
          class="mr-1"
        />
        Disabled
      </label>
    </div>

    <div>
      <label class="block mb-1" for="search-debounce">Debounce (ms): </label>
      <input
        id="search-debounce"
        type="number"
        bind:value={debounceMs}
        class="border rounded p-1 ml-2 w-24"
      />
    </div>

    <div>
      <label class="block mb-1" for="search-class">Class: </label>
      <input
        id="search-class"
        type="text"
        bind:value={className}
        class="border rounded p-1 ml-2 w-full"
      />
    </div>
  </div>

  <div class="border p-4 rounded">
    <SearchBar
      {placeholder}
      {value}
      {disabled}
      {debounceMs}
      class={className}
      onsearch={(e) => {
        const customEvent = e as CustomEvent<{ query: string }>;
        handleSearch(customEvent.detail.query);
      }}
      onclear={() => handleClear()}
    />
  </div>
</div>