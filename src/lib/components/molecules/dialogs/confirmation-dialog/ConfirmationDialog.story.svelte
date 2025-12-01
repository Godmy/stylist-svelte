<script lang="ts">
  import ConfirmationDialog from './ConfirmationDialog.svelte';

  let open: boolean = false;
  let title: string = 'Confirm Action';
  let message: string = 'Are you sure you want to perform this action?';
  let confirmText: string = 'Confirm';
  let cancelText: string = 'Cancel';
  let variant: 'default' | 'success' | 'warning' | 'error' | 'info' = 'warning';
  let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  function showDialog() {
    open = true;
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ConfirmationDialog Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ConfirmationDialog</h2>
    <button
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      onclick={showDialog}
    >
      Show Confirmation Dialog
    </button>

    <ConfirmationDialog 
      {open}
      {title}
      {message}
      {confirmText}
      {cancelText}
      {variant}
      {size}
      onConfirm={() => {
        console.log('Confirmed!');
        open = false;
      }}
      onCancel={() => {
        console.log('Cancelled!');
        open = false;
      }}
      onClose={() => {
        console.log('Dialog closed!');
        open = false;
      }}
    />

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="confirmation-title" class="block text-sm mb-1">Title:</label>
        <input
          id="confirmation-title"
          type="text"
          bind:value={title}
          class="border rounded p-1 w-40"
        />
      </div>

      <div>
        <label for="confirmation-message" class="block text-sm mb-1">Message:</label>
        <input
          id="confirmation-message"
          type="text"
          bind:value={message}
          class="border rounded p-1 w-60"
        />
      </div>

      <div>
        <label for="confirmation-confirm-text" class="block text-sm mb-1">Confirm Text:</label>
        <input
          id="confirmation-confirm-text"
          type="text"
          bind:value={confirmText}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="confirmation-cancel-text" class="block text-sm mb-1">Cancel Text:</label>
        <input
          id="confirmation-cancel-text"
          type="text"
          bind:value={cancelText}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="confirmation-variant" class="block text-sm mb-1">Variant:</label>
        <select
          id="confirmation-variant"
          bind:value={variant}
          class="border rounded p-1"
        >
          <option value="default">Default</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
          <option value="info">Info</option>
        </select>
      </div>

      <div>
        <label for="confirmation-size" class="block text-sm mb-1">Size:</label>
        <select
          id="confirmation-size"
          bind:value={size}
          class="border rounded p-1"
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">ConfirmationDialog Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Delete Confirmation</h3>
        <button
          class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onclick={() => {
            title = 'Delete Item';
            message = 'Are you sure you want to delete this item? This action cannot be undone.';
            confirmText = 'Delete';
            cancelText = 'Keep';
            variant = 'error';
            open = true;
          }}
        >
          Show Delete Confirmation
        </button>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Success Confirmation</h3>
        <button
          class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          onclick={() => {
            title = 'Enable Feature';
            message = 'This will enable the new feature for all users. Are you sure you want to proceed?';
            confirmText = 'Enable';
            cancelText = 'Cancel';
            variant = 'success';
            open = true;
          }}
        >
          Show Enable Confirmation
        </button>
      </div>
    </div>
  </div>
</div>