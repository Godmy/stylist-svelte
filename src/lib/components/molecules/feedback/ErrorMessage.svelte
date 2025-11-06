<script lang="ts">
  // Props
  let { 
    error,
    title = 'Error',
    onRetry,
    showRetry = true
  }: {
    error?: Error | string | null;
    title?: string;
    onRetry?: () => void;
    showRetry?: boolean;
  } = $props();

  // Local state
  let errorMessage = $state<string | null>(null);
  
  // Update error message when prop changes
  $effect(() => {
    if (error) {
      errorMessage = typeof error === 'string' ? error : error.message || 'An unknown error occurred';
    } else {
      errorMessage = null;
    }
  });
</script>

<style>
  .error-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 0.5rem;
    text-align: center;
    color: #991b1b;
  }

  .error-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .error-text {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  .retry-button {
    margin-top: 1rem;
  }
</style>

{#if errorMessage}
  <div class="error-message">
    <div class="error-title">{title}</div>
    <div class="error-text">{errorMessage}</div>
    {#if showRetry && onRetry}
      <button 
        class="retry-button"
        style="background-color: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;"
        onclick={onRetry}
      >
        Retry
      </button>
    {/if}
  </div>
{/if}