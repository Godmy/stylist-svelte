<script lang="ts">
  import Button from '../../atoms/ui-elements/Button.svelte';
  import Icon from '../../atoms/media/Icon.svelte';
  import { createEventDispatcher } from 'svelte';

  // Events
  const dispatch = createEventDispatcher<{
    togglelegend: {};
    togglesearch: {};
  }>();

  // Local state
  let showButtons = $state(true);
</script>

<style>
  .toolbar {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    background-color: #f1f5f9;
    border-radius: 0.375rem;
    border: 1px solid #cbd5e1;
  }
</style>

<div class="toolbar">
  <Button 
    variant="ghost" 
    size="sm"
    onclick={() => dispatch('togglesearch', {})}
    title="Toggle search"
  >
    <Icon name="search" size="sm" />
  </Button>
  
  <Button 
    variant="ghost" 
    size="sm"
    onclick={() => dispatch('togglelegend', {})}
    title="Toggle legend"
  >
    <Icon name="list" size="sm" />
  </Button>
</div>