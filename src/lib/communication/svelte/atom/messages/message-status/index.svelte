<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist';
const CheckCircle = 'check-circle';
const AlertTriangle = 'alert-triangle';
const Info = 'info';
const XCircle = 'x-circle';


  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

  type MessageVariant = 'success' | 'warning' | 'error' | 'info';

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
    variant?: MessageVariant;
  };

  let {
    show = false,
    title,
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
    variant = 'info',
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

  // Icon mapping based on variant
  const iconMap: Record<MessageVariant, string> = {
    success: CheckCircle,
    warning: AlertTriangle,
    error: XCircle,
    info: Info
  };

  let iconComponent = $derived(iconMap[variant] ?? Info);

  // Default titles based on variant
  const defaultTitles: Record<MessageVariant, string> = {
    success: 'Success',
    warning: 'Warning',
    error: 'Error',
    info: 'Information'
  };

  let displayTitle = $derived(title ?? defaultTitles[variant]);

  // Style mapping based on variant
  let variantClasses = $derived({
    success: 'border-[var(--color-success-200)] bg-[var(--color-success-50)] text-[var(--color-success-800)]',
    warning: 'border-yellow-200 bg-yellow-50 text-yellow-800',
    error: 'border-[var(--color-danger-200)] bg-[var(--color-danger-50)] text-[var(--color-danger-800)]',
    info: 'border-[var(--color-primary-200)] bg-[var(--color-primary-50)] text-[var(--color-primary-800)]'
  }[variant]);

  let iconColorClasses = $derived({
    success: 'text-[var(--color-success-500)]',
    warning: 'text-yellow-500',
    error: 'text-[var(--color-danger-500)]',
    info: 'text-[var(--color-primary-500)]'
  }[variant]);

  let closeButtonColorClasses = $derived({
    success: 'text-[var(--color-success-500)] hover:text-[var(--color-success-600)]',
    warning: 'text-yellow-500 hover:text-yellow-600',
    error: 'text-[var(--color-danger-500)] hover:text-[var(--color-danger-600)]',
    info: 'text-[var(--color-primary-500)] hover:text-[var(--color-primary-600)]'
  }[variant]);

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
    class={`fixed z-[var(--z-index-modal)] max-w-sm w-full p-4 rounded-lg shadow-lg border ${variantClasses} ${positionClasses} ${hostClass}`}
    role="alert"
    {...restProps}
  >
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <BaseIcon name={iconComponent} class={`h-5 w-5 ${iconColorClasses}`}></BaseIcon>
      </div>
      <div class={`ml-3 w-0 flex-1 ${contentClass}`}>
        {#if displayTitle}
          <p class={`text-sm font-medium ${headerClass}`}>
            {displayTitle}
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
            class={`inline-flex focus:outline-none ${closeButtonColorClasses}`}
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






