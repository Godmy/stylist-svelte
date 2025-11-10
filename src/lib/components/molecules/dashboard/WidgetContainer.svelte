<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { GripVertical, MoreHorizontal, Minimize2, Maximize2 } from 'lucide-svelte';

  type Props = {
    title?: string;
    subtitle?: string;
    content: Snippet;
    actions?: Snippet;
    collapsible?: boolean;
    initiallyCollapsed?: boolean;
    resizable?: boolean;
    draggable?: boolean;
    maximizable?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    headerClass?: string;
    bodyClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let props: Props = $props();
  
  let {
    title = props.title,
    subtitle = props.subtitle,
    content = props.content,
    actions = props.actions,
    collapsible = props.collapsible ?? true,
    initiallyCollapsed = props.initiallyCollapsed ?? false,
    resizable = props.resizable ?? true,
    draggable = props.draggable ?? true,
    maximizable = props.maximizable ?? true,
    size = props.size ?? 'md',
    class: className = props.class ?? '',
    headerClass = props.headerClass ?? '',
    bodyClass = props.bodyClass ?? '',
    ...restProps
  } = props;

  let isCollapsed = $state(initiallyCollapsed);
  let isMaximized = $state(false);
  let widgetRef: HTMLDivElement;

  function toggleCollapse() {
    isCollapsed = !isCollapsed;
  }

  function toggleMaximize() {
    isMaximized = !isMaximized;
  }
</script>

<div 
  bind:this={widgetRef}
  class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${
    isMaximized ? 'fixed inset-0 z-50' : ''
  } ${className}`} 
  class:collapsed={isCollapsed}
  {...restProps}
>
  <div class={`flex items-center justify-between p-4 border-b ${headerClass}`}>
    {#if draggable}
      <div class="cursor-move text-gray-400">
        <GripVertical class="h-5 w-5" />
      </div>
    {/if}
    
    <div class="flex-1 ml-2">
      {#if title}
        <h3 class="text-lg font-medium text-gray-900">{title}</h3>
      {/if}
      {#if subtitle}
        <p class="text-sm text-gray-500">{subtitle}</p>
      {/if}
    </div>
    
    <div class="flex items-center space-x-2">
      {#if actions}
        {@render actions()}
      {/if}
      
      {#if maximizable}
        <button
          type="button"
          class="text-gray-400 hover:text-gray-600"
          onclick={toggleMaximize}
          aria-label={isMaximized ? 'Minimize' : 'Maximize'}
        >
          {#if isMaximized}
            <Minimize2 class="h-5 w-5" />
          {:else}
            <Maximize2 class="h-5 w-5" />
          {/if}
        </button>
      {/if}
      
      {#if collapsible}
        <button
          type="button"
          class="text-gray-400 hover:text-gray-600"
          onclick={toggleCollapse}
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {#if isCollapsed}
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          {:else}
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          {/if}
        </button>
      {/if}
      
      <button
        type="button"
        class="text-gray-400 hover:text-gray-600"
        aria-label="More options"
      >
        <MoreHorizontal class="h-5 w-5" />
      </button>
    </div>
  </div>

  {#if !isCollapsed}
    <div class={`p-4 ${bodyClass}`}>
      {@render content()}
    </div>
  {/if}
</div>