<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    primary: Snippet;
    secondary: Snippet;
    class?: string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    direction?: 'horizontal' | 'vertical';
    primarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    secondarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    responsive?: boolean;
  };

  let {
    primary,
    secondary,
    class: hostClass = '',
    gap = 'md',
    direction = 'horizontal',
    primarySize = '2/3',
    secondarySize = '1/3',
    responsive = true,
    ...restProps
  }: Props = $props();

  let gapClass = $derived({
    'none': 'gap-0',
    'sm': 'gap-2',
    'md': 'gap-4',
    'lg': 'gap-6',
    'xl': 'gap-8'
  }[gap]);

  let flexDirectionClass = $derived(
    direction === 'horizontal' 
      ? (responsive ? 'flex-col lg:flex-row' : 'flex-row') 
      : (responsive ? 'flex-col' : 'flex-col')
  );

  let primarySizeClass = $derived({
    '1/4': responsive ? 'lg:w-1/4' : 'w-1/4',
    '1/3': responsive ? 'lg:w-1/3' : 'w-1/3',
    '2/5': responsive ? 'lg:w-2/5' : 'w-2/5',
    '1/2': responsive ? 'lg:w-1/2' : 'w-1/2',
    '3/5': responsive ? 'lg:w-3/5' : 'w-3/5',
    '2/3': responsive ? 'lg:w-2/3' : 'w-2/3',
    '3/4': responsive ? 'lg:w-3/4' : 'w-3/4'
  }[primarySize]);

  let secondarySizeClass = $derived({
    '1/4': responsive ? 'lg:w-1/4' : 'w-1/4',
    '1/3': responsive ? 'lg:w-1/3' : 'w-1/3',
    '2/5': responsive ? 'lg:w-2/5' : 'w-2/5',
    '1/2': responsive ? 'lg:w-1/2' : 'w-1/2',
    '3/5': responsive ? 'lg:w-3/5' : 'w-3/5',
    '2/3': responsive ? 'lg:w-2/3' : 'w-2/3',
    '3/4': responsive ? 'lg:w-3/4' : 'w-3/4'
  }[secondarySize]);

  let layoutClass = $derived(`
    flex
    ${flexDirectionClass}
    ${gapClass}
    ${hostClass}
  `);
</script>

<div class={layoutClass} {...restProps}>
  <div class={`flex-1 ${primarySizeClass}`}>
    {@render primary()}
  </div>
  <div class={`flex-1 ${secondarySizeClass}`}>
    {@render secondary()}
  </div>
</div>
