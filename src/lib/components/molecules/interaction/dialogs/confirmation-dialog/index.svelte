<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
import { Button } from '$stylist/components/atoms';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    open?: boolean;
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
    variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
    class?: string;
    contentClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
  };

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
  }: Props = $props();

  function handleConfirm() {
    onConfirm?.();
    onClose?.();
  }

  function handleCancel() {
    onCancel?.();
    onClose?.();
  }

  function handleClose() {
    onClose?.();
  }
</script>

{#if open}
  <div class={`fixed inset-0 z-40 flex items-center justify-center bg-black/40 ${hostClass}`} {...restProps}>
    <div class={`w-full max-w-lg rounded-lg bg-white p-6 shadow-lg ${contentClass}`}>
      <h3 class={`text-lg font-semibold ${headerClass}`}>{title}</h3>
      <p class={`mt-2 ${bodyClass}`}>{message}</p>
      <div class={`mt-6 flex justify-end space-x-3 ${footerClass}`}>
        <Button variant="secondary" onclick={handleCancel}>
          {cancelText}
        </Button>
        <Button variant="primary" onclick={handleConfirm}>
          {confirmText}
        </Button>
      </div>
    </div>
  </div>
{/if}
