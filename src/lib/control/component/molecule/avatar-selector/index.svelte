<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { AvatarSelectorProps } from '$stylist/control/interface/recipe/avatar-selector';
  import { createAvatarSelectorState } from '$stylist/control/function/state/avatar-selector';

  let props: AvatarSelectorProps = $props();
  const state = createAvatarSelectorState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      src: _src,
      alt: _alt,
      size: _size,
      children: _children,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={`${state.containerClass} ${state.className}`}>
  <img
    src={state.src}
    alt={state.alt}
    class={state.imageClass}
  />
  {#if state.hasChildren}
    <div class="absolute bottom-0 right-0">
      {#if state.children}{#if state.children}{@render state.children()}{/if}{/if}
    </div>
  {/if}
</div>


