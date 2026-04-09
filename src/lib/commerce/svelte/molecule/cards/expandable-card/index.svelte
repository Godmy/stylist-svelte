<script lang="ts">
  import type { ExpandableCardRecipe as ExpandableCardRecipe } from '$stylist/commerce/interface/recipe/expandable-card';
  import { Icon } from '$stylist';
  import { ObjectManagerExpandableCard } from '$stylist/commerce/class/object-manager/expandable-card';
  import { createExpandableCardState } from '$stylist/commerce/function/state/expandable-card';


  /**
   * РљРѕРјРїРѕРЅРµРЅС‚ ExpandableCard - РєР°СЂС‚РѕС‡РєР° СЃ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊСЋ СЂР°СЃРєСЂС‹С‚РёСЏ/СЃРІРѕСЂР°С‡РёРІР°РЅРёСЏ РґРµС‚Р°Р»РµР№
   *
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * - РџСЂРёРЅС†РёРї РµРґРёРЅСЃС‚РІРµРЅРЅРѕР№ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё (SRP): РєРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ СЂР°СЃРєСЂС‹РІР°РµРјРѕР№ РєР°СЂС‚РѕС‡РєРё
   * - РџСЂРёРЅС†РёРї РѕС‚РєСЂС‹С‚РѕСЃС‚Рё/Р·Р°РєСЂС‹С‚РѕСЃС‚Рё (OCP): Р»РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµРј С‡РµСЂРµР· РїСЂРѕРїСЃС‹ Рё СЃС‚РёР»Рё
   * - РџСЂРёРЅС†РёРї РїРѕРґСЃС‚Р°РЅРѕРІРєРё Р›РёСЃРєРѕРІ (LSP): РјРѕР¶РЅРѕ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РєР°Рє Р·Р°РјРµРЅСѓ СЃС‚Р°РЅРґР°СЂС‚РЅРѕР№ РєР°СЂС‚РѕС‡РєРµ
   * - РџСЂРёРЅС†РёРї СЂР°Р·РґРµР»РµРЅРёСЏ РёРЅС‚РµСЂС„РµР№СЃР° (ISP): С‡РµС‚РєРѕ РѕРїСЂРµРґРµР»РµРЅРЅС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ РїСЂРѕРїСЃРѕРІ
   * - РџСЂРёРЅС†РёРї РёРЅРІРµСЂСЃРёРё Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№ (DIP): Р·Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёР№ (СЃС‚РёР»РµР№ С‡РµСЂРµР· ExpandableCardStyleManager)
   */

  let {
    title,
    subtitle,
    summary,
    details,
    defaultExpanded = false,
    disabled = false,
    variant = 'default',
    class: className = '',
    headerClass = '',
    summaryClass = '',
    detailsClass = '',
    chevronClass = '',
    ...restProps
  }: ExpandableCardRecipe = $props();

  const expandableCardState = createExpandableCardState({
    title,
    subtitle,
    summary,
    details,
    defaultExpanded,
    disabled,
    variant,
    class: className,
    headerClass,
    summaryClass,
    detailsClass,
    chevronClass,
    ...restProps
  });

  // Р’С‹С‡РёСЃР»СЏРµРј СЃС‚РёР»Рё СЃ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµРј ExpandableCardStyleManager

</script>

<div class={state.containerClasses} {...restProps}>
  <button
    class={state.headerClasses}
    onclick={() => state.toggleExpanded()}
    aria-expanded={state.isExpanded}
    aria-controls={ObjectManagerExpandableCard.detailsId}
    disabled={disabled}
  >
    <div class="flex-1">
      <h3 class={state.titleClasses}>{title}</h3>
      {#if subtitle}
        <p class={state.subtitleClasses}>{subtitle}</p>
      {/if}
      <div class={state.summaryContainerClasses}>
        {@render summary?.()}
      </div>
    </div>

    <Icon
      name={ObjectManagerExpandableCard.chevronIcon}
      class={state.chevronClasses}
    />
  </button>

  <div
    id={ObjectManagerExpandableCard.detailsId}
    class={state.detailsContainerClasses}
  >
    <div class={state.detailsContentClasses}>
      {@render details?.()}
    </div>
  </div>
</div>

