<script lang="ts">
  /**
   * LinkCard - компонент для отображения карточки-ссылки для быстрых переходов
   * 
   * Следует принципам SOLID:
   * 
   * Single Responsibility: Отвечает только за отображение карточки-ссылки
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим компонентом навигации при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для навигации
   * Dependency Inversion: Зависит от абстракции стилей через LinkCardStyleManager
   * 
   * Использует подход Atomic Design (Molecule) - комбинирует базовые элементы
   * (иконка, текст, стрелка) в составной компонент для навигации
   */
  
  import type { ILinkCardProps, LinkCardVariant } from '$stylist/design-system/props/link-card';
  import { LinkCardStyleManager } from '$stylist/design-system/styles/link-card';
  import { ArrowRight } from 'lucide-svelte';
  
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
  
  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(`${LinkCardStyleManager.getContainerClasses(variant)} ${className}`.trim());
  const contentClasses = $derived(LinkCardStyleManager.getContentClasses());
  const iconContainerClasses = $derived(LinkCardStyleManager.getIconContainerClasses());
  const iconClasses = $derived(LinkCardStyleManager.getIconClasses());
  const textContainerClasses = $derived(LinkCardStyleManager.getTextContainerClasses());
  const titleClasses = $derived(LinkCardStyleManager.getTitleClasses());
  const descriptionClasses = $derived(LinkCardStyleManager.getDescriptionClasses());
  const arrowClasses = $derived(LinkCardStyleManager.getArrowClasses());

  // Определяем target в зависимости от пропса newTab
  const linkTarget = $derived(newTab ? '_blank' : '_self');
  
  // Определяем rel для безопасности при newTab
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
      <ArrowRight class={arrowClasses} aria-hidden="true" />
    {/if}
  </div>
</a>