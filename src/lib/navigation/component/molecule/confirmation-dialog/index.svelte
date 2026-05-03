<script lang="ts">
import { Button } from '$stylist/control';
import { createConfirmationDialogState } from '$stylist/navigation/function/state/confirmation-dialog';
import type { SlotConfirmationDialog as ConfirmationDialogProps } from '$stylist/navigation/interface/slot/confirmation-dialog';

  let {
    open = false,
    title = 'Confirm Action',
    message = 'Are you sure you want to perform this action?',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    onClose = () => {},
    variant = 'warning',
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    size = 'md',
    ...restProps
  }: ConfirmationDialogProps = $props();

  const state = createConfirmationDialogState({
    open,
    title,
    message,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
    onClose,
    variant,
    class: hostClass,
    contentClass,
    headerClass,
    bodyClass,
    footerClass,
    size
  });
</script>

{#if open}
  <div class={state.overlayClass} {...restProps}>
    <div class={state.contentClass}>
      <h3 class={state.headerClass}>{title}</h3>
      <p class={state.bodyClass}>{message}</p>
      <div class={state.footerClass}>
        <Button variant="secondary" onclick={state.handleCancel}>
          {cancelText}
        </Button>
        <Button variant="primary" onclick={state.handleConfirm}>
          {confirmText}
        </Button>
      </div>
    </div>
  </div>
{/if}




