<script lang="ts">
  import FileUpload from './FileUpload.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let accept = $state('.pdf,.doc,.docx,.xls,.xlsx,.txt');
  let maxSize = $state(10 * 1024 * 1024); // 10MB
  let multiple = $state(false);
  let disabled = $state(false);
  let uploadText = $state('или перетащить сюда');

  const controls: ControlConfig[] = [
    { name: 'accept', type: 'text', defaultValue: '.pdf,.doc,.docx,.xls,.xlsx,.txt' },
    { name: 'maxSize', type: 'number', defaultValue: 10485760 }, // 10MB
    { name: 'multiple', type: 'boolean', defaultValue: false },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];
</script>

# FileUpload

<Story id="fileupload-story" title="FileUpload" component={FileUpload} {controls}>
  <div class="space-y-4 p-8">
    <FileUpload 
      {accept}
      {maxSize}
      {multiple}
      {disabled}
      {uploadText}
    />
    
    <div class="space-y-4 mt-4">
      <div>
        <label>
          <input type="checkbox" bind:checked={multiple} /> Multiple files
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" bind:checked={disabled} /> Disabled
        </label>
      </div>

      <div>
        <label>Accept (file types): <input type="text" bind:value={accept} /></label>
      </div>

      <div>
        <label>Max size (bytes): <input type="number" bind:value={maxSize} /></label>
      </div>

      <div>
        <label>Upload text: <input type="text" bind:value={uploadText} /></label>
      </div>
    </div>
  </div>
</Story>