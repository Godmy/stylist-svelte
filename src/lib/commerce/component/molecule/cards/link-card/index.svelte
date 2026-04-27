<script lang="ts">
  /**
   * LinkCard - РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РєР°СЂС‚РѕС‡РєРё-СЃСЃС‹Р»РєРё РґР»СЏ Р±С‹СЃС‚СЂС‹С… РїРµСЂРµС…РѕРґРѕРІ
   * 
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * 
   * Single Responsibility: РћС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ РєР°СЂС‚РѕС‡РєРё-СЃСЃС‹Р»РєРё
   * Open/Closed: Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµС‚СЃСЏ С‡РµСЂРµР· РїСЂРѕРїСЃС‹, РЅРµ С‚СЂРµР±СѓРµС‚ РёР·РјРµРЅРµРЅРёР№ РІ РєРѕРґРµ
   * Liskov Substitution: РњРѕР¶РµС‚ Р±С‹С‚СЊ Р·Р°РјРµРЅРµРЅ РґСЂСѓРіРёРј РєРѕРјРїРѕРЅРµРЅС‚РѕРј РЅР°РІРёРіР°С†РёРё РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё
   * Interface Segregation: РРјРµРµС‚ РјРёРЅРёРјР°Р»СЊРЅС‹Р№, РєРѕРЅРєСЂРµС‚РЅС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ РґР»СЏ РЅР°РІРёРіР°С†РёРё
   * Dependency Inversion: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёРё СЃС‚РёР»РµР№ С‡РµСЂРµР· LinkCardStyleManager
   * 
   * РСЃРїРѕР»СЊР·СѓРµС‚ РїРѕРґС…РѕРґ Atomic Design (Molecule) - РєРѕРјР±РёРЅРёСЂСѓРµС‚ Р±Р°Р·РѕРІС‹Рµ СЌР»РµРјРµРЅС‚С‹
   * (РёРєРѕРЅРєР°, С‚РµРєСЃС‚, СЃС‚СЂРµР»РєР°) РІ СЃРѕСЃС‚Р°РІРЅРѕР№ РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РЅР°РІРёРіР°С†РёРё
   */
  
  import type { LinkCardRecipe as LinkCardRecipe } from '$stylist/commerce/interface/recipe/link-card';
  import { Icon } from '$stylist';
  import { ObjectManagerLinkCard } from '$stylist/commerce/class/object-manager/link-card';
  import { createLinkCardState } from '$stylist/commerce/function/state/link-card';

  
  let {
    title,
    description,
    href,
    newTab = false,
    variant = 'default',
    icon,
    showArrow = true,
    class: className = ''
  }: LinkCardRecipe = $props();
  
  // Р’С‹С‡РёСЃР»СЏРµРјС‹Рµ СЃС‚РёР»Рё С‡РµСЂРµР· derived РґР»СЏ РёР·РѕР»СЏС†РёРё Р»РѕРіРёРєРё СЃС‚РёР»РёР·Р°С†РёРё
  const state = createLinkCardState({
    title,
    description,
    href,
    newTab,
    variant,
    icon,
    showArrow,
    class: className
  });

  // РћРїСЂРµРґРµР»СЏРµРј target РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РїСЂРѕРїСЃР° newTab
  
  // РћРїСЂРµРґРµР»СЏРµРј rel РґР»СЏ Р±РµР·РѕРїР°СЃРЅРѕСЃС‚Рё РїСЂРё newTab
</script>

<a
  href={href}
  target={state.target}
  rel={state.rel}
  class={state.containerClasses}
  aria-label={state.ariaLabel}
>
  <div class={state.contentClasses}>
    {#if icon}
      <div class={state.iconContainerClasses} aria-hidden="true">
        <span class={state.iconClasses}>{icon}</span>
      </div>
    {/if}
    
    <div class={state.textContainerClasses}>
      <h3 class={state.titleClasses}>{title}</h3>
      {#if description}
        <p class={state.descriptionClasses}>{description}</p>
      {/if}
    </div>
    
    {#if showArrow}
      <Icon name={ObjectManagerLinkCard.arrowIcon} class={state.arrowClasses} aria-hidden="true" />
    {/if}
  </div>
</a>

