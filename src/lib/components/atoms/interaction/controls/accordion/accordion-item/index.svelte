<script lang="ts">
  import { getContext } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { AccordionItemProps } from '$stylist/design-system/attributes';
  import { createAccordionItemState } from '../state.svelte';

  type Props = AccordionItemProps & HTMLAttributes<HTMLDivElement>;

  let props: Props = $props();

  const state = createAccordionItemState(props);

  const context = getContext<{
    accordionId: string;
    isPanelOpen: (panelId: string) => boolean;
    handleValueChange: (panelId: string) => void;
  }>('accordion-context');

  let uniqueId = $derived(`${context.accordionId}-${props.value}`);

  const restProps = $derived((() => {
    const { class: _class, value: _value, children: _children, ...rest } = props;
    return rest;
  })());
</script>

<div {...restProps} id={uniqueId} class={state.classes}>
  {@render props.children?.()}
</div>
