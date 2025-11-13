<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Bug, RotateCcw, Copy, FileText, ExternalLink } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  type ErrorInfo = {
    error: Error;
    errorInfo: { componentStack: string };
  };

  type Props = {
    fallback?: (errorInfo: ErrorInfo) => HTMLElement;
    onError?: (error: Error, errorInfo: { componentStack: string }) => void;
    showDetails?: boolean;
    showReload?: boolean;
    showCopyError?: boolean;
    showReportIssue?: boolean;
    reportUrl?: string;
    title?: string;
    message?: string;
    class?: string;
    fallbackClass?: string;
    headerClass?: string;
    detailsClass?: string;
    actionsClass?: string;
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    fallback,
    onError,
    showDetails = true,
    showReload = true,
    showCopyError = true,
    showReportIssue = true,
    reportUrl = 'https://github.com/issues',
    title = 'Something went wrong',
    message = 'An unexpected error occurred. Our team has been notified.',
    class: className = '',
    fallbackClass = '',
    headerClass = '',
    detailsClass = '',
    actionsClass = '',
    children
  } = $props();

  let hasError = $state(false);
  let error: Error | null = $state(null);
  let errorInfo: { componentStack: string } | null = $state(null);
  let copied = $state(false);

  // State management for the component would be handled differently in Svelte
  // since we don't have lifecycle methods like React
  
  // Instead, we'll use Svelte's reactive statements
  $effect(() => {
    if (hasError && error && errorInfo && onError) {
      onError(error, errorInfo);
    }
  });

  function resetError() {
    hasError = false;
    error = null;
    errorInfo = null;
  }

  function copyError() {
    const errorText = `Error: ${error?.message}\n\nComponent Stack: ${errorInfo?.componentStack}`;
    navigator.clipboard.writeText(errorText);
    copied = true;
    
    setTimeout(() => {
      copied = false;
    }, 2000);
  }

  // Note: In a real ErrorBoundary implementation in Svelte, 
  // this would need to be implemented differently since 
  // Svelte doesn't have try...catch boundaries like React
  // The implementation below is illustrative of how the UI component would look
</script>

{#if hasError}
  <div class={`border border-red-200 rounded-lg bg-red-50 p-6 ${fallbackClass} ${className}`}>
    <div class={`flex items-start ${headerClass}`}>
      <div class="flex-shrink-0">
        <Bug class="h-6 w-6 text-red-500" />
      </div>
      <div class="ml-3">
        <h3 class="text-lg font-medium text-red-800">{title}</h3>
        <p class="mt-1 text-sm text-red-700">{message}</p>
      </div>
    </div>

    {#if showDetails && error}
      <div class={`mt-4 p-4 bg-white rounded border ${detailsClass}`}>
        <h4 class="text-sm font-medium text-gray-900 flex items-center">
          <FileText class="h-4 w-4 mr-1" />
          Error Details
        </h4>
        <div class="mt-2">
          <p class="text-sm text-red-600 font-mono break-words">{error.message}</p>
          
          {#if errorInfo?.componentStack}
            <details class="mt-3">
              <summary class="text-xs text-gray-500 cursor-pointer">Component Stack Trace</summary>
              <pre class="mt-2 p-3 bg-gray-100 rounded text-xs overflow-x-auto">
                {errorInfo.componentStack}
              </pre>
            </details>
          {/if}
        </div>
      </div>
    {/if}

    <div class={`mt-4 flex flex-wrap gap-3 ${actionsClass}`}>
      {#if showReload}
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
          onclick={resetError}
        >
          <RotateCcw class="h-4 w-4 mr-1" />
          Reload Page
        </button>
      {/if}
      
      {#if showCopyError}
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onclick={copyError}
        >
          {#if copied}
            <svg class="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          {:else}
            <Copy class="h-4 w-4 mr-1" />
            Copy Error
          {/if}
        </button>
      {/if}
      
      {#if showReportIssue}
        <a
          href={reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          <ExternalLink class="h-4 w-4 mr-1" />
          Report Issue
        </a>
      {/if}
    </div>
  </div>
{:else}
  <div class={className}>
    {#if children}
      {@render children()}
    {/if}
  </div>
{/if}