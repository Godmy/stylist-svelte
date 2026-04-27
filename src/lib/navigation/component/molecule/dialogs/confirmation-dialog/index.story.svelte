<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import ConfirmationDialog from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'title',
      type: 'text' as TokenControllerType,
      defaultValue: 'Confirm Action',
      description: 'Title of the dialog'
    },
    {
      name: 'message',
      type: 'text' as TokenControllerType,
      defaultValue: 'Are you sure you want to perform this action?',
      description: 'Message content of the dialog'
    },
    {
      name: 'confirmText',
      type: 'text' as TokenControllerType,
      defaultValue: 'Confirm',
      description: 'Text for the confirm button'
    },
    {
      name: 'cancelText',
      type: 'text' as TokenControllerType,
      defaultValue: 'Cancel',
      description: 'Text for the cancel button'
    },
    {
      name: 'variant',
      type: 'select' as TokenControllerType,
      defaultValue: 'warning',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Visual variant of the dialog'
    },
    {
      name: 'size',
      type: 'select' as TokenControllerType,
      defaultValue: 'md',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the dialog'
    }
  ];

  let open = $state(false);

  function showDialog() {
    open = true;
  }

  function handleConfirm() {
    console.log('Confirmed!');
    open = false;
  }

  function handleCancel() {
    console.log('Cancelled!');
    open = false;
  }

  function handleClose() {
    console.log('Dialog closed!');
    open = false;
  }
</script>

<Story
  {controls}
  title="ConfirmationDialog Component"
  description="Interactive confirmation dialog with customizable options"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <button
      class="px-4 py-2 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded hover:bg-[var(--color-primary-700)]"
      onclick={showDialog}
    >
      Show Confirmation Dialog
    </button>

    <ConfirmationDialog
      open={open}
      title={controlValues.title}
      message={controlValues.message}
      confirmText={controlValues.confirmText}
      cancelText={controlValues.cancelText}
      variant={controlValues.variant}
      size={controlValues.size}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  </div>

  {/snippet}
</Story>




