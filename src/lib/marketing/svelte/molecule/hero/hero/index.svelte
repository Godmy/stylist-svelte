<script lang="ts">
  /**
   * Hero - РїРѕР»РЅРѕСЌРєСЂР°РЅРЅР°СЏ СЃРµРєС†РёСЏ Р·Р°РіРѕР»РѕРІРєР° СЃ С„РѕРЅРѕРј Рё CTA
   * 
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * 
   * Single Responsibility: РћС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ hero СЃРµРєС†РёРё
   * Open/Closed: Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµС‚СЃСЏ С‡РµСЂРµР· РїСЂРѕРїСЃС‹, РЅРµ С‚СЂРµР±СѓРµС‚ РёР·РјРµРЅРµРЅРёР№ РІ РєРѕРґРµ
   * Liskov Substitution: РњРѕР¶РµС‚ Р±С‹С‚СЊ Р·Р°РјРµРЅРµРЅ РґСЂСѓРіРёРј РєРѕРјРїРѕРЅРµРЅС‚РѕРј Р»РµР№Р°СѓС‚Р° РїСЂРё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё
   * Interface Segregation: РРјРµРµС‚ РјРёРЅРёРјР°Р»СЊРЅС‹Р№, РєРѕРЅРєСЂРµС‚РЅС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ РґР»СЏ hero СЃРµРєС†РёРё
   * Dependency Inversion: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёРё СЃС‚РёР»РµР№ С‡РµСЂРµР· HeroStyleManager
   * 
   * РСЃРїРѕР»СЊР·СѓРµС‚ РїРѕРґС…РѕРґ Atomic Design (Organism) - РєРѕРјР±РёРЅРёСЂСѓРµС‚ РјРЅРѕР¶РµСЃС‚РІРѕ Р°С‚РѕРјРѕРІ Рё РјРѕР»РµРєСѓР»
   * (Р·Р°РіРѕР»РѕРІРєРё, СЃС‚Р°С‚РёСЃС‚РёРєР°, РєРЅРѕРїРєРё) РІ СЃР»РѕР¶РЅСѓСЋ, СЃР°РјРѕРґРѕСЃС‚Р°С‚РѕС‡РЅСѓСЋ СЃРµРєС†РёСЋ РёРЅС‚РµСЂС„РµР№СЃР°
   */
  
  import type { IHeroProps } from '$stylist/marketing/interface/component/hero/other';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
  import type { TokenSize } from '$stylist/layout/type/enum/size';
  import { HeroStyleManager } from '$stylist/marketing/class/style-manager/hero';
  import AnimatedNumber from '$stylist/interaction/svelte/atom/animation/animated-number/index.svelte';
  
  let {
    title,
    subtitle,
    stats = [],
    primaryCTA,
    secondaryCTA,
    backgroundVariant = 'gradient',
    backgroundImage,
    height = 'full',
    class: className = '',
    children
  }: IHeroProps = $props();
  const hostClass = className == null ? undefined : String(className);
  
  // Р’С‹С‡РёСЃР»СЏРµРјС‹Рµ СЃС‚РёР»Рё С‡РµСЂРµР· derived РґР»СЏ РёР·РѕР»СЏС†РёРё Р»РѕРіРёРєРё СЃС‚РёР»РёР·Р°С†РёРё
  const containerClasses = $derived(HeroStyleManager.getContainerClasses(height as TokenSize, hostClass));
  const backgroundClasses = $derived(HeroStyleManager.getBackgroundClasses(backgroundVariant as TokenBackground));
  const contentClasses = $derived(HeroStyleManager.getContentClasses());
  const titleClasses = $derived(HeroStyleManager.getTitleClasses());
  const subtitleClasses = $derived(HeroStyleManager.getSubtitleClasses());
  const statsContainerClasses = $derived(HeroStyleManager.getStatsContainerClasses());
  const statItemClasses = $derived(HeroStyleManager.getStatItemClasses());
  const statValueClasses = $derived(HeroStyleManager.getStatValueClasses());
  const statLabelClasses = $derived(HeroStyleManager.getStatLabelClasses());
  const ctaContainerClasses = $derived(HeroStyleManager.getCTAContainerClasses());
  const primaryCTAButtonClasses = $derived(HeroStyleManager.getCTAButtonClasses(true));
  const secondaryCTAButtonClasses = $derived(HeroStyleManager.getCTAButtonClasses(false));

  // РћР±СЂР°Р±РѕС‚С‡РёРєРё РєР»РёРєРѕРІ РїРѕ РєРЅРѕРїРєР°Рј
  function handlePrimaryClick() {
    if (primaryCTA?.onClick) {
      primaryCTA.onClick();
    }
  }
  
  function handleSecondaryClick() {
    if (secondaryCTA?.onClick) {
      secondaryCTA.onClick();
    }
  }
</script>

<div class={containerClasses} role="banner">
  <!-- Р¤РѕРЅРѕРІРѕРµ РёР·РѕР±СЂР°Р¶РµРЅРёРµ РёР»Рё РіСЂР°РґРёРµРЅС‚ -->
  {#if backgroundVariant === 'image' && backgroundImage}
    <div 
      class={backgroundClasses} 
      style={`background-image: url('${backgroundImage}'); opacity: var(--opacity-30);`}
      aria-hidden="true"
    ></div>
  {:else if backgroundVariant === 'gradient'}
    <div class={backgroundClasses} aria-hidden="true"></div>
  {:else if backgroundVariant === 'particles'}
    <!-- РџРѕРєР° С‡С‚Рѕ РїСЂРѕСЃС‚РѕР№ РіСЂР°РґРёРµРЅС‚ РІРјРµСЃС‚Рѕ С‡Р°СЃС‚РёС† -->
    <div class={backgroundClasses + ' [background-image:var(--gradient-cosmic)]'} aria-hidden="true"></div>
  {/if}

  <!-- РћСЃРЅРѕРІРЅРѕР№ РєРѕРЅС‚РµРЅС‚ -->
  <div class={contentClasses}>
    <h1 class={titleClasses} aria-label={title}>{title}</h1>
    
    {#if subtitle}
      <p class={subtitleClasses} aria-label={subtitle}>{subtitle}</p>
    {/if}

    {#if stats && stats.length > 0}
      <div class={statsContainerClasses}>
        {#each stats as stat}
          <div class={statItemClasses} aria-label={`${stat.label}: ${stat.value}`}>
            <div class={statValueClasses}>
              {#if typeof stat.value === 'number'}
                <AnimatedNumber value={stat.value} />
              {:else}
                {stat.value}
              {/if}
            </div>
            <div class={statLabelClasses}>{stat.label}</div>
          </div>
        {/each}
      </div>
    {/if}

    {#if primaryCTA || secondaryCTA}
      <div class={ctaContainerClasses}>
        {#if primaryCTA}
          <button 
            class={primaryCTAButtonClasses}
            onclick={handlePrimaryClick}
            type="button"
            aria-label={primaryCTA.label}
          >
            {primaryCTA.label}
          </button>
        {/if}
        
        {#if secondaryCTA}
          <button 
            class={secondaryCTAButtonClasses}
            onclick={handleSecondaryClick}
            type="button"
            aria-label={secondaryCTA.label}
          >
            {secondaryCTA.label}
          </button>
        {/if}
      </div>
    {/if}

    {#if children}
      <div class="mt-8">
        {@render children()}
      </div>
    {/if}
  </div>
</div>






