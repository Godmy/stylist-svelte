<script lang="ts">
  import AccordionHeader from './AccordionHeader.svelte';

  let isOpen: boolean = false;
  let isDisabled: boolean = false;
  let customClass: string = '';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">AccordionHeader Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Controlled Accordion Header</h2>
    <div class="flex items-center gap-4 mb-4">
      <AccordionHeader
        value="test-value"
        open={isOpen}
        disabled={isDisabled}
        class={customClass}
      >
        {#snippet children()}
          Click me to toggle accordion
        {/snippet}
      </AccordionHeader>

      <div class="flex gap-2">
        <button
          class={`px-3 py-1 rounded ${isOpen ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onclick={() => isOpen = !isOpen}>
          {isOpen ? 'Opened' : 'Closed'}
        </button>
        <button
          class={`px-3 py-1 rounded ${isDisabled ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          onclick={() => isDisabled = !isDisabled}>
          {isDisabled ? 'Disabled' : 'Enabled'}
        </button>
      </div>
    </div>

    <div class="space-y-3">
      <div class="flex items-center gap-2">
        <label class="text-sm" for="customClassInput">Custom Class:</label>
        <input
          id="customClassInput"
          type="text"
          class="border p-1 rounded text-sm"
          bind:value={customClass}
          placeholder="Add custom CSS class"
        />
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">State Variations</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-3 border rounded">
        <h3 class="font-medium mb-2">Open State</h3>
        <AccordionHeader
          value="open-test"
          open={true}
          disabled={false}
        >
          {#snippet children()}
            Open Accordion Header
          {/snippet}
        </AccordionHeader>
      </div>
      <div class="p-3 border rounded">
        <h3 class="font-medium mb-2">Closed State</h3>
        <AccordionHeader
          value="closed-test"
          open={false}
          disabled={false}
        >
          {#snippet children()}
            Closed Accordion Header
          {/snippet}
        </AccordionHeader>
      </div>
      <div class="p-3 border rounded">
        <h3 class="font-medium mb-2">Disabled (Open)</h3>
        <AccordionHeader
          value="disabled-open-test"
          open={true}
          disabled={true}
        >
          {#snippet children()}
            Disabled Open Accordion Header
          {/snippet}
        </AccordionHeader>
      </div>
      <div class="p-3 border rounded">
        <h3 class="font-medium mb-2">Disabled (Closed)</h3>
        <AccordionHeader
          value="disabled-closed-test"
          open={false}
          disabled={true}
        >
          {#snippet children()}
            Disabled Closed Accordion Header
          {/snippet}
        </AccordionHeader>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">With Custom Content</h2>
    <div class="space-y-3">
      <AccordionHeader
        value="custom-content-1"
        open={false}
        disabled={false}
      >
        {#snippet children()}
          <div class="flex items-center gap-2">
            <span class="font-bold">Custom Content Header</span>
            <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Label</span>
          </div>
        {/snippet}
      </AccordionHeader>

      <AccordionHeader
        value="custom-content-2"
        open={true}
        disabled={false}
      >
        {#snippet children()}
          <div class="flex items-center justify-between w-full">
            <span>Detailed Header with Status</span>
            <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
          </div>
        {/snippet}
      </AccordionHeader>
    </div>
  </div>
</div>
