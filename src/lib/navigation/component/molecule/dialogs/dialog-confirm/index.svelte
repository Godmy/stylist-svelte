<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { DialogConfirmProps } from '$stylist/navigation/type/struct/dialog-confirm-props';
  import { createDialogConfirmState } from '$stylist/navigation/function/state/dialog-confirm';

  let props: DialogConfirmProps = $props();
  const state = createDialogConfirmState(props);
</script>

{#snippet dialogContent()}
  <div class="sm:flex sm:items-start">
    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-[var(--color-neutral-100)] sm:mx-0 sm:h-10 sm:w-10">
      <BaseIcon name={state.iconName} class={`h-6 w-6 ${state.iconColor}`} />
    </div>
    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
      <p class="text-sm text-[var(--color-text-secondary)]">
        {props.message}
      </p>
    </div>
  </div>
{/snippet}

{#snippet dialogFooter()}
    <button
      type="button"
      disabled={state.isLoading}
      class={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ${state.confirmButtonClasses} text-base font-medium text-[var(--color-text-inverse)] focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed`}
      onclick={state.handleConfirm}
    >
      {#if state.isLoading}
        <BaseIcon name="loader-2" class="animate-spin -ml-1 mr-2 h-4 w-4 text-[var(--color-text-inverse)]" />
      {/if}
      {props.confirmText ?? 'Confirm'}
    </button>
    <button
      type="button"
      disabled={state.isLoading}
      class="mt-3 w-full inline-flex justify-center rounded-md border border-[var(--color-border-primary)] shadow-sm px-4 py-2 bg-[var(--color-background-primary)] text-base font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed"
      onclick={props.onClose}
    >
      {props.cancelText ?? 'Cancel'}
    </button>
{/snippet}

{#if props.isOpen}
  <div class="fixed inset-0 z-[var(--z-index-overlay)] flex items-center justify-center bg-[var(--color-neutral-900)]/40 p-4">
    <div class="w-full max-w-md rounded-lg bg-[var(--color-background-primary)] p-6 shadow-lg">
      <h3 class="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">{props.title}</h3>
      {@render dialogContent()}
      <div class="mt-6 flex justify-end gap-3">
        {@render dialogFooter()}
      </div>
    </div>
  </div>
{/if}
