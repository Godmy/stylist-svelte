<script lang="ts">
  import Modal from './Modal.svelte';
  import type { Snippet } from 'svelte';
  import { createEventDispatcher } from 'svelte';

  let isOpen: boolean = false;
  let title: string = 'Modal Title';
  let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  let closeOnEscape: boolean = true;
  let closeOnClickOutside: boolean = true;

  function handleOpen() {
    isOpen = true;
  }

  function handleClose() {
    console.log('Modal closed');
    isOpen = false;
  }

  const sizes = [
    { value: 'sm', label: 'Small (sm:max-w-sm)' },
    { value: 'md', label: 'Medium (sm:max-w-lg)' },
    { value: 'lg', label: 'Large (sm:max-w-2xl)' },
    { value: 'xl', label: 'Extra Large (sm:max-w-4xl)' }
  ];
</script>

{#snippet customContent()}
  <div>
    <p class="mb-4">This is custom content inside the modal.</p>
    <p>You can put any content here - forms, lists, images, etc.</p>
    <div class="mt-4 p-3 bg-gray-100 rounded">
      <p>Even nested elements with styling.</p>
    </div>
  </div>
{/snippet}

{#snippet customFooter()}
  <div>
    <button
      type="button"
      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
      on:click={handleClose}
    >
      Custom Action
    </button>
    <button
      type="button"
      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
      on:click={handleClose}
    >
      Cancel
    </button>
  </div>
{/snippet}

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Modal Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Modal</h2>
    <div class="flex flex-col gap-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={handleOpen}
      >
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        title={title}
        size={size}
        closeOnEscape={closeOnEscape}
        closeOnClickOutside={closeOnClickOutside}
        content={customContent}
        onClose={handleClose}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="modal-title" class="block text-sm mb-1">Title:</label>
        <input
          id="modal-title"
          type="text"
          bind:value={title}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="modal-size" class="block text-sm mb-1">Size:</label>
        <select id="modal-size" bind:value={size} class="border rounded p-1">
          {#each sizes as s}
            <option value={s.value}>{s.label}</option>
          {/each}
        </select>
      </div>

      <div class="flex items-end">
        <label for="modal-escape" class="flex items-center gap-1">
          <input id="modal-escape" type="checkbox" bind:checked={closeOnEscape} />
          Close on Escape
        </label>
      </div>

      <div class="flex items-end">
        <label for="modal-outside" class="flex items-center gap-1">
          <input id="modal-outside" type="checkbox" bind:checked={closeOnClickOutside} />
          Close on Outside Click
        </label>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Small Modal</h2>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={() => { isOpen = true; size = 'sm'; }}
      >
        Open Small Modal
      </button>
      <Modal
        isOpen={false}
        title="Small Modal"
        size="sm"
        onClose={handleClose}
        content={customContent}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Large Modal</h2>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={() => { isOpen = true; size = 'lg'; }}
      >
        Open Large Modal
      </button>
      <Modal
        isOpen={false}
        title="Large Modal"
        size="lg"
        onClose={handleClose}
        content={customContent}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Modal with Custom Footer</h2>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={() => { isOpen = true; size = 'md'; }}
      >
        Open Modal with Footer
      </button>
      <Modal
        isOpen={false}
        title="Modal with Custom Footer"
        size="md"
        onClose={handleClose}
        content={customContent}
        footerContent={customFooter}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Extra Large Modal</h2>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={() => { isOpen = true; size = 'xl'; }}
      >
        Open XL Modal
      </button>
      <Modal
        isOpen={false}
        title="Extra Large Modal"
        size="xl"
        onClose={handleClose}
        content={customContent}
      />
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default Modal</h2>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      on:click={() => { isOpen = true; size = 'md'; }}
    >
      Open Default Modal
    </button>
    <Modal
      isOpen={false}
      title="Default Modal"
      size="md"
      onClose={handleClose}
    />
  </div>
</div>