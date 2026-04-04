<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { BaseCardRecipe as IBaseCardElementProps } from '$stylist/commerce/interface/recipe/base-card';
import { BaseCardStyleManager } from '$stylist/commerce/class/style-manager/base-card';
import { createBaseCardState } from '$stylist/commerce/function/state/base-card';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';
  import { createBasePreset } from '$stylist/interaction/preset/base';

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

  let props: IBaseCardElementProps & InformationHTMLAttributes<HTMLDivElement> = $props();

  // Р¦РµРЅС‚СЂР°Р»РёР·РѕРІР°РЅРЅРѕРµ СѓРїСЂР°РІР»РµРЅРёРµ СЃРѕСЃС‚РѕСЏРЅРёРµРј
  let state = createBaseCardState(
    createBasePreset(InteractionStyleManager.getInteractiveVariants(), TOKEN_SIZE, {
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
</script>

<div {...restProps} class={state.classes} {...state.attrs}>
  {#if title || description}
    <div class={BaseCardStyleManager.getHeaderClasses(headerClass)}>
      {#if title}
        <h3 class={BaseCardStyleManager.getTitleClasses()}>{title}</h3>
      {/if}
      {#if description}
        <p class={BaseCardStyleManager.getDescriptionClasses()}>{description}</p>
      {/if}
    </div>
  {/if}
  <div class={BaseCardStyleManager.getBodyClasses(bodyClass)}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>











