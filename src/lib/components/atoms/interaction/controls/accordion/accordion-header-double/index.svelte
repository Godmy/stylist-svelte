<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';
  import type { AccordionHeaderDoubleProps } from '$stylist/design-system/interaction/controls/accordion/accordion-header-double';
  import { createAccordionHeaderDoubleState } from '../../state.svelte';

  type Props = AccordionHeaderDoubleProps & HTMLButtonAttributes;

  let props: Props = $props();

  const state = createAccordionHeaderDoubleState(props);

  function handleClick(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) {
    if (!state.disabled && props.onclick) {
      props.onclick(event);
    }
  }

  const restProps = $derived((() => {
    const {
      class: _class,
      value: _value,
      children: _children,
      open: _open,
      disabled: _disabled,
      ...rest
    } = props;
    return rest;
  })());
</script>

<button
  {...restProps}
  type="button"
  class={state.classes}
  onclick={handleClick}
  aria-expanded={state.open}
  aria-disabled={state.disabled}
>
  {@render props.children?.()}
  <ChevronDown class={state.chevronClasses} />
</button>
