<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import Modal from './index.svelte';

  type Props = {
    open: boolean;
    title: string;
    disabled: boolean;
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
      defaultValue: 'Modal Window'
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
  id="organisms-modal"
  title="Organisms / Interaction / Dialogs / Modal"
  component={Modal}
  category="Organisms/Interaction/Dialogs"
  description="A modal dialog component."
  tags={['dialog', 'modal', 'overlay']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-modal p-4">
      <button 
        class="px-4 py-2 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded mb-4" 
        onclick={handleOpen}
      >
        Open Modal
      </button>
      <Modal 
        open={isOpen}
        title={values.title} 
        onClose={handleClose} 
      />
    </div>
  {/snippet}
</Story>





