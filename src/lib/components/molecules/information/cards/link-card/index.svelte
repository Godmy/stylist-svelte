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
  
  import type { ILinkCardProps } from '$stylist/design-system/contracts/information/link-card';
  import { Icon } from '$stylist/components/atoms';
  import { LinkCardStyleManager } from '$stylist/design-system/styles/information/link-card';

  const ArrowRight = 'arrow-right';

  
  let {
    title,
    description,
    href,
    newTab = false,
    variant = 'default',
    icon,
    showArrow = true,
    class: className = ''
  }: ILinkCardProps = $props();
  
  // Р’С‹С‡РёСЃР»СЏРµРјС‹Рµ СЃС‚РёР»Рё С‡РµСЂРµР· derived РґР»СЏ РёР·РѕР»СЏС†РёРё Р»РѕРіРёРєРё СЃС‚РёР»РёР·Р°С†РёРё
  const containerClasses = $derived(`${LinkCardStyleManager.getContainerClasses(variant)} ${className}`.trim());
  const contentClasses = $derived(LinkCardStyleManager.getContentClasses());
  const iconContainerClasses = $derived(LinkCardStyleManager.getIconContainerClasses());
  const iconClasses = $derived(LinkCardStyleManager.getIconClasses());
  const textContainerClasses = $derived(LinkCardStyleManager.getTextContainerClasses());
  const titleClasses = $derived(LinkCardStyleManager.getTitleClasses());
  const descriptionClasses = $derived(LinkCardStyleManager.getDescriptionClasses());
  const arrowClasses = $derived(LinkCardStyleManager.getArrowClasses());

  // РћРїСЂРµРґРµР»СЏРµРј target РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РїСЂРѕРїСЃР° newTab
  const linkTarget = $derived(newTab ? '_blank' : '_self');
  
  // РћРїСЂРµРґРµР»СЏРµРј rel РґР»СЏ Р±РµР·РѕРїР°СЃРЅРѕСЃС‚Рё РїСЂРё newTab
  const linkRel = $derived(newTab ? 'noopener noreferrer' : undefined);
</script>

<a
  href={href}
  target={linkTarget}
  rel={linkRel}
  class={containerClasses}
  aria-label={`Link: ${title}${description ? `, ${description}` : ''}`}
>
  <div class={contentClasses}>
    {#if icon}
      <div class={iconContainerClasses} aria-hidden="true">
        <span class={iconClasses}>{icon}</span>
      </div>
    {/if}
    
    <div class={textContainerClasses}>
      <h3 class={titleClasses}>{title}</h3>
      {#if description}
        <p class={descriptionClasses}>{description}</p>
      {/if}
    </div>
    
    {#if showArrow}
      <Icon name={ArrowRight} class={arrowClasses} aria-hidden="true" />
    {/if}
  </div>
</a>




