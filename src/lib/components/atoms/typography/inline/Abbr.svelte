<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type RestProps = Omit<HTMLAttributes<HTMLElement>, 'class'>;

  type Props = RestProps & {
    children: Snippet;
    title?: string;
    className?: string;
  };

  const props = $props();
  const title = props.title ?? '';
  const className = props.className ?? '';
  const children = props.children;
</script>

<abbr class={`no-underline border-b border-dotted border-gray-400 cursor-help ${className}`} title={title} {...props}>
  {@render children()}
</abbr>