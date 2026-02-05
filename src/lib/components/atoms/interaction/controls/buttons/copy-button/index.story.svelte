<script lang="ts">
  import CopyButton from './index.svelte';

  let text = 'npm install stylist-svelte';
  let label = 'Copy command';
  let successMessage = 'Copied to clipboard';
  let showIcon = true;
  let status: string | null = null;
  let statusType: 'success' | 'error' = 'success';

  function handleSuccess(message: string) {
    status = message;
    statusType = 'success';
  }

  function handleError(error: Error) {
    status = error.message;
    statusType = 'error';
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Copy Button</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Copy Button</h2>
    <div class="flex flex-col gap-4">
      <pre class="bg-gray-900 text-gray-100 text-sm rounded-lg p-4 overflow-auto">
{text}
      </pre>

      <CopyButton
        text={text}
        label={label}
        successMessage={successMessage}
        showIcon={showIcon}
        onSuccess={handleSuccess}
        onError={handleError}
      />

      {#if status}
        <div class={`text-sm font-medium ${statusType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </div>
      {/if}
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="w-full md:w-auto md:min-w-[260px]">
        <label for="copy-text" class="block text-sm mb-1">Text to copy:</label>
        <textarea
          id="copy-text"
          bind:value={text}
          rows="3"
          class="w-full border rounded p-2"
        ></textarea>
      </div>

      <div class="flex flex-col gap-2">
        <div>
          <label for="copy-label" class="block text-sm mb-1">Label:</label>
          <input id="copy-label" bind:value={label} class="border rounded p-1 w-full md:w-56" />
        </div>
        <div>
          <label for="copy-success" class="block text-sm mb-1">Success message:</label>
          <input
            id="copy-success"
            bind:value={successMessage}
            class="border rounded p-1 w-full md:w-56"
          />
        </div>
        <label for="copy-show-icon" class="flex items-center gap-1 text-sm">
          <input id="copy-show-icon" type="checkbox" bind:checked={showIcon} />
          Show icon
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Quick Examples</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">
        <CopyButton
          text="https://example.com"
          label="Copy link"
          successMessage="Link copied"
          showIcon={showIcon}
          onSuccess={handleSuccess}
          onError={handleError}
        />
        <span class="text-xs text-gray-500">Copy a URL</span>
      </div>
      <div class="flex flex-col gap-2">
        <CopyButton
          text="export const token = 'secret';"
          label="Copy snippet"
          successMessage="Snippet copied"
          showIcon={showIcon}
          onSuccess={handleSuccess}
          onError={handleError}
        />
        <span class="text-xs text-gray-500">Copy a code snippet</span>
      </div>
    </div>
  </div>
</div>
