<script lang="ts">
  let {
    tools = [],
    onToolSelect = (tool: string) => {},
    activeTool = '',
    class: className = ''
  } = $props<{
    tools: Array<{ id: string; label: string; icon?: string }>;
    onToolSelect?: (tool: string) => void;
    activeTool?: string;
    class?: string;
  }>();

  let localActiveTool = $state(activeTool);

  $effect(() => {
    localActiveTool = activeTool;
  });
</script>

<div class={`flex items-center bg-gray-100 p-2 rounded-lg ${className}`}>
  {#each tools as tool}
    <button
      class={`mx-1 p-2 rounded-md ${
        localActiveTool === tool.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
      }`}
      onclick={() => {
        localActiveTool = tool.id;
        onToolSelect(tool.id);
      }}
      title={tool.label}
    >
      {#if tool.icon}
        <img src={tool.icon} alt={tool.label} class="w-5 h-5" />
      {:else}
        {tool.label.charAt(0).toUpperCase()}
      {/if}
    </button>
  {/each}
</div>