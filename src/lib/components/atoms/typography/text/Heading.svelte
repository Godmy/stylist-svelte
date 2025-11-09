<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

  type RestProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'class'>;

  type Props = RestProps & {
    children: Snippet;
    size?: HeadingSize;
    level?: HeadingLevel;
    className?: string;
  };

  const {
    children,
    size = 'h1',
    level,
    className = '',
    ...restProps
  }: Props = $props();

  // Определяем тег на основе size или level
  const headingTag = $derived(level ? `h${level}` : size);

  // Определяем классы стилей на основе размера
  const headingClasses = $derived((() => {
    const baseClasses = 'font-bold';
    // Use `size` for styling, `headingTag` for semantics
    const styleTag = size || headingTag;

    switch (styleTag) {
      case 'h1':
        return `${baseClasses} text-4xl md:text-5xl leading-tight`;
      case 'h2':
        return `${baseClasses} text-3xl md:text-4xl leading-tight`;
      case 'h3':
        return `${baseClasses} text-2xl md:text-3xl leading-snug`;
      case 'h4':
        return `${baseClasses} text-xl md:text-2xl leading-snug`;
      case 'h5':
        return `${baseClasses} text-lg md:text-xl leading-normal`;
      case 'h6':
        return `${baseClasses} text-base md:text-lg leading-normal`;
      default:
        return baseClasses;
    }
  })());
</script>

<svelte:element this={headingTag} class={`${headingClasses} ${className}`} {...restProps}>
  {@render children()}
</svelte:element>