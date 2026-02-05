<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { IconWrapperProps } from '$stylist/design-system';
  import { createIconWrapperState } from '../state.svelte';

  type Props = IconWrapperProps & HTMLAttributes<HTMLDivElement>;

  let {
    class: className,
    ...restProps
  }: Props = $props();

  const state = createIconWrapperState({ ...restProps, class: className });
</script>

<div class={state.classes} {...restProps}>
  {#if restProps.content}
    {@render restProps.content()}
  {/if}
</div>
