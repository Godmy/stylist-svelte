<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { X, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    show?: boolean;
    title?: string;
    message?: string;
    children?: Snippet;
    type?: 'success' | 'warning' | 'error' | 'info' | 'default';
    duration?: number; // in milliseconds, 0 means persistent
    closable?: boolean;
    onClose?: () => void;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    class?: string;
    contentClass?: string;
    headerClass?: string;
    bodyClass?: string;
  };

  let {
    show = false,
    title,
    message,
    children,
    type = 'default',
    duration = 5000,
    closable = true,
    onClose,
    position = 'top-right',
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    bodyClass = '',
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

  let typeClasses = $derived({
    'success': 'bg-green-50 border-green-200 text-green-800',
    'warning': 'bg-yellow-50 border-yellow-200 text-yellow-800',
    'error': 'bg-red-50 border-red-200 text-red-800',
    'info': 'bg-blue-50 border-blue-200 text-blue-800',
    'default': 'bg-white border-gray-200 text-gray-800'
  }[type]);

  let positionClasses = $derived({
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  }[position]);

  let Icon = $derived({
    'success': CheckCircle,
    'warning': AlertCircle,
    'error': XCircle,
    'info': Info,
    'default': Info
  }[type]);
</script>

{#if isVisible}
  <div 
    class={`fixed z-50 max-w-sm w-full p-4 rounded-lg shadow-lg border ${typeClasses} ${positionClasses} ${hostClass}`}
    role="alert"
    {...restProps}
  >
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <Icon class="h-5 w-5" />
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
            {@render children()}
          </div>
        {/if}
      </div>
      {#if closable}
        <div class="ml-4 flex-shrink-0 flex">
          <button
            type="button"
            class="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
            onclick={handleClose}
            aria-label="Close"
          >
            <X class="h-5 w-5" />
          </button>
        </div>
      {/if}
    </div>
  </div>
{/if}
