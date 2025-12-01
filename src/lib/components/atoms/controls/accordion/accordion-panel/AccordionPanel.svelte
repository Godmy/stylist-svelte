<script lang="ts">
  import { getContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { AccordionPanelProps } from './types';
  import { getAccordionPanelClasses, getAccordionPanelContentClasses } from './styles';

  let { value, class: className = '', content, paddingClass = 'p-4', borderClass = 'border-t border-gray-200', bgClass = 'bg-white', ...restProps }: AccordionPanelProps & HTMLAttributes<HTMLDivElement> = $props();

  const context = getContext<{
    accordionId: string;
    isPanelOpen: (panelId: string) => boolean;
    handleValueChange: (panelId: string) => void;
  }>('accordion-context');

  let isOpen = $derived(context.isPanelOpen(value));

  let panelClasses = $derived(getAccordionPanelClasses(isOpen, className));
  let contentClasses = $derived(getAccordionPanelContentClasses(paddingClass, borderClass, bgClass));
</script>

<div
  {...restProps}
  class={panelClasses}
  aria-hidden={!isOpen}
>
  <div class={contentClasses}>
    {#if content}
      {@render content()}
    {/if}
  </div>
</div>
