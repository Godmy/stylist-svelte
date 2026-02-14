<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title = '',
    content,
    trigger,
    open = false,
    position = 'bottom', // 'top', 'bottom', 'left', 'right'
    class: className = ''
  } = $props<{
    title?: string;
    content: Snippet;
    trigger: Snippet;
    open?: boolean;
    position?: 'top' | 'bottom' | 'left' | 'right';
    class?: string;
  }>();

  let isVisible = $state(open);
  let triggerElement: HTMLElement | null = $state(null);
  let popoverElement: HTMLElement | null = $state(null);

  $effect(() => {
    isVisible = open;
  });
</script>

<div class="relative inline-block">
  <div bind:this={triggerElement}>
    {@render trigger()}
  </div>
  
  {#if isVisible}
    <div 
      bind:this={popoverElement}
      class={`absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[200px] ${
        position === 'top' ? 'bottom-full left-0 mb-2' :
        position === 'bottom' ? 'top-full left-0 mt-2' :
        position === 'left' ? 'right-full top-0 mr-2' :
        'left-full top-0 ml-2'
      } ${className}`}
    >
      {#if title}
        <h3 class="font-semibold mb-2">{title}</h3>
      {/if}
      <div>
        {@render content()}
      </div>
    </div>
  {/if}
</div>
