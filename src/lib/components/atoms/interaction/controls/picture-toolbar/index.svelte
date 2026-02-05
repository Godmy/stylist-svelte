<script lang="ts">
  import type { PictureToolbarProps } from '$stylist/design-system/attributes';
  import { createPictureToolbarState } from '../state.svelte';

  let props: PictureToolbarProps = $props();

  const toolbarState = createPictureToolbarState(props);

  let localActiveTool = $state(toolbarState.activeTool);

  $effect(() => {
    localActiveTool = toolbarState.activeTool;
  });
</script>

<div class={toolbarState.classes}>
  {#each toolbarState.tools as tool}
    <button
      class={toolbarState.getButtonClasses(localActiveTool === tool.id)}
      onclick={() => {
        localActiveTool = tool.id;
        props.onToolSelect?.(tool.id);
      }}
      title={tool.label}
    >
      {#if tool.icon}
        <img src={tool.icon} alt={tool.label} class={toolbarState.iconClasses} />
      {:else}
        {tool.label.charAt(0).toUpperCase()}
      {/if}
    </button>
  {/each}
</div>
