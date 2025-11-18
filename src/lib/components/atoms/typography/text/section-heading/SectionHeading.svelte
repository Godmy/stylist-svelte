<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children?: Snippet;
  } & HTMLAttributes<HTMLHeadingElement>;

  let {
    level = 2,
    size = 'lg',
    children,
    ...restProps
  }: Props = $props();

  let Tag = $derived(`h${level}` as const);

  let sizeClasses = $derived(() => {
    const classesMap = {
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl'
    };
    return classesMap[size];
  });
</script>

<svelte:element this={Tag} class={`font-semibold ${sizeClasses} text-gray-900`} {...restProps}>
  {@render children?.()}
</svelte:element>