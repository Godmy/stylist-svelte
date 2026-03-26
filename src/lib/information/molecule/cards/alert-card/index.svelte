<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
import type { IAlertCardElementProps } from '$stylist/information/interface/alert-card';
import { createAlertCardState } from '$stylist/information/state/alert-card';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { TOKEN_SIZE } from '$stylist/architecture/const/token/size';
  import { createBasePreset } from '$stylist/interaction/preset/base';

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

  let props: IAlertCardElementProps & InformationHTMLAttributes<HTMLDivElement> = $props();

  // Централизованное управление состоянием
  let state = createAlertCardState(
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
    title = '',
    subtitle = '',
    icon,
    actions = [],
    class: classProp,
    children,
    ...restProps
  } = props;

  const ALERT_CARD_ICON_CONTAINER_CLASSES = 'flex items-center mb-[--spacing-md]';
  const ALERT_CARD_ICON_CLASSES = 'w-10 h-10 mr-[--spacing-sm]';
  const ALERT_CARD_TEXT_CONTAINER_CLASSES = '';
  const ALERT_CARD_TITLE_CLASSES = 'text-lg font-semibold';
  const ALERT_CARD_SUBTITLE_CLASSES = 'text-[--color-text-secondary]';
  const ALERT_CARD_ACTIONS_CONTAINER_CLASSES = 'mt-[--spacing-md]';
  const ALERT_CARD_ACTION_BUTTON_CLASSES = 'mr-[--spacing-sm] mb-[--spacing-sm] px-4 py-2 bg-[--color-primary-500] text-[--color-text-inverse] rounded hover:bg-[--color-primary-600]';
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













