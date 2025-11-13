<script lang="ts">
  import { Button } from '$lib/components/atoms';
  import Icon from '../../atoms/media/Icon.svelte';
  
  type BaseComponentProps = {
    class?: string;
    'data-testid'?: string;
  };
  
  type Props = BaseComponentProps & {
    data?: any;
    error?: any;
    loading?: boolean;
    executionTime?: number;
  };

  let { 
    data,
    error,
    loading = false,
    executionTime,
    class: className = '' 
  }: Props = $props();
  
  // State
  let tab = $state<'response' | 'headers' | 'timeline'>('response');
  let formattedData = $derived(loading || error ? '' : JSON.stringify(data, null, 2));
  
  // Copy response to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedData);
      // In a real implementation, you'd show a notification
      console.log('Copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  
  // Download response as JSON
  const downloadResponse = () => {
    const blob = new Blob([formattedData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'graphql-response.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
</script>

<div class="response-viewer border border-gray-300 rounded-md dark:border-gray-600 bg-white dark:bg-gray-800 overflow-hidden {className}">
  <div class="toolbar bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 p-2 flex items-center justify-between">
    <div class="flex space-x-1">
      <button 
        class="px-3 py-1 text-xs font-medium rounded-sm {tab === 'response' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}"
        onclick={() => tab = 'response'}
      >
        Response
      </button>
      <button 
        class="px-3 py-1 text-xs font-medium rounded-sm {tab === 'headers' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}"
        onclick={() => tab = 'headers'}
      >
        Headers
      </button>
      <button 
        class="px-3 py-1 text-xs font-medium rounded-sm {tab === 'timeline' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}"
        onclick={() => tab = 'timeline'}
      >
        Timeline
      </button>
    </div>
    
    <div class="flex items-center space-x-2">
      {#if executionTime !== undefined}
        <span class="text-xs text-gray-500 dark:text-gray-400">
          {executionTime} ms
        </span>
      {/if}
      <Button variant="ghost" size="sm" onclick={copyToClipboard} title="Copy Response">
        <Icon name="copy" class="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" onclick={downloadResponse} title="Download Response">
        <Icon name="download" class="h-4 w-4" />
      </Button>
    </div>
  </div>
  
  <div class="relative h-64 overflow-auto">
    {#if loading}
      <div class="flex items-center justify-center h-full">
        <div class="flex flex-col items-center">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-500 mb-2"></div>
          <span class="text-gray-500 dark:text-gray-400">Loading...</span>
        </div>
      </div>
    {:else if error}
      <div class="p-4 text-red-500 dark:text-red-400 font-mono text-sm">
        <div class="font-semibold mb-2">Error:</div>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    {:else if data && tab === 'response'}
      <pre class="p-4 text-sm text-gray-800 dark:text-gray-200 font-mono bg-white dark:bg-gray-800 overflow-auto max-h-full">
        {formattedData}
      </pre>
    {:else if tab === 'headers'}
      <div class="p-4 text-gray-800 dark:text-gray-200">
        <div class="font-semibold mb-2">Response Headers</div>
        <div class="text-sm">
          <div>Content-Type: application/json</div>
          <div>Status: 200 OK</div>
          <div>Server: GraphQL Server</div>
        </div>
      </div>
    {:else if tab === 'timeline'}
      <div class="p-4 text-gray-800 dark:text-gray-200">
        <div class="font-semibold mb-2">Request Timeline</div>
        <div class="text-sm space-y-2">
          <div class="flex">
            <div class="w-32 text-gray-500 dark:text-gray-400">Start</div>
            <div>0 ms</div>
          </div>
          <div class="flex">
            <div class="w-32 text-gray-500 dark:text-gray-400">Request sent</div>
            <div>2 ms</div>
          </div>
          <div class="flex">
            <div class="w-32 text-gray-500 dark:text-gray-400">Response received</div>
            <div>150 ms</div>
          </div>
          <div class="flex">
            <div class="w-32 text-gray-500 dark:text-gray-400">Parse complete</div>
            <div>155 ms</div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .response-viewer {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .toolbar {
    flex-shrink: 0;
  }
  
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
</style>
