<script lang="ts">
  import type { BadgeProps } from './type';
  import { DEFAULT_VARIANT, DEFAULT_SIZE } from './constant';
  import { getBadgeClasses } from './util';

  let {
    variant = DEFAULT_VARIANT,
    size = DEFAULT_SIZE,
    class: className = '',
    children
  }: BadgeProps = $props();

  const classes = getBadgeClasses(variant, size, className);
</script>

<span class={classes}>
  {#if children}
    {@render children()}
  {/if}
</span>
