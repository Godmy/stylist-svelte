<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type TextType = 'p' | 'span' | 'div' | 'label';
  type TextSize = 'sm' | 'md' | 'lg' | 'xl';

  type RestProps = Omit<HTMLAttributes<HTMLElement>, 'class'>;

  type Props = RestProps & {
    children: Snippet;
    as?: TextType;
    size?: TextSize;
    className?: string;
    muted?: boolean;
    bold?: boolean;
    italic?: boolean;
  };

  const {
    children,
    as = 'p',
    size = 'md',
    className = '',
    muted = false,
    bold = false,
    italic = false,
    ...restProps
  }: Props = $props();

  // Определяем классы стилей на основе размера и свойств
  const textClasses = $derived(() => {
    let classes = '';

    // Размеры
    switch (size) {
      case 'sm':
        classes += ' text-sm';
        break;
      case 'lg':
        classes += ' text-lg';
        break;
      case 'xl':
        classes += ' text-xl';
        break;
      case 'md':
      default:
        classes += ' text-base';
        break;
    }

    // Стили
    if (bold) classes += ' font-bold';
    if (italic) classes += ' italic';
    if (muted) classes += ' text-gray-500';

    return classes;
  });
</script>

{#if as === 'p'}
  <p class="{textClasses} {className}" {...restProps}>
    {@render children()}
  </p>
{:else if as === 'span'}
  <span class="{textClasses} {className}" {...restProps}>
    {@render children()}
  </span>
{:else if as === 'div'}
  <div class="{textClasses} {className}" {...restProps}>
    {@render children()}
  </div>
{:else if as === 'label'}
  <label class="{textClasses} {className}" {...restProps}>
    {@render children()}
  </label>
{/if}