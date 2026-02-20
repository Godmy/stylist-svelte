<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import ErrorBoundary from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'showError',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether to show error state'
    },
    {
      name: 'title',
      type: 'text' as ControlType,
      defaultValue: 'Something went wrong',
      description: 'Error title'
    },
    {
      name: 'message',
      type: 'text' as ControlType,
      defaultValue: 'An unexpected error occurred. Please try again.',
      description: 'Error message'
    }
  ];
</script>

<Story
  {controls}
  title="ErrorBoundary Component"
  description="A component that catches and displays errors in its child components"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-6">
    <div class="border border-gray-200 rounded-lg p-4 max-w-md">
      <ErrorBoundary title={controlValues.title} message={controlValues.message}>
        {#if !controlValues.showError}
          <div class="text-center py-8">
            <h3 class="text-lg font-medium text-gray-900 mb-2">Normal Content</h3>
            <p class="text-gray-500">This content displays when no error occurs</p>
          </div>
        {:else}
          <div class="text-center py-8 text-red-500">
            <h3 class="text-lg font-medium mb-2">Simulated Error</h3>
            <p>This would trigger the error boundary in a real scenario</p>
          </div>
        {/if}
      </ErrorBoundary>
    </div>
  </div>

  {/snippet}
</Story>