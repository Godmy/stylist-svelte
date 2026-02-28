<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { AlertCardElementProps } from '$stylist/design-system/contracts/information/alert-card';
  import { createState } from '$stylist/design-system/models/information/alert-card.svelte';
  import { INTERACTIVE_VARIANTS } from '$stylist/design-system/styles/interaction/interaction';
  import { COMPONENT_SIZE } from '$stylist/design-system/tokens/architecture/component-size';
  import { createBasePreset } from '$stylist/design-system/runtime/preset';

  /**
   * AlertCard - РєР°СЂС‚РѕС‡РєР° РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РІР°Р¶РЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РёР»Рё РїСЂРµРґСѓРїСЂРµР¶РґРµРЅРёР№
   *
   * @param variant - Р’РёР·СѓР°Р»СЊРЅС‹Р№ СЃС‚РёР»СЊ РєРѕРјРїРѕРЅРµРЅС‚Р° ('info' | 'success' | 'warning' | 'error' ...)
   * @param size - Р Р°Р·РјРµСЂ РєРѕРјРїРѕРЅРµРЅС‚Р° ('sm' | 'md' | 'lg')
   * @param disabled - РћС‚РєР»СЋС‡РµРЅ Р»Рё РєРѕРјРїРѕРЅРµРЅС‚
   * @param title - Р—Р°РіРѕР»РѕРІРѕРє Р°Р»РµСЂС‚Р°
   * @param subtitle - РџРѕРґР·Р°РіРѕР»РѕРІРѕРє Р°Р»РµСЂС‚Р°
   * @returns РЎС‚РёР»РёР·РѕРІР°РЅРЅР°СЏ РєР°СЂС‚РѕС‡РєР° Р°Р»РµСЂС‚Р°
   */

  let props: AlertCardElementProps & HTMLAttributes<HTMLDivElement> = $props();

  // Р¦РµРЅС‚СЂР°Р»РёР·РѕРІР°РЅРЅРѕРµ СѓРїСЂР°РІР»РµРЅРёРµ СЃРѕСЃС‚РѕСЏРЅРёРµРј
  let state = createState(
    createBasePreset(INTERACTIVE_VARIANTS, COMPONENT_SIZE, {
      variant: 'default',
      size: 'md'
    }),
    props as any
  );

  // РР·РІР»РµС‡РµРЅРёРµ rest-props РІСЂСѓС‡РЅСѓСЋ РґР»СЏ СЂР°Р±РѕС‚С‹ РІ СЂРµР¶РёРјРµ runes
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



