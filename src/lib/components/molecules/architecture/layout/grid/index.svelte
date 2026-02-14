<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    children: Snippet;
    class?: string;
    cols?: number;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    responsive?: boolean;
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  };

  let {
    children,
    class: hostClass = '',
    cols = 2,
    gap = 'md',
    responsive = true,
    alignItems = 'stretch',
    justifyContent = 'start',
    ...restProps
  }: Props = $props();

  let gapClass = $derived({
    'none': 'gap-0',
    'sm': 'gap-2',
    'md': 'gap-4',
    'lg': 'gap-6',
    'xl': 'gap-8'
  }[gap]);

  let alignItemsClass = $derived({
    'start': 'items-start',
    'center': 'items-center',
    'end': 'items-end',
    'stretch': 'items-stretch'
  }[alignItems]);

  let justifyContentClass = $derived({
    'start': 'justify-start',
    'center': 'justify-center',
    'end': 'justify-end',
    'between': 'justify-between',
    'around': 'justify-around',
    'evenly': 'justify-evenly'
  }[justifyContent]);

  let gridClass = $derived(`
    grid 
    ${responsive 
      ? `grid-cols-1 sm:grid-cols-2 md:grid-cols-${Math.min(cols, 4)} lg:grid-cols-${cols}` 
      : `grid-cols-${cols}`}
    ${gapClass}
    ${alignItemsClass}
    ${justifyContentClass}
    ${hostClass}
  `);
</script>

<div class={gridClass} {...restProps}>
  {@render children()}
</div>
