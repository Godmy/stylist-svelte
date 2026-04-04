<script lang="ts">
  let {
    placeholder = 'Search...',
    onSearch = () => {},
    onClear = () => {},
    class: className = ''
  }: {
    placeholder?: string;
    onSearch?: (query: string) => void;
    onClear?: () => void;
    class?: string;
  } = $props();

  let query = $state('');

  function handleSearch() {
    onSearch(query);
  }

  function handleClear() {
    query = '';
    onClear();
  }
</script>

<div class="flex {className}">
  <input
    type="text"
    bind:value={query}
    placeholder={placeholder}
    class="flex-1 p-2 border rounded-l"
    onkeydown={(e) => e.key === 'Enter' && handleSearch()}
  />
  <button type="button" onclick={handleSearch} class="px-3 bg-blue-500 text-white rounded-r">Search</button>
  <button type="button" onclick={handleClear} class="ml-2 px-2 text-gray-500">Clear</button>
</div>
