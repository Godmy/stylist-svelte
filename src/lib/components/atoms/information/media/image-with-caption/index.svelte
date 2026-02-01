<script lang="ts">
  import type { ImageWithCaptionProps } from '$stylist/design-system/media';
  import { createImageWithCaptionState } from '../state.svelte';

  let props: ImageWithCaptionProps = $props();
  const state = createImageWithCaptionState(props);
</script>

<div class={state.hostClasses} {...props}>
  <img
    src={props.src}
    alt={props.alt ?? 'Image'}
    width={props.width ?? '100%'}
    height={props.height ?? 'auto'}
    loading={props.loading ?? 'lazy'}
    class={state.imageClasses}
  />
  {#if props.caption}
    <div class={state.captionClasses}>
      {props.caption}
    </div>
  {/if}
</div>
