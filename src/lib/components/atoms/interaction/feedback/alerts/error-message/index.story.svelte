<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ErrorMessage from './index.svelte';

  let showError = true;
  let errorType = 'string';

  const errorTypes = ['string', 'error-object', 'null'];

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Error',
      description: 'Title for the error message'
    },
    {
      name: 'showRetry',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether to show the retry button'
    }
  ];

  function handleRetry() {
    console.log('Retry action triggered');
  }

  function setErrorType(type: string) {
    errorType = type;
  }
</script>

<Story
  id="atoms-error-message"
  title="ErrorMessage"
  component={ErrorMessage}
  category="Atoms/Interaction/Feedback/Alerts"
  description="ErrorMessage component for displaying error messages."
  tags={['error', 'message', 'alert', 'feedback']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="p-4">
      {#if showError}
        <ErrorMessage
          {...props}
          error={
            errorType === 'string' ? 'This is a sample error message' :
            errorType === 'error-object' ? new Error('Sample error object') :
            null
          }
          onRetry={handleRetry}
        />
      {/if}
      <div class="mt-4 flex space-x-2">
        <button 
          class="px-3 py-1 bg-blue-500 text-white rounded"
          onclick={() => setErrorType('string')}
        >
          String Error
        </button>
        <button 
          class="px-3 py-1 bg-blue-500 text-white rounded"
          onclick={() => setErrorType('error-object')}
        >
          Error Object
        </button>
        <button 
          class="px-3 py-1 bg-gray-500 text-white rounded"
          onclick={() => setErrorType('null')}
        >
          No Error
        </button>
        <button 
          class="px-3 py-1 bg-red-500 text-white rounded"
          onclick={() => showError = !showError}
        >
          Toggle Error
        </button>
      </div>
    </div>
  {/snippet}
  
  {#snippet variants}
    <div class="grid grid-cols-1 gap-4 p-4">
      <div>
        <h3 class="text-lg font-semibold mb-2">With Retry Button</h3>
        <ErrorMessage
          error="Network connection failed"
          title="Connection Error"
          showRetry={true}
          onRetry={handleRetry}
        />
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">Without Retry Button</h3>
        <ErrorMessage
          error="Invalid input provided"
          title="Validation Error"
          showRetry={false}
        />
      </div>
      <div>
        <h3 class="text-lg font-semibold mb-2">Long Error Message</h3>
        <ErrorMessage
          error="This is a very long error message that demonstrates how the component handles longer text content and wraps appropriately within its container."
          title="Long Message Error"
          showRetry={true}
          onRetry={handleRetry}
        />
      </div>
    </div>
  {/snippet}
</Story>
