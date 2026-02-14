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
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 50;
    transition: opacity 0.3s ease;
  }

  .loading-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .loading-message {
    font-size: 1rem;
    color: #475569;
    text-align: center;
  }

  .spinner {
    display: inline-block;
    border: 3px solid #e2e8f0; /* Light grey */
    border-top: 3px solid #3b82f6; /* Blue */
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .spinner.sm { width: 20px; height: 20px; }
  .spinner.md { width: 32px; height: 32px; }
  .spinner.lg { width: 48px; height: 48px; }

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


