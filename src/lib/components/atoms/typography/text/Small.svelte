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

  const smallClasses = `text-sm text-gray-500 ${className}`;
</script>

<small class={smallClasses} {...props}>
  {@render children()}
</small>