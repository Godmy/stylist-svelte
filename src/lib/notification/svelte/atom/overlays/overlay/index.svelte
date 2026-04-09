<script lang="ts">
  // Props
  let { 
    loading = false,
    message = 'Loading visualization...',
    spinnerSize = 'md'
  }: {
    loading?: boolean;
    message?: string;
    spinnerSize?: 'sm' | 'md' | 'lg';
  } = $props();

  // Local state
  let isLoading = $state(loading);
  
  // Update loading state when prop changes
  $effect(() => {
    isLoading = loading;
  });
</script>

<style>
  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: color-mix(in srgb, var(--color-background-primary) 80%, transparent);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: var(--z-index-layer50);
    transition: opacity var(--duration-300) var(--animation-ease);
  }

  .loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-4);
    padding: var(--spacing-8);
    background-color: var(--color-background-primary);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-custom21);
  }

  .loading-message {
    font-size: var(--font-size-4);
    color: var(--color-text-secondary);
    text-align: center;
  }

  .spinner {
    display: inline-block;
    border: 3px solid var(--color-border-primary);
    border-top: 3px solid var(--color-primary-500);
    border-radius: 50%;
    animation: spin var(--duration-1000) var(--animation-linear) infinite;
  }

  .spinner.sm { width: var(--spacing-5); height: var(--spacing-5); }
  .spinner.md { width: var(--spacing-8); height: var(--spacing-8); }
  .spinner.lg { width: var(--spacing-12); height: var(--spacing-12); }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>

{#if isLoading}
  <div class="loading-overlay">
    <div class="loading-content">
      <div class="spinner {spinnerSize}"></div>
      <div class="loading-message">{message}</div>
    </div>
  </div>
{/if}



