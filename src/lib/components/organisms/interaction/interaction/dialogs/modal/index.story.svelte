<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import Modal from './index.svelte';

  type Props = {
    open: boolean;
    title: string;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
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
        class="px-4 py-2 bg-blue-600 text-white rounded mb-4" 
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

