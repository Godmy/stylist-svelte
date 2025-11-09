<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    size?: 'sm' | 'md' | 'lg';
    muted?: boolean;
    children?: Snippet;
  } & HTMLAttributes<HTMLParagraphElement>;

  let {
    size = 'md',
    muted = false,
    children,
    ...restProps
  }: Props = $props();

  let sizeClasses = $derived(() => {
    const classesMap = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    return classesMap[size];
  });

  let mutedClass = muted ? 'text-gray-500' : '';
</script>

<p class={`font-normal ${sizeClasses} ${mutedClass}`} {...restProps}>
  {@render children?.()}
</p>