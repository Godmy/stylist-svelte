<script lang="ts">
  import { setContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { ComplexAccordionProps } from './types';
  import { getComplexAccordionClasses } from './styles';

  let {
    multiple = false,
    defaultValue = [],
    value,
    onValueChange,
    class: className = '',
    content, // Destructure content
    ...restProps
  }: ComplexAccordionProps & HTMLAttributes<HTMLDivElement> = $props();

  const accordionId = Math.random().toString(36).substring(2, 9);
  let openPanels = $state<string[]>(defaultValue);

  function handleValueChange(panelId: string) {
    let newOpenPanels: string[];

    if (multiple) {
      newOpenPanels = openPanels.includes(panelId)
        ? openPanels.filter(id => id !== panelId)
        : [...openPanels, panelId];
    } else {
      newOpenPanels = openPanels.includes(panelId) ? [] : [panelId];
    }

    openPanels = newOpenPanels;
    onValueChange?.(newOpenPanels);
  }

  function isPanelOpen(panelId: string): boolean {
    return openPanels.includes(panelId);
  }

  setContext('accordion-context', {
    accordionId,
    isPanelOpen,
    handleValueChange
  });

  let accordionClasses = $derived(getComplexAccordionClasses(className));
</script>

<div {...restProps} class={accordionClasses}>
  {#if content}
    {@render content()}
  {/if}
</div>