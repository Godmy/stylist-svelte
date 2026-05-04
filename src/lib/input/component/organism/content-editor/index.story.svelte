<script lang="ts">
  import type { ContentElement } from '$stylist/input/interface/slot/content-element';
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import ContentEditor from './index.svelte';

  const initialContent: ContentElement[] = [
    { id: '1', type: 'header', content: 'Welcome to Our Blog' },
    { id: '2', type: 'text', content: 'This is the beginning of our new article.' },
    { id: '3', type: 'quote', content: 'The only way to do great work is to love what you do.' }
  ];

  const controls: InterfaceControllerSettings[] = [
    { name: 'placeholder', type: 'text', defaultValue: 'Start writing your content here...' },
    { name: 'showToolbar', type: 'boolean', defaultValue: true },
    { name: 'showPreviewButton', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="organisms-content-editor"
  title="Organisms / Interaction / Content / ContentEditor"
  component={ContentEditor}
  category="Organisms/Interaction/Content"
  description="Rich content editor with multiple content types and formatting tools."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="h-[500px]">
      <ContentEditor
        {initialContent}
        placeholder={values.placeholder as string}
        showToolbar={values.showToolbar as boolean}
        showPreviewButton={values.showPreviewButton as boolean}
        onSave={(content: ContentElement[]) => {
          console.log('Content saved:', content);
        }}
        onPreview={() => {
          console.log('Preview mode toggled');
        }}
      />
    </div>
  {/snippet}
</Story>
