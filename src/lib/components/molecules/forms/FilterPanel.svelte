<script lang="ts">
  import TagInput from './TagInput.svelte';
  import { createEventDispatcher } from 'svelte';
  
  // Props
  let { 
    filters = []
  }: {
    filters?: string[];
  } = $props();

  // Events
  const dispatch = createEventDispatcher<{
    filterchange: { filters: string[] };
  }>();

  // Local state
  let localFilters = $state<string[]>(filters);
  
  $effect(() => {
    dispatch('filterchange', { filters: localFilters });
  });
</script>

<style>
  .filter-panel {
    padding: 0.5rem;
    background-color: white;
    border: 1px solid #cbd5e1;
    border-radius: 0.375rem;
  }
</style>

<div class="filter-panel">
  <TagInput 
    id="filter-panel"
    placeholder="Add filters..."
    bind:value={localFilters}
  />
</div>