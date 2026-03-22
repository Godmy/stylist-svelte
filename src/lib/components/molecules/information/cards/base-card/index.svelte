<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
  import type { IBaseCardElementProps } from '$stylist/design-system/contracts/information/base-card';
  import { createBaseCardState } from '$stylist/design-system/models/information/base-card.svelte';
  import { InteractionStyleManager } from '$stylist/design-system/styles/interaction/interaction';
  import { TOKEN_SIZE } from '$stylist/design-system/tokens/architecture/size';
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

  let props: IBaseCardElementProps & InformationHTMLAttributes<HTMLDivElement> = $props();

  // Централизованное управление состоянием
  let state = createBaseCardState(
    createBasePreset(InteractionStyleManager.getInteractiveVariants(), TOKEN_SIZE, {
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
  const BASE_CARD_HEADER_CLASSES = 'border-b p-[--spacing-md]';
  const BASE_CARD_TITLE_CLASSES = 'text-lg font-medium text-[--color-text-primary]';
  const BASE_CARD_DESCRIPTION_CLASSES = 'pt-[--spacing-xs] text-sm text-[--color-text-secondary]';
  const BASE_CARD_BODY_CLASSES = 'p-[--spacing-md]';
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










