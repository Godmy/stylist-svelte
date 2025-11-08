<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type RestProps = Omit<HTMLAttributes<HTMLElement>, 'class'>;

  type Props = RestProps & {
    children: Snippet;
    className?: string;
  };

  const props = $props();
  const className = props.className ?? '';
  const children = props.children;
</script>

<sup class={`text-xs align-super ${className}`} {...props}>
  {@render children()}
</sup>