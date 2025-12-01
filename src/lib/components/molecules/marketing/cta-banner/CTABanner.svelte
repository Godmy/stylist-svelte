<script lang="ts">
  /**
   * CTABanner - баннер с призывом к действию и кнопками
   * 
   * Следует принципам SOLID:
   * 
   * Single Responsibility: Отвечает только за отображение CTA баннера
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим компонентом баннера при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для CTA баннера
   * Dependency Inversion: Зависит от абстракции стилей через CTABannerStyleManager
   * 
   * Использует подход Atomic Design (Organism) - комбинирует множество атомов и молекул
   * (заголовки, описания, кнопки) в сложную, самодостаточную секцию интерфейса
   */
  
  import type { ICTABannerProps, CTABannerBackgroundVariant } from './types';
  import { CTABannerStyleManager } from './styles';
  import Button from '../../../atoms/controls/buttons/button/Button.svelte';
  
  let {
    title,
    description,
    buttons = [],
    backgroundVariant = 'gradient',
    backgroundImage,
    class: className = ''
  } = $props();
  
  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(`${CTABannerStyleManager.getContainerClasses()} ${className}`.trim());
  const backgroundClasses = $derived(CTABannerStyleManager.getBackgroundClasses(backgroundVariant as import('./types').CTABannerBackgroundVariant));
  const contentClasses = $derived(CTABannerStyleManager.getContentClasses());
  const titleClasses = $derived(CTABannerStyleManager.getTitleClasses());
  const descriptionClasses = $derived(CTABannerStyleManager.getDescriptionClasses());
  const buttonsContainerClasses = $derived(CTABannerStyleManager.getButtonsContainerClasses());

  // Функция для получения классов для кнопки
  function getButtonClasses(variant: 'primary' | 'secondary' | 'outline') {
    return CTABannerStyleManager.getButtonClasses(variant);
  }

  // Обработчики кликов по кнопкам
  function handleButtonClick(onClick: () => void) {
    onClick();
  }
</script>

<section class={containerClasses} role="banner" aria-label={`CTA Banner: ${title}`}>
  <!-- Фоновое изображение или градиент -->
  {#if backgroundVariant === 'image' && backgroundImage}
    <div 
      class={backgroundClasses} 
      style={`background-image: url('${backgroundImage}');`}
      aria-hidden="true"
    ></div>
  {:else}
    <div class={backgroundClasses} aria-hidden="true"></div>
  {/if}

  <!-- Основной контент -->
  <div class={contentClasses}>
    <h2 class={titleClasses} aria-label={title}>{title}</h2>
    
    {#if description}
      <p class={descriptionClasses} aria-label={description}>{description}</p>
    {/if}

    {#if buttons && buttons.length > 0}
      <div class={buttonsContainerClasses}>
        {#each buttons as button}
          <button
            class={getButtonClasses(button.variant)}
            onclick={() => handleButtonClick(button.onClick)}
            type="button"
            aria-label={button.label}
          >
            {button.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</section>