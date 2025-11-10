<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { AlertTriangle, RotateCcw } from 'lucide-svelte';
  import Button from '../../atoms/controls/buttons/Button.svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type ErrorBoundaryDetails = {
    error: Error;
    details: {
      reset: () => void;
      componentStack: string;
    };
  };

  type Props = RestProps & {
    children: Snippet<[]>;
    fallback?: Snippet<[error: unknown, reset: () => void]>;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    title?: string;
    message?: string;
    showDetails?: boolean;
    onReset?: () => void;
  };

  let {
    children,
    fallback,
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    title = 'Something went wrong',
    message = 'An error occurred. Please try again.',
    showDetails = false,
    onReset,
    ...restProps
  }: Props = $props();

  function handleReset(reset: () => void) {
    reset();
    onReset?.();
  }
</script>

<svelte:boundary>
  {@render children()}
  {#snippet failed(error: unknown, reset: () => void)} 
    {#if fallback}
      {@render fallback(error, reset)}
    {:else}
      <div class={`error-boundary bg-red-50 border border-red-200 rounded-lg p-6 ${hostClass}`} {...restProps}>
        <div class={`flex items-start ${contentClass}`}>
          <div class="flex-shrink-0">
            <AlertTriangle class="h-6 w-6 text-red-500" />
          </div>
          <div class="ml-4">
            <h3 class={`text-lg font-medium text-red-800 ${headerClass}`}>{title}</h3>
            <div class={`mt-2 ${bodyClass}`}>
              <p class="text-red-700">{message}</p>
              {#if showDetails}
                <details class="mt-4">
                  <summary class="cursor-pointer text-red-700 font-medium">Error details</summary>
                  <pre class="mt-2 p-4 bg-red-100 text-red-900 rounded text-sm overflow-auto">
                    {(error as Error).stack}
                    {`\n\nComponent Stack:`}
                  </pre>
                </details>
              {/if}
            </div>
            <div class={`mt-4 ${footerClass}`}>
              <Button
                variant="primary"
                onclick={() => handleReset(reset)}
                class="flex items-center"
              >
                <RotateCcw class="w-4 h-4 mr-2" />
                Try again
              </Button>
            </div>
          </div>
        </div>
      </div>
    {/if}
  {/snippet}
</svelte:boundary>