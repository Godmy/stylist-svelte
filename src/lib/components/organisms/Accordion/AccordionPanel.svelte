<script lang="ts">
  import { getContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any; // Placeholder for now

  type Props = {
    value: string;
    class?: string;
    content?: Snippet; // Add content prop
  } & HTMLAttributes<HTMLDivElement>;

  let { value, class: className = '', content, ...restProps }: Props = $props();

  const context = getContext<{
    accordionId: string;
    isPanelOpen: (panelId: string) => boolean;
    handleValueChange: (panelId: string) => void;
  }>('accordion-context');

  let isOpen = $derived(context.isPanelOpen(value));
</script>

<div
  {...restProps}
  class="
    overflow-hidden transition-all duration-200 ease-in-out
    {isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
    {className}
  "
  aria-hidden={!isOpen}
>
  <div class="p-4 border-t border-gray-200 bg-white">
    {#if content}
      {@render content()}
    {/if}
  </div>
</div>
