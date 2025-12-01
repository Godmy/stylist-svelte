<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Loader, Clock, AlertCircle } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    loading?: boolean;
    error?: boolean;
    errorMessage?: string;
    loadingMessage?: string;
    timeout?: number; // milliseconds
    fallback?: HTMLElement;
    retryFunction?: () => void;
    showRetry?: boolean;
    showTimeoutMessage?: boolean;
    timeoutMessage?: string;
    title?: string;
    class?: string;
    loadingClass?: string;
    errorClass?: string;
    timeoutClass?: string;
    contentClass?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    loading = false,
    error = false,
    errorMessage = 'An error occurred while loading.',
    loadingMessage = 'Loading...',
    timeout = 30000, // 30 seconds default
    fallback = undefined,
    retryFunction = undefined,
    showRetry = true,
    showTimeoutMessage = true,
    timeoutMessage = 'Loading taking longer than expected...',
    title = 'Loading Boundary',
    class: className = '',
    loadingClass = '',
    errorClass = '',
    timeoutClass = '',
    contentClass = '',
    children = undefined
  }: Props = $props();

  let timedOut = $state(false);
  let startTime = $state<number | null>(null);

  // Check for timeout
  $effect(() => {
    if (loading) {
      startTime = Date.now();
      
      const timer = setTimeout(() => {
        timedOut = true;
      }, timeout);
      
      return () => clearTimeout(timer);
    } else {
      timedOut = false;
      startTime = null;
    }
  });

  function handleRetry() {
    if (retryFunction) {
      timedOut = false;
      retryFunction();
    }
  }

  function getElapsedTime() {
    if (!startTime) return 0;
    return Math.floor((Date.now() - startTime) / 1000);
  }
</script>

{#if loading}
  <div class={`border border-gray-200 rounded-lg p-8 text-center ${loadingClass} ${className}`}>
    <div class="flex flex-col items-center justify-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4">
        <Loader class="h-8 w-8 text-blue-500" />
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-1">{title}</h3>
      <p class="text-gray-600">{loadingMessage}</p>
      
      {#if showTimeoutMessage && timedOut}
        <div class="mt-4 p-3 bg-yellow-50 rounded-md flex items-start max-w-md">
          <AlertCircle class="h-5 w-5 text-yellow-500 mt-0.5 mr-2" />
          <div>
            <p class="text-sm font-medium text-yellow-800">Still loading...</p>
            <p class="text-sm text-yellow-700">{timeoutMessage}</p>
          </div>
        </div>
      {/if}
      
      <div class="mt-4 text-sm text-gray-500 flex items-center">
        <Clock class="h-4 w-4 mr-1" />
        Elapsed time: {getElapsedTime()}s
      </div>
    </div>
  </div>
{:else if error}
  <div class={`border border-red-200 rounded-lg p-8 text-center ${errorClass} ${className}`}>
    <div class="flex flex-col items-center">
      <AlertCircle class="h-12 w-12 text-red-500 mb-4" />
      <h3 class="text-lg font-medium text-gray-900 mb-1">Oops, something went wrong!</h3>
      <p class="text-gray-600 mb-4">{errorMessage}</p>
      
      {#if showRetry && retryFunction}
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
          onclick={handleRetry}
        >
          <svg class="-ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Try Again
        </button>
      {/if}
    </div>
  </div>
{:else}
  <div class={`loading-boundary-content ${contentClass} ${className}`}>
    {#if children}
      {@render children()}
    {/if}
  </div>
{/if}
