<script lang="ts">
  import SearchInput from './SearchInput.svelte';
  import { onMount } from 'svelte';

  let searchValue = '';
  let loading = false;
</script>

<div class="p-4 space-y-6">
  <h1 class="text-xl font-bold mb-4">Search Input Component</h1>
  
  <div class="space-y-4">
    <div>
      <h2 class="font-semibold mb-2">Default</h2>
      <SearchInput value={searchValue} oninput={(e: Event) => searchValue = (e.target as HTMLInputElement).value} />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">With Initial Value</h2>
      <SearchInput value="initial search" />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Loading State</h2>
      <SearchInput
        value={searchValue}
        loading
        oninput={(e: Event) => searchValue = (e.target as HTMLInputElement).value}
      />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Small Size</h2>
      <SearchInput size="sm" placeholder="Small search..." />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Large Size</h2>
      <SearchInput size="lg" placeholder="Large search..." />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Disabled</h2>
      <SearchInput value="disabled search" disabled />
    </div>
  </div>
</div>