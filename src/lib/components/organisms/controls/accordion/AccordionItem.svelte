<script lang="ts">
  import { getContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    value: string;
    class?: string;
    children?: any;
  } & HTMLAttributes<HTMLDivElement>;

  let { value, class: className = '', children, ...restProps }: Props = $props();

  const context = getContext<{
    accordionId: string;
    isPanelOpen: (panelId: string) => boolean;
    handleValueChange: (panelId: string) => void;
  }>('accordion-context');

  let isOpen = $derived(context.isPanelOpen(value));
  let uniqueId = $derived(`${context.accordionId}-${value}`);
</script>

<div {...restProps} id={uniqueId} class="border border-gray-200 rounded-lg overflow-hidden {className}">
  {@render children()}
</div>
