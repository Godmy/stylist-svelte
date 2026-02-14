<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { X, CheckCircle, AlertCircle, Info, XCircle, AlertTriangle } from 'lucide-svelte';

  type ToastType = 'info' | 'success' | 'warning' | 'error';

  type Toast = {
    id: string;
    title?: string;
    message: string;
    type: ToastType;
    duration?: number; // in milliseconds, 0 means persistent
    actions?: Array<{
      label: string;
      onClick: () => void;
    }>;
    onDismiss?: () => void;
  };

  type Props = {
    toasts: Toast[];
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    maxToasts?: number;
    class?: string;
    toastClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    toasts = [],
    position = 'bottom-right',
    maxToasts = 5,
    class: className = '',
    toastClass = '',
    ...restProps
  }: Props = $props();

  // Position classes
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  };

  // Get toast color based on type
  function getToastColor(type: ToastType) {
    switch(type) {
      case 'success': return 'bg-green-50 border-green-200 text-green-800';
      case 'warning': return 'bg-yellow-50 border-green-200 text-yellow-800';
      case 'error': return 'bg-red-50 border-red-200 text-red-800';
      case 'info':
      default: return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  }

  // Get toast icon based on type
  function getToastIcon(type: ToastType) {
    switch(type) {
      case 'success': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'error': return XCircle;
      case 'info':
      default: return Info;
    }
  }
</script>

{#if toasts.length > 0}
  <div class={`fixed z-50 space-y-3 ${positionClasses[position]} ${className}`} {...restProps}>
    {#each toasts.slice(0, maxToasts) as toast}
      <div class={`border rounded-lg p-4 shadow-lg max-w-xs w-full ${getToastColor(toast.type)} ${toastClass}`}>
        <div class="flex">
          <div class="flex-shrink-0">
            {#if true}
              {@const Icon = getToastIcon(toast.type)}
              <Icon class={`h-5 w-5 ${
                toast.type === 'error' ? 'text-red-500' :
                toast.type === 'warning' ? 'text-yellow-500' :
                toast.type === 'success' ? 'text-green-500' : 'text-blue-500'
              }`} />
            {/if}
          </div>

          <div class="ml-3 flex-1">
            {#if toast.title}
              <h3 class="text-sm font-medium">{toast.title}</h3>
            {/if}
            <p class="text-sm mt-1">{toast.message}</p>

            {#if toast.actions && toast.actions.length > 0}
              <div class="mt-3 flex space-x-2">
                {#each toast.actions as action}
                  <button
                    type="button"
                    class="inline-flex items-center px-2.5 py-1 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none bg-blue-100 text-blue-700 hover:bg-blue-200"
                    onclick={action.onClick}
                  >
                    {action.label}
                  </button>
                {/each}
              </div>
            {/if}
          </div>

          <div class="ml-4 flex-shrink-0">
            <button
              type="button"
              class="text-gray-400 hover:text-gray-500"
              onclick={() => toast.onDismiss && toast.onDismiss()}
              aria-label="Dismiss toast"
            >
              <X class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}
