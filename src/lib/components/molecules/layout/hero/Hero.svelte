<script lang="ts">
  /**
   * Hero - полноэкранная секция заголовка с фоном и CTA
   * 
   * Следует принципам SOLID:
   * 
   * Single Responsibility: Отвечает только за отображение hero секции
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим компонентом лейаута при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для hero секции
   * Dependency Inversion: Зависит от абстракции стилей через HeroStyleManager
   * 
   * Использует подход Atomic Design (Organism) - комбинирует множество атомов и молекул
   * (заголовки, статистика, кнопки) в сложную, самодостаточную секцию интерфейса
   */
  
  import type { IHeroProps, HeroBackgroundVariant, HeroHeight } from './types';
  import { HeroStyleManager } from './styles';
  import AnimatedNumber from '../../../atoms/data-display/animated-number/AnimatedNumber.svelte';
  
  let {
    title,
    subtitle,
    stats = [],
    primaryCTA,
    secondaryCTA,
    backgroundVariant = 'gradient',
    backgroundImage,
    height = 'screen',
    class: className = '',
    children
  } = $props();
  
  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(HeroStyleManager.getContainerClasses(height as HeroHeight, className));
  const backgroundClasses = $derived(HeroStyleManager.getBackgroundClasses(backgroundVariant as HeroBackgroundVariant));
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

  // Обработчики кликов по кнопкам
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
  <!-- Фоновое изображение или градиент -->
  {#if backgroundVariant === 'image' && backgroundImage}
    <div 
      class={backgroundClasses} 
      style={`background-image: url('${backgroundImage}'); opacity: 0.3;`}
      aria-hidden="true"
    ></div>
  {:else if backgroundVariant === 'gradient'}
    <div class={backgroundClasses} aria-hidden="true"></div>
  {:else if backgroundVariant === 'particles'}
    <!-- Пока что простой градиент вместо частиц -->
    <div class={backgroundClasses + ' bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100'} aria-hidden="true"></div>
  {/if}

  <!-- Основной контент -->
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
              <AnimatedNumber value={stat.value} />
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