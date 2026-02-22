<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { BaseCardElementProps } from '$stylist/design-system/contracts/information/base-card';
  import { createState } from '$stylist/design-system/models/information/base-card.svelte';
  import { INTERACTIVE_VARIANTS } from '$stylist/design-system/classes/interaction';
  import { COMPACT_SIZE_SCALE } from '$stylist/design-system/tokens/architecture/sizes';
  import { createBasePreset } from '$stylist/design-system/runtime/preset';

  /**
   * BaseCard - универсальный карточный компонент для отображения информации
   *
   * @param variant - Визуальный стиль компонента ('primary' | 'secondary' | 'success' ...)
   * @param size - Размер компонента ('sm' | 'md' | 'lg')
   * @param disabled - Отключен ли компонент
   * @param title - Заголовок карточки
   * @param description - Описание карточки
   * @returns Стилизованная карточка
   */

  let props: BaseCardElementProps & HTMLAttributes<HTMLDivElement> = $props();

  // Централизованное управление состоянием
  let state = createState(
    createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
      variant: 'default',
      size: 'md'
    }),
    props as any
  );

  // Извлечение rest-props вручную для работы в режиме runes
  let {
    variant,
    size,
    disabled,
    title,
    description,
    headerClass = '',
    bodyClass = '',
    class: classProp,
    children,
    ...restProps
  } = props;
  
  // Import classes from the design system
  import { 
    BASE_CARD_HEADER_CLASSES, 
    BASE_CARD_TITLE_CLASSES, 
    BASE_CARD_DESCRIPTION_CLASSES, 
    BASE_CARD_BODY_CLASSES 
  } from '$stylist/design-system/classes/information/base-card';
</script>

<div {...restProps} class={state.classes} {...state.attrs}>
  {#if title || description}
    <div class={BASE_CARD_HEADER_CLASSES + ' ' + headerClass}>
      {#if title}
        <h3 class={BASE_CARD_TITLE_CLASSES}>{title}</h3>
      {/if}
      {#if description}
        <p class={BASE_CARD_DESCRIPTION_CLASSES}>{description}</p>
      {/if}
    </div>
  {/if}
  <div class={BASE_CARD_BODY_CLASSES + ' ' + bodyClass}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
