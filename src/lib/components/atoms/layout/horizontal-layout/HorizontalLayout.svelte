<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    children: Snippet;
    class?: string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    wrap?: boolean;
  };

  let {
    children,
    class: hostClass = '',
    gap = 'md',
    alignItems = 'center',
    justifyContent = 'start',
    wrap = true,
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

  let wrapClass = $derived(wrap ? 'flex-wrap' : 'flex-nowrap');

  let layoutClass = $derived(`
    flex
    ${alignItemsClass}
    ${justifyContentClass}
    ${wrapClass}
    ${gapClass}
    ${hostClass}
  `);
</script>

<div class={layoutClass} {...restProps}>
  {@render children()}
</div>
