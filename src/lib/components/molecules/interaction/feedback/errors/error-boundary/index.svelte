<script lang="ts">
  import type { IErrorBoundaryProps } from '$stylist/design-system/props/error-boundary';
  import { ErrorBoundaryStyleManager } from '$stylist/design-system/styles/error-boundary';
  import { AlertTriangle, RotateCcw } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';

  /**
   * @component ErrorBoundary
   * @description Error boundary component that follows SOLID principles
   * - Single Responsibility: Handles errors in child components
   * - Open/Closed: Extendable via fallback prop
   * - Liskov Substitution: Can be substituted with other error boundaries
   * - Interface Segregation: Uses well-defined interfaces in types.ts
   * - Dependency Inversion: Depends on abstractions (themes, types) rather than concretions
   */

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
  }: IErrorBoundaryProps = $props();

  // Derived CSS classes using the style manager following theming system
  const themedClasses = $derived(`${ErrorBoundaryStyleManager.getThemedClasses()} ${hostClass}`);
  const contentClasses = $derived(`${ErrorBoundaryStyleManager.getContentClasses()} ${contentClass}`);
  const headerClasses = $derived(`${ErrorBoundaryStyleManager.getHeaderClasses()} ${headerClass}`);
  const bodyClasses = $derived(`${ErrorBoundaryStyleManager.getBodyClasses()} ${bodyClass}`);
  const footerClasses = $derived(`${ErrorBoundaryStyleManager.getFooterClasses()} ${footerClass}`);
  const detailsClasses = $derived(ErrorBoundaryStyleManager.getDetailsClasses());
  const detailsTextClasses = $derived(ErrorBoundaryStyleManager.getDetailsTextClasses());
  const iconClasses = $derived(ErrorBoundaryStyleManager.getIconClasses());
  const summaryClasses = $derived(ErrorBoundaryStyleManager.getSummaryClasses());

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
      <div class={themedClasses} {...restProps}>
        <div class={contentClasses}>
          <div class="flex-shrink-0">
            <AlertTriangle class={iconClasses} />
          </div>
          <div class="ml-4">
            <h3 class={headerClasses}>{title}</h3>
            <div class={bodyClasses}>
              <p class="text-[--color-text-danger]">{message}</p>
              {#if showDetails}
                <details class={detailsClasses}>
                  <summary class={summaryClasses}>Error details</summary>
                  <pre class={detailsTextClasses}>
                    {(error as Error).stack}
                    {`\n\nComponent Stack:`}
                  </pre>
                </details>
              {/if}
            </div>
            <div class={footerClasses}>
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
