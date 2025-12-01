<script lang="ts">
  import Dialog from './Dialog.svelte';

  let open: boolean = false;
  let title: string = 'Sample Dialog';
  let description: string = 'This is a sample dialog description.';
  let closable: boolean = true;
  let width: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  let variant: 'default' | 'success' | 'warning' | 'error' = 'default';

  function toggleDialog() {
    open = !open;
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Dialog Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Dialog</h2>
    <button
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      onclick={toggleDialog}
    >
      {open ? 'Close Dialog' : 'Open Dialog'}
    </button>

    <Dialog 
      {open}
      {title}
      {description}
      {closable}
      {width}
      {variant}
      onClose={() => open = false}
    >
      <div class="p-4">
        <p>This is the main content area of the dialog.</p>
        <p>You can put any content here.</p>
      </div>
    </Dialog>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="dialog-title" class="block text-sm mb-1">Title:</label>
        <input
          id="dialog-title"
          type="text"
          bind:value={title}
          class="border rounded p-1 w-40"
        />
      </div>

      <div>
        <label for="dialog-description" class="block text-sm mb-1">Description:</label>
        <input
          id="dialog-description"
          type="text"
          bind:value={description}
          class="border rounded p-1 w-60"
        />
      </div>

      <div>
        <label for="dialog-width" class="block text-sm mb-1">Width:</label>
        <select
          id="dialog-width"
          bind:value={width}
          class="border rounded p-1"
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>

      <div>
        <label for="dialog-variant" class="block text-sm mb-1">Variant:</label>
        <select
          id="dialog-variant"
          bind:value={variant}
          class="border rounded p-1"
        >
          <option value="default">Default</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="dialog-closable" class="flex items-center gap-1">
          <input id="dialog-closable" type="checkbox" bind:checked={closable} />
          Closable
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Dialog Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Success Dialog</h3>
        <button
          class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onclick={() => {
            open = true;
            variant = 'success';
            title = 'Operation Successful!';
            description = 'Your action was completed successfully.';
          }}
        >
          Open Success Dialog
        </button>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Error Dialog</h3>
        <button
          class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onclick={() => {
            open = true;
            variant = 'error';
            title = 'Error Occurred';
            description = 'There was a problem with your request.';
          }}
        >
          Open Error Dialog
        </button>
      </div>
    </div>
  </div>
</div>