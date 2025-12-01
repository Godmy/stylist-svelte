<script lang="ts">
  import Modal from './Modal.svelte';
  import { AlertTriangle, Info, Loader2 } from 'lucide-svelte';

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
    danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    warning: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
    info: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
  };

  const iconColors = {
    danger: 'text-red-600',
    warning: 'text-yellow-600',
    info: 'text-indigo-600'
  };

  function handleConfirm() {
    onConfirm();
  }
</script>

{#snippet dialogContent()}
  <div class="sm:flex sm:items-start">
    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
      {#if variant === 'danger' || variant === 'warning'}
        <AlertTriangle class="h-6 w-6 {iconColors[variant]}" />
      {:else}
        <Info class="h-6 w-6 {iconColors[variant]}" />
      {/if}
    </div>
    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
      <p class="text-sm text-gray-500">
        {message}
      </p>
    </div>
  </div>
{/snippet}

{#snippet dialogFooter()}
    <button
      type="button"
      disabled={isLoading}
      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 {variantClasses[variant]} text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      onclick={handleConfirm}
    >
      {#if isLoading}
        <Loader2 class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
      {/if}
      {confirmText}
    </button>
    <button
      type="button"
      disabled={isLoading}
      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      onclick={onClose}
    >
      {cancelText}
    </button>
{/snippet}

<Modal {isOpen} {onClose} {title} size="sm" content={dialogContent} footerContent={dialogFooter} />
