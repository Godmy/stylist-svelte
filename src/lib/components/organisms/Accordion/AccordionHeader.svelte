<script lang="ts">
  import { getContext } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';

  type Props = {
    value: string;
    class?: string;
    children?: any;
  } & HTMLButtonAttributes;

  let { value, class: className = '', children, ...restProps }: Props = $props();

  const context = getContext<{
    accordionId: string;
    isPanelOpen: (panelId: string) => boolean;
    handleValueChange: (panelId: string) => void;
  }>('accordion-context');

  let isOpen = $derived(context.isPanelOpen(value));

  function handleClick() {
    context.handleValueChange(value);
  }
</script>

<button
  {...restProps}
  type="button"
  class="
    flex w-full items-center justify-between p-4 text-left font-medium
    {isOpen ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'}
    {className}
  "
  onclick={handleClick}
  aria-expanded={isOpen}
>
  <span>{@render children()}</span>
  <ChevronDown
    class="h-5 w-5 text-gray-500 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}"
  />
</button>
