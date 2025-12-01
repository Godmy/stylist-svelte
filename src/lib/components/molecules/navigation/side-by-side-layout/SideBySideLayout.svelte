<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type SideBySideSection = {
    id: string;
    content: Snippet;
    size?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | 'full';
    className?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    sections: SideBySideSection[];
    class?: string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    responsive?: boolean;
  };

  let {
    sections,
    class: hostClass = '',
    gap = 'md',
    alignItems = 'stretch',
    justifyContent = 'start',
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

  let layoutClass = $derived(`
    flex
    ${responsive ? 'flex-col md:flex-row' : 'flex-row'}
    ${alignItemsClass}
    ${justifyContentClass}
    ${gapClass}
    ${hostClass}
  `);

  let sectionSizeClass = (size: string) => {
    if (!responsive) {
      return {
        '1/4': 'w-1/4',
        '1/3': 'w-1/3',
        '2/5': 'w-2/5',
        '1/2': 'w-1/2',
        '3/5': 'w-3/5',
        '2/3': 'w-2/3',
        '3/4': 'w-3/4',
        'full': 'w-full'
      }[size];
    } else {
      return {
        '1/4': 'md:w-1/4',
        '1/3': 'md:w-1/3',
        '2/5': 'md:w-2/5',
        '1/2': 'md:w-1/2',
        '3/5': 'md:w-3/5',
        '2/3': 'md:w-2/3',
        '3/4': 'md:w-3/4',
        'full': 'md:w-full'
      }[size];
    }
  };
</script>

<div class={layoutClass} {...restProps}>
  {#each sections as section}
    <div 
      class={`flex-1 ${sectionSizeClass(section.size || '1/2')} ${section.className || ''}`}
    >
      {@render section.content()}
    </div>
  {/each}
</div>
