<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { CheckCircle } from 'lucide-svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    show?: boolean;
    title?: string;
    message?: string;
    children?: Snippet;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    bodyClass?: string;
    closable?: boolean;
    onClose?: () => void;
    duration?: number; // in milliseconds, 0 means persistent
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  };

  let {
    show = false,
    title = 'Success',
    message,
    children,
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    bodyClass = '',
    closable = true,
    onClose,
    duration = 5000,
    position = 'top-right',
    ...restProps
  }: Props = $props();

  let isVisible = $state(show);
  let timeoutId: number | null = null;

  $effect(() => {
    isVisible = show;
    if (show && duration > 0) {
      timeoutId = window.setTimeout(() => {
        handleClose();
      }, duration) as unknown as number;
    }
  });

  $effect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });

  function handleClose() {
    isVisible = false;
    onClose?.();
  }

  let positionClasses = $derived({
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  }[position]);
</script>

{#if isVisible}
  <div 
    class={`fixed z-50 max-w-sm w-full p-4 rounded-lg shadow-lg border border-green-200 bg-green-50 text-green-800 ${positionClasses} ${hostClass}`}
    role="alert"
    {...restProps}
  >
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <CheckCircle class="h-5 w-5 text-green-500" />
      </div>
      <div class={`ml-3 w-0 flex-1 ${contentClass}`}>
        {#if title}
          <p class={`text-sm font-medium ${headerClass}`}>
            {title}
          </p>
        {/if}
        {#if message}
          <p class={`mt-1 text-sm ${bodyClass}`}>
            {message}
          </p>
        {/if}
        {#if children}
          <div class={`mt-2 ${bodyClass}`}>
            {@render children?.()}
          </div>
        {/if}
      </div>
      {#if closable}
        <div class="ml-4 flex-shrink-0 flex">
          <button
            type="button"
            class="inline-flex text-green-500 hover:text-green-600 focus:outline-none"
            onclick={handleClose}
            aria-label="Close"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}
