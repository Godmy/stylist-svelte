<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import PageBuilder from './index.svelte';

  type Props = {
    title: string;
    showToolbar: boolean;
    editable: boolean;
  };

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Page Builder' },
    { name: 'showToolbar', type: 'boolean', defaultValue: true },
    { name: 'editable', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="organisms-page-builder"
  title="Organisms / Interaction / Controls / Page Builder"
  component={PageBuilder}
  category="Organisms/Interaction/Controls"
  description="Visual page builder with drag-and-drop ordering."
  controls={controls}
>
  {#snippet children(values: any)}
    {@const typedProps = values as Props}
    <div class="sb-organisms-page-builder p-6">
      <h2 class="text-xl font-semibold mb-6">{typedProps.title}</h2>
      <div class="max-w-4xl mx-auto border rounded-lg">
        <PageBuilder showToolbar={typedProps.showToolbar} editable={typedProps.editable} />
      </div>
    </div>
  {/snippet}
</Story>





