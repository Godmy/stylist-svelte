<script lang="ts">
  import EmptyState from './index.svelte'; // Путь к вашему компоненту EmptyState
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  let title = $state('No Items Found');
  let description = $state('Try adjusting your search or filter to find what you\'re looking for.');
  let showButton = $state(true);
  let buttonText = $state('Reset Filters');

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'No Items Found' },
    { name: 'description', type: 'text', defaultValue: 'Try adjusting your search or filter to find what you\'re looking for.' },
    { name: 'showButton', type: 'boolean', defaultValue: true },
    { name: 'buttonText', type: 'text', defaultValue: 'Reset Filters' }
  ];
</script>

# EmptyState

<Story id="emptystate-story" title="EmptyState" component={EmptyState} {controls}>
  <div class="space-y-4 p-8">
    {#if showButton}
      <EmptyState
        {title}
        {description}
        action={{
          label: buttonText,
          onClick: () => console.log('Action button clicked')
        }}
      >
      </EmptyState>
    {:else}
      <EmptyState
        {title}
        {description}
      >
      </EmptyState>
    {/if}

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
        <label>Description: <textarea bind:value={description} rows="3" class="w-full p-2 border"></textarea></label>
      </div>

      <div>
        <label>Button Text: <input type="text" bind:value={buttonText} /></label>
      </div>
    </div>
  </div>
</Story>

