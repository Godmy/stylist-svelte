<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import ContentEditor from './index.svelte';

  let initialContent = [
    {
      id: '1',
      type: 'header',
      content: 'Welcome to Our Blog'
    },
    {
      id: '2',
      type: 'text',
      content: 'This is the beginning of our new article. We hope you enjoy reading it.'
    },
    {
      id: '3',
      type: 'quote',
      content: 'The only way to do great work is to love what you do. - Steve Jobs'
    }
  ];

  let placeholder: string = 'Start writing your content here...';
  let showToolbar: boolean = true;
  let showPreviewButton: boolean = true;

  type Props = {
    placeholder: string;
    showToolbar: boolean;
    showPreviewButton: boolean;
  };

  const controls: ControlConfig[] = [
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
    <div class="sb-organisms-content-editor p-4">
      <h1 class="text-lg font-semibold mb-4">ContentEditor Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive ContentEditor</h2>
        <div class="h-[500px]">
          <ContentEditor
            {initialContent}
            placeholder={values.placeholder}
            showToolbar={values.showToolbar}
            showPreviewButton={values.showPreviewButton}
            onSave={(content: any[]) => {
              console.log('Content saved:', content);
            }}
            onPreview={() => {
              console.log('Preview mode toggled');
            }}
          />
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <div>
            <label for="content-placeholder" class="block text-sm mb-1">Placeholder:</label>
            <input
              id="content-placeholder"
              type="text"
              bind:value={placeholder}
              class="border rounded p-1 w-40"
            />
          </div>

          <div class="flex items-end">
            <label for="show-toolbar" class="flex items-center gap-1">
              <input id="show-toolbar" type="checkbox" bind:checked={showToolbar} />
              Show Toolbar
            </label>
          </div>

          <div class="flex items-end">
            <label for="show-preview" class="flex items-center gap-1">
              <input id="show-preview" type="checkbox" bind:checked={showPreviewButton} />
              Show Preview Button
            </label>
          </div>
        </div>
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">ContentEditor Variations</h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Minimal Editor (No Toolbar)</h3>
            <div class="h-[300px]">
              <ContentEditor
                initialContent={[{ id: '1', type: 'text', content: '' }]}
                placeholder="Content without toolbar..."
                showToolbar={false}
                showPreviewButton={false}
                onSave={(content: any[]) => {
                  console.log('Content saved:', content);
                }}
                onPreview={() => {
                  console.log('Preview mode toggled');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>


