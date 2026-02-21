<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { AlertCardElementProps } from '$stylist/design-system/props/information/alert-card';
  import { createState } from '$stylist/design-system/models/information/alert-card.svelte';
  import { ALERT_CARD_PRESET } from '$stylist/design-system/presets/alert-card';

  /**
   * AlertCard - карточка для отображения важной информации или предупреждений
   *
   * @param variant - Визуальный стиль компонента ('info' | 'success' | 'warning' | 'error' ...)
   * @param size - Размер компонента ('sm' | 'md' | 'lg')
   * @param disabled - Отключен ли компонент
   * @param title - Заголовок алерта
   * @param subtitle - Подзаголовок алерта
   * @returns Стилизованная карточка алерта
   */

  let props: AlertCardElementProps & HTMLAttributes<HTMLDivElement> = $props();

  // Централизованное управление состоянием
  let state = createState(ALERT_CARD_PRESET, props as any);

  // Извлечение rest-props вручную для работы в режиме runes
  let {
    variant,
    size,
    disabled,
    title = '',
    subtitle = '',
    icon,
    actions = [],
    class: classProp,
    children,
    ...restProps
  } = props;

  // Import classes from the design system
  import {
    ALERT_CARD_ICON_CONTAINER_CLASSES,
    ALERT_CARD_ICON_CLASSES,
    ALERT_CARD_TEXT_CONTAINER_CLASSES,
    ALERT_CARD_TITLE_CLASSES,
    ALERT_CARD_SUBTITLE_CLASSES,
    ALERT_CARD_ACTIONS_CONTAINER_CLASSES,
    ALERT_CARD_ACTION_BUTTON_CLASSES
  } from '$stylist/design-system/classes/information/alert-card';
</script>

<div {...restProps} class={state.classes} {...state.attrs}>
  <div class="p-[--spacing-lg]">
    {#if icon}
      <div class={ALERT_CARD_ICON_CONTAINER_CLASSES}>
        {#if typeof icon === 'string'}
          <img src={icon} alt="" class={ALERT_CARD_ICON_CLASSES} />
        {:else if icon}
          {@render icon()}
        {/if}
        <div class={ALERT_CARD_TEXT_CONTAINER_CLASSES}>
          <h3 class={ALERT_CARD_TITLE_CLASSES}>{title}</h3>
          {#if subtitle}<p class={ALERT_CARD_SUBTITLE_CLASSES}>{subtitle}</p>{/if}
        </div>
      </div>
    {:else}
      <h3 class={`${ALERT_CARD_TITLE_CLASSES} mb-[--spacing-sm]`}>{title}</h3>
      {#if subtitle}<p class={`${ALERT_CARD_SUBTITLE_CLASSES} mb-[--spacing-md]`}>{subtitle}</p>{/if}
    {/if}

    <div class={ALERT_CARD_ACTIONS_CONTAINER_CLASSES}>
      {#each actions as action, i}
        <button
          onclick={action.onClick}
          class={ALERT_CARD_ACTION_BUTTON_CLASSES}
        >
          {action.label}
        </button>
      {/each}
    </div>
  </div>
</div>
