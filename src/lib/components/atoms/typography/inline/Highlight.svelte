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

  const highlightClasses = `bg-yellow-100 text-yellow-800 p-1 rounded ${className}`;
</script>

<mark class={highlightClasses} {...props}>
  {@render children()}
</mark>