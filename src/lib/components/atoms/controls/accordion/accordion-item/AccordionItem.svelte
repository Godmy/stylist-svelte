<script lang="ts">
  import { getContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { AccordionItemProps } from './types';
  import { getAccordionItemClasses } from './styles';

  let { value, class: className = '', children, ...restProps }: AccordionItemProps & HTMLAttributes<HTMLDivElement> = $props();

  const context = getContext<{
    accordionId: string;
    isPanelOpen: (panelId: string) => boolean;
    handleValueChange: (panelId: string) => void;
  }>('accordion-context');

  let isOpen = $derived(context.isPanelOpen(value));
  let uniqueId = $derived(`${context.accordionId}-${value}`);

  let itemClasses = $derived(getAccordionItemClasses(className));
</script>

<div {...restProps} id={uniqueId} class={itemClasses}>
  {@render children()}
</div>
