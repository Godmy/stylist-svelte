<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import Modal from '$lib/components/organisms/dialogs/modal/Modal.svelte';
  import { Button } from '$lib/components/atoms';

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

<Modal
  isOpen={open}
  {onClose}
  {title}
  size={size}
>
  {#snippet content()}
        <p class={`mt-2 ${bodyClass}`}>
          {message}
        </p>
  {/snippet}

  {#snippet footerContent()}
    <div class={`flex justify-end space-x-3 ${footerClass}`}>
      <Button
        variant="secondary"
        onclick={handleCancel}
      >
        {cancelText}
      </Button>
      <Button
        variant="primary"
        onclick={handleConfirm}
      >
        {confirmText}
      </Button>
    </div>
  {/snippet}
</Modal>
