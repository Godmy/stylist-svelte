<script lang="ts">
  import type { IconWrapperProps } from './type';
  import { DEFAULT_SIZE, DEFAULT_VARIANT, DEFAULT_SHAPE, DEFAULT_COLOR } from './constant';
  import { getCombinedClasses } from './util';

  const {
    size = DEFAULT_SIZE,
    variant = DEFAULT_VARIANT,
    shape = DEFAULT_SHAPE,
    color = DEFAULT_COLOR,
    content,
    class: className = '',
    ...restProps
  }: IconWrapperProps = $props();

  const classes = getCombinedClasses(size, shape, variant, color, className);
</script>

<div class={classes} {...restProps}>
  {#if content}
    {@render content()}
  {/if}
</div>