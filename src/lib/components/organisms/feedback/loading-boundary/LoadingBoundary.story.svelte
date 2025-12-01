<script lang="ts">
  import LoadingBoundary from './LoadingBoundary.svelte';

  let loading: boolean = false;
  let error: boolean = false;
  let errorMessage: string = 'An error occurred while loading the data.';
  let loadingMessage: string = 'Loading data...';
  let timeout: number = 10000; // 10 seconds for demo
  let showRetry: boolean = true;
  let showTimeoutMessage: boolean = true;
  let timeoutMessage: string = 'The request is taking longer than expected. Please wait...';
  let title: string = 'Data Loading';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">LoadingBoundary Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive LoadingBoundary</h2>
    <div class="max-w-md mx-auto">
      <LoadingBoundary
        {loading}
        {error}
        {errorMessage}
        {loadingMessage}
        {timeout}
        {showRetry}
        {showTimeoutMessage}
        {timeoutMessage}
        {title}
        retryFunction={() => {
          console.log('Retry function called');
          loading = true;
          error = false;
          // Simulate loading completion after 2 seconds
          setTimeout(() => {
            loading = false;
          }, 2000);
        }}
      >
        {#snippet children()}
          <div class="p-8 text-center bg-green-50 rounded-lg border border-green-200">
            <p class="text-green-800 font-medium">Content loaded successfully!</p>
            <p class="text-green-600 mt-2">This content is displayed when loading is complete.</p>
          </div>
        {/snippet}
      </LoadingBoundary>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="loading-state" class="flex items-center gap-1">
          <input id="loading-state" type="checkbox" bind:checked={loading} />
          Loading State
        </label>
      </div>

      <div class="flex items-end">
        <label for="error-state" class="flex items-center gap-1">
          <input id="error-state" type="checkbox" bind:checked={error} />
          Error State
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-retry" class="flex items-center gap-1">
          <input id="show-retry" type="checkbox" bind:checked={showRetry} />
          Show Retry
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-timeout" class="flex items-center gap-1">
          <input id="show-timeout" type="checkbox" bind:checked={showTimeoutMessage} />
          Show Timeout
        </label>
      </div>

      <div>
        <label for="timeout-value" class="block text-sm mb-1">Timeout (ms):</label>
        <input
          id="timeout-value"
          type="number"
          bind:value={timeout}
          class="border rounded p-1 w-20"
          min="1000"
          max="60000"
        />
      </div>
    </div>

    <div class="mt-2 flex flex-wrap gap-2">
      <button
        class="px-3 py-1 bg-blue-600 text-white rounded text-sm"
        onclick={() => {
          loading = true;
          error = false;
          // Simulate loading completion after 3 seconds
          setTimeout(() => {
            loading = false;
          }, 3000);
        }}
      >
        Simulate Loading
      </button>
      <button
        class="px-3 py-1 bg-red-600 text-white rounded text-sm"
        onclick={() => {
          error = true;
          loading = false;
        }}
      >
        Simulate Error
      </button>
      <button
        class="px-3 py-1 bg-gray-600 text-white rounded text-sm"
        onclick={() => {
          error = false;
          loading = false;
        }}
      >
        Reset to Content
      </button>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">LoadingBoundary Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Loading Only</h3>
        <div class="max-w-md mx-auto">
          <LoadingBoundary
            loading={true}
            loadingMessage="Fetching your data..."
            title="Please Wait"
            showRetry={true}
            showTimeoutMessage={true}
            timeout={30000}
            retryFunction={() => {}}
          >
            {#snippet children()}
              <div></div>
            {/snippet}
          </LoadingBoundary>
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Error State</h3>
        <div class="max-w-md mx-auto">
          <LoadingBoundary
            error={true}
            errorMessage="Could not connect to the server. Please check your connection."
            showRetry={true}
            showTimeoutMessage={true}
            timeout={30000}
            loadingMessage="Loading..."
            title="Loading Boundary"
            retryFunction={() => console.log('Retry from error state')}
          >
            {#snippet children()}
              <div></div>
            {/snippet}
          </LoadingBoundary>
        </div>
      </div>
    </div>
  </div>
</div>