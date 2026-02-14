<script lang="ts">
  import DialogConfirm from './index.svelte';

  let isOpen: boolean = false;
  let title: string = 'Delete Item';
  let message: string = 'Are you sure you want to delete this item? This action cannot be undone.';
  let confirmText: string = 'Delete';
  let cancelText: string = 'Cancel';
  let variant: 'danger' | 'warning' | 'info' = 'danger';
  let isLoading: boolean = false;

  function handleOpen() {
    isOpen = true;
  }

  function handleClose() {
    console.log('Dialog closed');
    isOpen = false;
  }

  function handleConfirm() {
    console.log('Confirmed action');
    isLoading = true;
    // Simulate async operation
    setTimeout(() => {
      isLoading = false;
      isOpen = false;
    }, 1500);
  }

  const variants = [
    { value: 'danger', label: 'Danger', icon: 'AlertTriangle' },
    { value: 'warning', label: 'Warning', icon: 'AlertTriangle' },
    { value: 'info', label: 'Info', icon: 'Info' }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">DialogConfirm Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive DialogConfirm</h2>
    <div class="flex flex-col gap-4">
      <button 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onclick={handleOpen}
      >
        Open Confirm Dialog
      </button>
      
      <DialogConfirm
        {isOpen}
        {title}
        {message}
        {confirmText}
        {cancelText}
        {variant}
        {isLoading}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="confirm-title" class="block text-sm mb-1">Title:</label>
        <input
          id="confirm-title"
          type="text"
          bind:value={title}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="confirm-message" class="block text-sm mb-1">Message:</label>
        <input
          id="confirm-message"
          type="text"
          bind:value={message}
          class="border rounded p-1 w-64"
        />
      </div>

      <div>
        <label for="confirm-text" class="block text-sm mb-1">Confirm Text:</label>
        <input
          id="confirm-text"
          type="text"
          bind:value={confirmText}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="cancel-text" class="block text-sm mb-1">Cancel Text:</label>
        <input
          id="cancel-text"
          type="text"
          bind:value={cancelText}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="confirm-variant" class="block text-sm mb-1">Variant:</label>
        <select id="confirm-variant" bind:value={variant} class="border rounded p-1">
          <option value="danger">Danger</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="confirm-is-loading" class="flex items-center gap-1">
          <input id="confirm-is-loading" type="checkbox" bind:checked={isLoading} />
          Is Loading
        </label>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Danger Variant</h2>
      <button 
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onclick={() => { isOpen = true; variant = 'danger'; }}
      >
        Show Danger Dialog
      </button>
      <DialogConfirm
        isOpen={false}
        title="Danger Action"
        message="This action is potentially dangerous. Are you sure?"
        variant="danger"
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Warning Variant</h2>
      <button 
        class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onclick={() => { isOpen = true; variant = 'warning'; }}
      >
        Show Warning Dialog
      </button>
      <DialogConfirm
        isOpen={false}
        title="Warning"
        message="This action has potential consequences. Proceed with caution."
        variant="warning"
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Info Variant</h2>
      <button 
        class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        onclick={() => { isOpen = true; variant = 'info'; }}
      >
        Show Info Dialog
      </button>
      <DialogConfirm
        isOpen={false}
        title="Information"
        message="This is an informational action that you might want to confirm."
        variant="info"
        onConfirm={handleConfirm}
        onClose={handleClose}
      />
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default DialogConfirm</h2>
    <button 
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onclick={() => { isOpen = true; variant = 'danger'; }}
    >
      Show Default Dialog
    </button>
  </div>
</div>