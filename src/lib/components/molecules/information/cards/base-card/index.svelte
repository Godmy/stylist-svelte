<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { IBaseCardElementProps } from '$stylist/design-system/contracts/information/base-card';
  import { createBaseCardState } from '$stylist/design-system/models/information/base-card.svelte';
  import { INTERACTIVE_VARIANTS } from '$stylist/design-system/constants';
  import { COMPONENT_SIZE } from '$stylist/design-system/tokens/architecture/component-size';
  import { createBasePreset } from '$stylist/design-system/runtime/preset';

  /**
   * BaseCard - СѓРЅРёРІРµСЂСЃР°Р»СЊРЅС‹Р№ РєР°СЂС‚РѕС‡РЅС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РёРЅС„РѕСЂРјР°С†РёРё
   *
   * @param variant - Р’РёР·СѓР°Р»СЊРЅС‹Р№ СЃС‚РёР»СЊ РєРѕРјРїРѕРЅРµРЅС‚Р° ('primary' | 'secondary' | 'success' ...)
   * @param size - Р Р°Р·РјРµСЂ РєРѕРјРїРѕРЅРµРЅС‚Р° ('sm' | 'md' | 'lg')
   * @param disabled - РћС‚РєР»СЋС‡РµРЅ Р»Рё РєРѕРјРїРѕРЅРµРЅС‚
   * @param title - Р—Р°РіРѕР»РѕРІРѕРє РєР°СЂС‚РѕС‡РєРё
   * @param description - РћРїРёСЃР°РЅРёРµ РєР°СЂС‚РѕС‡РєРё
   * @returns РЎС‚РёР»РёР·РѕРІР°РЅРЅР°СЏ РєР°СЂС‚РѕС‡РєР°
   */

  let props: IBaseCardElementProps & HTMLAttributes<HTMLDivElement> = $props();

  // Р¦РµРЅС‚СЂР°Р»РёР·РѕРІР°РЅРЅРѕРµ СѓРїСЂР°РІР»РµРЅРёРµ СЃРѕСЃС‚РѕСЏРЅРёРµРј
  let state = createBaseCardState(
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










