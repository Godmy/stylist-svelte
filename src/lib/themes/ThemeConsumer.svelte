<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getThemeContext } from '../themes/context';

  type Props = {
    children: Snippet<[{ theme: any }]>;
  };

  let { children }: Props = $props();
  let { theme } = $state(getThemeContext());
</script>

{@render children({ theme })}