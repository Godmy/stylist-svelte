<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import Dialog from './index.svelte';

  type Props = {
    open: boolean;
    title: string;
    description: string;
  };

  const controls: InterfaceControllerSettings[] = [
    {
      name: 'open',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Confirm action'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Are you sure you want to continue?'
    }
  ];

  let isOpen = $state(false);

  function handleClose() {
    isOpen = false;
  }

  function handleOpen() {
    isOpen = true;
  }
</script>

<Story
  id="organisms-dialog"
  title="Organisms / Interaction / Dialogs / Dialog"
  component={Dialog}
  category="Organisms/Interaction/Dialogs"
  description="A dialog component for user confirmations."
  tags={['dialog', 'confirmation', 'action']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-dialog p-4">
      <button 
        class="px-4 py-2 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded mb-4" 
        onclick={handleOpen}
      >
        Open Dialog
      </button>
      <Dialog 
        open={isOpen}
        title={values.title} 
        description={values.description}
        onClose={handleClose} 
      />
    </div>
  {/snippet}
</Story>





