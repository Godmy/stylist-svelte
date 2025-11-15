<script lang="ts">
  import type { BlockquoteProps } from './type';
  import { DEFAULT_WITH_BORDER, DEFAULT_WITH_BACKGROUND, FOOTER_CLASSES, FOOTER_PREFIX } from './constant';
  import { getBlockquoteClasses } from './util';

  let {
    cite = '',
    withBorder = DEFAULT_WITH_BORDER,
    withBackground = DEFAULT_WITH_BACKGROUND,
    className = '',
    children
  }: BlockquoteProps = $props();

  const blockquoteClasses = getBlockquoteClasses(withBorder, withBackground, className);
</script>

<blockquote class={blockquoteClasses} cite={cite}>
  {@render children()}
  {#if cite}
    <footer class={FOOTER_CLASSES}>
      {FOOTER_PREFIX}{cite}
    </footer>
  {/if}
</blockquote>