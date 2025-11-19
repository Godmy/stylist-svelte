<script lang="ts">
  /**
   * PageHeader - заголовок страницы с breadcrumbs и описанием
   * 
   * Следует принципам SOLID:
   * 
   * Single Responsibility: Отвечает только за отображение заголовка страницы
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим компонентом навигации при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для заголовка страницы
   * Dependency Inversion: Зависит от абстракции стилей через PageHeaderStyleManager
   * 
   * Использует подход Atomic Design (Organism) - комбинирует множество атомов и молекул
   * (навигация, заголовки, действия) в сложную, самодостаточную секцию интерфейса
   */
  
  import type { IPageHeaderProps } from './types';
  import { PageHeaderStyleManager } from './styles';
  import Link from '../../../atoms/typography/link/Link.svelte';
  
  let {
    title,
    description,
    breadcrumbs = [],
    actions,
    class: className = ''
  } = $props<IPageHeaderProps>();
  
  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(PageHeaderStyleManager.getContainerClasses(className));
  const breadcrumbsContainerClasses = $derived(PageHeaderStyleManager.getBreadcrumbsContainerClasses());
  const breadcrumbsListClasses = $derived(PageHeaderStyleManager.getBreadcrumbsListClasses());
  const titleClasses = $derived(PageHeaderStyleManager.getTitleClasses());
  const descriptionClasses = $derived(PageHeaderStyleManager.getDescriptionClasses());
  const actionsContainerClasses = $derived(PageHeaderStyleManager.getActionsContainerClasses());
  const contentClasses = $derived(PageHeaderStyleManager.getContentClasses());

  // Функция для получения классов для элемента хлебных крошек
  function getBreadcrumbItemClasses(isLast: boolean) {
    return PageHeaderStyleManager.getBreadcrumbItemClasses(isLast);
  }
  
  // Функция для получения классов для разделителя
  function getBreadcrumbSeparatorClasses() {
    return PageHeaderStyleManager.getBreadcrumbSeparatorClasses();
  }
</script>

<div class={containerClasses} role="banner">
  <div class="container mx-auto px-4 py-6">
    <div class={actionsContainerClasses}>
      <div class={contentClasses}>
        {#if breadcrumbs && breadcrumbs.length > 0}
          <div class={breadcrumbsContainerClasses}>
            <nav class={breadcrumbsListClasses} aria-label="Breadcrumb">
              {#each breadcrumbs as breadcrumb, index}
                {#if breadcrumb.href}
                  <Link 
                    href={breadcrumb.href}
                    class={getBreadcrumbItemClasses(index === breadcrumbs.length - 1)}
                    aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                  >
                    {breadcrumb.label}
                  </Link>
                {:else}
                  <span 
                    class={getBreadcrumbItemClasses(index === breadcrumbs.length - 1)}
                    aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                  >
                    {breadcrumb.label}
                  </span>
                {/if}
                
                {#if index < breadcrumbs.length - 1}
                  <span class={getBreadcrumbSeparatorClasses()} aria-hidden="true">/</span>
                {/if}
              {/each}
            </nav>
          </div>
        {/if}
        
        <h1 class={titleClasses} aria-label={title}>{title}</h1>
        
        {#if description}
          <p class={descriptionClasses} aria-label={description}>{description}</p>
        {/if}
      </div>
      
      {#if actions}
        <div class="ml-4 flex-shrink-0">
          {@render actions()}
        </div>
      {/if}
    </div>
  </div>
</div>