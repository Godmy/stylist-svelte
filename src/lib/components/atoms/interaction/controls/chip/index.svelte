<script lang="ts">
  import { X } from 'lucide-svelte';
  import type { ChipProps } from '$stylist/design-system/attributes';
  import { createChipState } from '../state.svelte';

  let props: ChipProps = $props();

  const state = createChipState(props);
  const children = $derived(props.children);

  const restProps = $derived((() => {
    const {
      class: _class,
      label: _label,
      variant: _variant,
      size: _size,
      closable: _closable,
      disabled: _disabled,
      children: _children,
      ...rest
    } = props;
    return rest;
  })());
</script>

<div class={state.classes} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    {state.label}
  {/if}

  {#if state.closable}
    <button class={state.closeButtonClasses} aria-label="Close" disabled={state.disabled}>
      <X class={state.closeButtonIconClasses} />
    </button>
  {/if}
</div>
