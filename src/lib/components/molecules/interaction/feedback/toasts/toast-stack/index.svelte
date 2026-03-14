<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const X = 'x';
const CheckCircle = 'check-circle';
const AlertCircle = 'alert-circle';
const Info = 'info';
const XCircle = 'x-circle';
const AlertTriangle = 'alert-triangle';


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
      case 'success': return 'bg-[var(--color-success-50)] border-[var(--color-success-200)] text-[var(--color-success-800)]';
      case 'warning': return 'bg-yellow-50 border-[var(--color-success-200)] text-yellow-800';
      case 'error': return 'bg-[var(--color-danger-50)] border-[var(--color-danger-200)] text-[var(--color-danger-800)]';
      case 'info':
      default: return 'bg-[var(--color-primary-50)] border-[var(--color-primary-200)] text-[var(--color-primary-800)]';
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
  <div class={`fixed z-[var(--z-index-modal)] space-y-3 ${positionClasses[position]} ${className}`} {...restProps}>
    {#each toasts.slice(0, maxToasts) as toast}
      <div class={`border rounded-lg p-4 shadow-lg max-w-xs w-full ${getToastColor(toast.type)} ${toastClass}`}>
        <div class="flex">
          <div class="flex-shrink-0">
            {#if true}
              <BaseIcon name={getToastIcon(toast.type)} class={`h-5 w-5 ${
                toast.type === 'error' ? 'text-[var(--color-danger-500)]' :
                toast.type === 'warning' ? 'text-yellow-500' :
                toast.type === 'success' ? 'text-[var(--color-success-500)]' : 'text-[var(--color-primary-500)]'
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
                    class="inline-flex items-center px-2.5 py-1 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none bg-[var(--color-primary-100)] text-[var(--color-primary-700)] hover:bg-[var(--color-primary-200)]"
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
              class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
              onclick={() => toast.onDismiss && toast.onDismiss()}
              aria-label="Dismiss toast"
            >
              <BaseIcon name={X} class="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}






