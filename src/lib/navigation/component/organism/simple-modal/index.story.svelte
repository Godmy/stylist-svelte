<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import SimpleModal from './index.svelte';

  type Props = {
    open: boolean;
    title: string;
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
      defaultValue: 'Notice'
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
  id="organisms-simple-modal"
  title="Organisms / Interaction / Dialogs / Simple Modal"
  component={SimpleModal}
  category="Organisms/Interaction/Dialogs"
  description="A simple modal dialog component."
  tags={['dialog', 'modal', 'simple']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-simple-modal p-4">
      <button 
        class="px-4 py-2 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded mb-4" 
        onclick={handleOpen}
      >
        Open Simple Modal
      </button>
      <SimpleModal 
        open={isOpen}
        title={values.title} 
        onClose={handleClose} 
      />
    </div>
  {/snippet}
</Story>





