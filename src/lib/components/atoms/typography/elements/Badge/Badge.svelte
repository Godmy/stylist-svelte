<script lang="ts">
  import type { BadgeProps } from './types';
  import { BADGE_DEFAULT_VARIANT, BADGE_DEFAULT_SIZE } from './constant';
  import { BadgeStyleManager } from './styles';

  let {
    variant = BADGE_DEFAULT_VARIANT,
    size = BADGE_DEFAULT_SIZE,
    class: className = '',
    children
  }: BadgeProps = $props();

  const classes = BadgeStyleManager.getBadgeClasses(variant, size, className);
</script>

<span class={classes}>
  {#if children}
    {@render children()}
  {/if}
</span>
