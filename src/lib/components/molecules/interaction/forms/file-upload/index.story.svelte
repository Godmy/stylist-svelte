<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import FileUpload from './FileUpload.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'accept',
      type: 'text' as ControlType,
      defaultValue: '.pdf,.doc,.docx,.xls,.xlsx,.txt',
      description: 'Accepted file types'
    },
    {
      name: 'maxSize',
      type: 'number' as ControlType,
      defaultValue: 10485760,
      description: 'Maximum file size in bytes (10MB)'
    },
    {
      name: 'multiple',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether to allow multiple files'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the upload is disabled'
    }
  ];

  let uploadText = 'или перетащить сюда';
</script>

<Story
  {controls}
  title="FileUpload Component"
  description="File upload component with drag and drop support"
  let:controlValues
>
  <div class="p-8">
    <FileUpload
      accept={controlValues.accept}
      maxSize={controlValues.maxSize}
      multiple={controlValues.multiple}
      disabled={controlValues.disabled}
      uploadText={uploadText}
    />
  </div>
</Story>