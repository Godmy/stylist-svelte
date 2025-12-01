<script lang="ts">
  import { getContext } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';
  import type { AccordionHeaderProps } from './types';
  import { getAccordionHeaderClasses, getChevronClasses } from './styles';

  let { value, class: className = '', children, paddingClass = 'p-4', chevronSizeClass = 'h-5 w-5', ...restProps }: AccordionHeaderProps & HTMLButtonAttributes = $props();

  const context = getContext<{
    accordionId: string;
    isPanelOpen: (panelId: string) => boolean;
    handleValueChange: (panelId: string) => void;
  }>('accordion-context');

  let isOpen = $derived(context.isPanelOpen(value));

  function handleClick() {
    context.handleValueChange(value);
  }

  let buttonClasses = $derived(getAccordionHeaderClasses(isOpen, className, paddingClass));
  let chevronClasses = $derived(getChevronClasses(isOpen, chevronSizeClass));
</script>

<button
  {...restProps}
  type="button"
  class={buttonClasses}
  onclick={handleClick}
  aria-expanded={isOpen}
>
  <span>{@render children()}</span>
  <ChevronDown class={chevronClasses} />
</button>
