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

  const ddClasses = `mt-1 text-gray-600 ${className}`;
</script>

<dd class={ddClasses} {...props}>
  {@render children()}
</dd>