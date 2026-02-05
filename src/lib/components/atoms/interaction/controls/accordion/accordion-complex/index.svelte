<script lang="ts">
  import { setContext } from 'svelte';
  import type { ComplexAccordionProps } from '$stylist/design-system/attributes';
  import { createComplexAccordionState } from '../state.svelte';

  let props: ComplexAccordionProps = $props();

  const accordionState = createComplexAccordionState(props);

  const accordionId = Math.random().toString(36).substring(2, 9);
  let openPanels = $state<string[]>(accordionState.defaultValue);

  function handleValueChange(panelId: string) {
    let newOpenPanels: string[];

    if (accordionState.multiple) {
      newOpenPanels = openPanels.includes(panelId)
        ? openPanels.filter(id => id !== panelId)
        : [...openPanels, panelId];
    } else {
      newOpenPanels = openPanels.includes(panelId) ? [] : [panelId];
    }

    openPanels = newOpenPanels;
    props.onValueChange?.(newOpenPanels);
  }

  function isPanelOpen(panelId: string): boolean {
    return openPanels.includes(panelId);
  }

  setContext('accordion-context', {
    accordionId,
    isPanelOpen,
    handleValueChange
  });

  const restProps = $derived((() => {
    const {
      class: _class,
      multiple: _multiple,
      defaultValue: _defaultValue,
      value: _value,
      onValueChange: _onValueChange,
      content: _content,
      ...rest
    } = props;
    return rest;
  })());
</script>

<div {...restProps} class={accordionState.classes}>
  {#if props.content}
    {@render props.content()}
  {/if}
</div>
