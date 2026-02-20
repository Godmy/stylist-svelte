<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import DragDropFileUpload from './index.svelte';

  type Props = {
    accept: string;
    multiple: boolean;
    disabled: boolean;
    maxSize: number;
    preview: boolean;
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
    },
    {
      name: 'maxSize',
      type: 'number',
      defaultValue: 10485760 // 10MB in bytes
    },
    {
      name: 'preview',
      type: 'boolean',
      defaultValue: false
    }
  ];

  function handleFileSelect(files: FileList) {
    console.log('Files selected:', Array.from(files).map(f => f.name));
  }

  function handleFileUpload(file: File) {
    console.log('File uploaded:', file.name);
  }
</script>

<Story
  id="organisms-drag-drop-file-upload"
  title="Organisms / Interaction / Files / DragDropFileUpload"
  component={DragDropFileUpload}
  category="Organisms/Interaction/Files"
  description="A component for drag and drop file uploads."
  tags={['forms', 'upload', 'file']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="sb-organisms-drag-drop-file-upload p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">DragDropFileUpload Story</h2>
      <DragDropFileUpload
        accept={props.accept}
        multiple={props.multiple}
        disabled={props.disabled}
        maxSize={props.maxSize}
        preview={props.preview}
        onFileSelect={handleFileSelect}
        onFileUpload={handleFileUpload}
      />
    </div>
  {/snippet}
</Story>


