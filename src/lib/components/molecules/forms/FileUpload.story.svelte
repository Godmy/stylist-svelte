<script lang="ts">
  import FileUpload from './FileUpload.svelte';
</script>

<div class="p-4 space-y-6">
  <h1 class="text-xl font-bold mb-4">File Upload Component</h1>
  
  <div class="space-y-4">
    <div>
      <h2 class="font-semibold mb-2">Default (Multiple Files)</h2>
      <FileUpload />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Single File Only</h2>
      <FileUpload multiple={false} />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Images Only</h2>
      <FileUpload accept=".jpg,.jpeg,.png,.gif" uploadText="Перетащите изображения сюда или нажмите для выбора" />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Documents Only</h2>
      <FileUpload accept=".pdf,.doc,.docx" uploadText="Перетащите документы сюда или нажмите для выбора" />
    </div>
    
    <div>
      <h2 class="font-semibold mb-2">Disabled</h2>
      <FileUpload disabled={true} />
    </div>
  </div>
</div>