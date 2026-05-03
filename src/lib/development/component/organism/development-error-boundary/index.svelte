<script lang="ts">
  import type { DevelopmentErrorBoundaryProps } from '$stylist/development/type/struct/development-error-boundary-props';
  import { createDevelopmentErrorBoundaryState } from '$stylist/development/function/state/development-error-boundary';
  import { Icon as BaseIcon } from '$stylist/media';

  let { ...props }: DevelopmentErrorBoundaryProps = $props();
  const state = createDevelopmentErrorBoundaryState(props);
</script>

{#if state.hasError}
  <div class={state.fallbackContainerClass}>
    <div class={state.headerComputedClass}>
      <div class="flex-shrink-0">
        <BaseIcon name={state.Bug} class="h-6 w-6 text-red-500" />
      </div>
      <div class="ml-3">
        <h3 class="text-lg font-medium text-red-800">{state.title}</h3>
        <p class="mt-1 text-sm text-red-700">{state.message}</p>
      </div>
    </div>

    {#if state.showDetails && state.error}
      <div class={state.detailsComputedClass}>
        <h4 class="text-sm font-medium text-gray-900 flex items-center">
          <BaseIcon name={state.FileText} class="h-4 w-4 mr-1" />
          Error Details
        </h4>
        <div class="mt-2">
          <p class="text-sm text-red-600 font-mono break-words">{state.error.message}</p>

          {#if state.errorInfo?.componentStack}
            <details class="mt-3">
              <summary class="text-xs text-gray-500 cursor-pointer">Component Stack Trace</summary>
              <pre class="mt-2 p-3 bg-gray-100 rounded text-xs overflow-x-auto">
                {state.errorInfo.componentStack}
              </pre>
            </details>
          {/if}
        </div>
      </div>
    {/if}

    <div class={state.actionsComputedClass}>
      {#if state.showReload}
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none"
          onclick={state.resetError}
        >
          <BaseIcon name={state.RotateCcw} class="h-4 w-4 mr-1" />
          Reload Page
        </button>
      {/if}

      {#if state.showCopyError}
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onclick={state.copyError}
        >
          {#if state.copied}
            <svg class="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          {:else}
            <BaseIcon name={state.Copy} class="h-4 w-4 mr-1" />
            Copy Error
          {/if}
        </button>
      {/if}

      {#if state.showReportIssue}
        <a
          href={state.reportUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        >
          <BaseIcon name={state.ExternalLink} class="h-4 w-4 mr-1" />
          Report Issue
        </a>
      {/if}
    </div>
  </div>
{:else}
  <div class={state.containerClass}>
    {#if state.children}
      {#if state.children}{@render state.children()}{/if}
    {/if}
  </div>
{/if}
