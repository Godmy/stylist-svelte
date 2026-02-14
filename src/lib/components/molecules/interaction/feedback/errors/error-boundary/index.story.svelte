<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ErrorBoundary from './index.svelte';

  type Props = {
    showError: boolean;
    title: string;
    message: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showError',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Something went wrong'
    },
    {
      name: 'message',
      type: 'text',
      defaultValue: 'An unexpected error occurred. Please try again.'
    }
  ];
</script>

<Story
  id="molecules-error-boundary"
  title="ErrorBoundary"
  component={ErrorBoundary}
  category="Molecules"
  description="A component that catches and displays errors in its child components."
  tags={['error', 'fallback', 'boundary']}
  controls={controls}
>
  {#snippet children(props: any)}
    <div class="p-6">
      <p class="mb-4">Toggle to show error state: <input type="checkbox" bind:checked={props.showError} /></p>
      <div class="border border-gray-200 rounded-lg p-4 max-w-md">
        <ErrorBoundary title={props.title} message={props.message}>
          {#if !props.showError}
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



