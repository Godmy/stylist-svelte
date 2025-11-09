<script lang="ts">
  import EmptyState from './EmptyState.svelte'; // Путь к вашему компоненту EmptyState
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let title = 'No Items Found';
  let description = 'Try adjusting your search or filter to find what you\'re looking for.';
  let showButton = true;
  let buttonText = 'Reset Filters';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'No Items Found' },
    { name: 'description', type: 'text', defaultValue: 'Try adjusting your search or filter to find what you\'re looking for.' },
    { name: 'showButton', type: 'boolean', defaultValue: true },
    { name: 'buttonText', type: 'text', defaultValue: 'Reset Filters' }
  ];
</script>

# EmptyState

<Story title="EmptyState" {controls}>
  <div class="space-y-4 p-8">
    <EmptyState 
      {title} 
      {description} 
      {showButton}
    >
      {#if showButton}
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          {buttonText}
        </button>
      {/if}
    </EmptyState>

    <div class="space-y-4 mt-4">
      <div>
        <label>
          <input type="checkbox" bind:checked={showButton} /> Show Button
        </label>
      </div>

      <div>
        <label>Title: <input type="text" bind:value={title} /></label>
      </div>

      <div>
        <label>Description: <textarea bind:value={description} rows="3" class="w-full p-2 border" /></label>
      </div>

      <div>
        <label>Button Text: <input type="text" bind:value={buttonText} /></label>
      </div>
    </div>
  </div>
</Story>