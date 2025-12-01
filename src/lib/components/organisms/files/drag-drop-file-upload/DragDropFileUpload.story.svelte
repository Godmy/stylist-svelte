<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import DragDropFileUpload from './DragDropFileUpload.svelte';

  type Props = {
    accept: string;
    multiple: boolean;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'accept',
      type: 'text',
      defaultValue: '*'
    },
    {
      name: 'multiple',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="molecules-drag-drop-file-upload"
  title="DragDropFileUpload"
  component={DragDropFileUpload}
  category="Molecules"
  description="A component for drag and drop file uploads."
  tags={['forms', 'upload', 'file']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">DragDropFileUpload Story</h2>
      <DragDropFileUpload
        accept={props.accept}
        multiple={props.multiple}
        disabled={props.disabled}
      />
    </div>
  {/snippet}
</Story>