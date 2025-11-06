<script lang="ts">
  import { debounce } from '$lib/utils/debounce';
  import { Search, X } from 'lucide-svelte';

  type Props = {
    value: string;
    onchange: (value: string) => unknown;
    placeholder?: string;
    debounceMs?: number;
    class?: string;
  };

  let {
    value = $bindable(),
    onchange,
    placeholder = 'Search...',
    debounceMs = 300,
    class: className = ''
  }: Props = $props();

  const debouncedOnChange = debounce(onchange, debounceMs);

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    value = target.value;
    debouncedOnChange(target.value);
  }

  function clearSearch() {
    value = '';
    onchange('');
  }
</script>

<div class="relative {className}">
  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <Search class="h-5 w-5 text-gray-400" />
  </div>
  <input
    type="search"
    {value}
    {placeholder}
    class="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    oninput={handleInput}
    aria-label="Search"
  />
  {#if value}
    <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
      <button
        type="button"
        onclick={clearSearch}
        class="text-gray-400 hover:text-gray-500 focus:outline-none"
        aria-label="Clear search"
      >
        <X class="h-5 w-5" />
      </button>
    </div>
  {/if}
</div>
