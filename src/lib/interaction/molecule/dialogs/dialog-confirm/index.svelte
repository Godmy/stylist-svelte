<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const AlertTriangle = 'alert-triangle';
const Info = 'info';
const Loader2 = 'loader-2';


  type Props = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'warning' | 'info';
    isLoading?: boolean;
  };

  let {
    isOpen = $bindable(),
    onClose,
    onConfirm,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    variant = 'danger',
    isLoading = false
  }: Props = $props();

  const variantClasses = {
    danger: 'bg-[var(--color-danger-600)] hover:bg-[var(--color-danger-700)] focus:ring-red-500',
    warning: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
    info: 'bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:ring-indigo-500'
  };

  const iconColors = {
    danger: 'text-[var(--color-danger-600)]',
    warning: 'text-yellow-600',
    info: 'text-[var(--color-primary-600)]'
  };

  function handleConfirm() {
    onConfirm();
  }
</script>

{#snippet dialogContent()}
  <div class="sm:flex sm:items-start">
    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-[var(--color-danger-100)] sm:mx-0 sm:h-10 sm:w-10">
      {#if variant === 'danger' || variant === 'warning'}
        <BaseIcon name={AlertTriangle} class="h-6 w-6 {iconColors[variant]}" />
      {:else}
        <BaseIcon name={Info} class="h-6 w-6 {iconColors[variant]}" />
      {/if}
    </div>
    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
      <p class="text-sm text-[var(--color-text-secondary)]">
        {message}
      </p>
    </div>
  </div>
{/snippet}

{#snippet dialogFooter()}
    <button
      type="button"
      disabled={isLoading}
      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 {variantClasses[variant]} text-base font-medium text-[var(--color-text-inverse)] focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed"
      onclick={handleConfirm}
    >
      {#if isLoading}
        <BaseIcon name={Loader2} class="animate-spin -ml-1 mr-2 h-4 w-4 text-[var(--color-text-inverse)]" />
      {/if}
      {confirmText}
    </button>
    <button
      type="button"
      disabled={isLoading}
      class="mt-3 w-full inline-flex justify-center rounded-md border border-[var(--color-border-primary)] shadow-sm px-4 py-2 bg-[var(--color-background-primary)] text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed"
      onclick={onClose}
    >
      {cancelText}
    </button>
{/snippet}

{#if isOpen}
  <div class="fixed inset-0 z-[var(--z-index-overlay)] flex items-center justify-center bg-[var(--color-neutral-900)]/40 p-4">
    <div class="w-full max-w-md rounded-lg bg-[var(--color-background-primary)] p-6 shadow-lg">
      <h3 class="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
      {@render dialogContent()}
      <div class="mt-6 flex justify-end gap-3">
        {@render dialogFooter()}
      </div>
    </div>
  </div>
{/if}






