<script lang="ts">
  import type { IDashboardCardProps } from './types';
  import { DashboardCardStyleManager } from './styles';
  import type { Snippet } from 'svelte';

  /**
   * Компонент DashboardCard - карточка для отображения информации с возможностью сворачивания
   *
   * Следует принципам SOLID:
   * - Принцип единственной ответственности (SRP): компонент отвечает только за отображение карточки
   * - Принцип открытости/закрытости (OCP): легко расширяем через пропсы и стили
   * - Принцип подстановки Лисков (LSP): можно использовать как замену стандартному контейнеру
   * - Принцип разделения интерфейса (ISP): четко определенный интерфейс пропсов
   * - Принцип инверсии зависимостей (DIP): зависит от абстракций (стилей через DashboardCardStyleManager)
   */
  const props: IDashboardCardProps = $props();

  let {
    title = props.title,
    subtitle = props.subtitle,
    content = props.content,
    actions = props.actions,
    footer = props.footer,
    collapsible = props.collapsible ?? false,
    initiallyCollapsed = props.initiallyCollapsed ?? false,
    class: className = props.class ?? '',
    headerClass = props.headerClass ?? '',
    bodyClass = props.bodyClass ?? '',
    footerClass = props.footerClass ?? '',
    variant = 'default',
    ...restProps
  } = props;

  let isCollapsed = $state(initiallyCollapsed);

  // Вычисляем стили с использованием DashboardCardStyleManager
  const containerClasses = $derived(
    `${DashboardCardStyleManager.getContainerClasses()}
    ${DashboardCardStyleManager.getBaseClasses(variant)}
    ${className}`.trim()
  );
  const headerClasses = $derived(
    `${DashboardCardStyleManager.getHeaderClasses()}
    ${headerClass}`.trim()
  );
  const titleClasses = $derived(DashboardCardStyleManager.getTitleClasses());
  const subtitleClasses = $derived(DashboardCardStyleManager.getSubtitleClasses());
  const bodyClasses = $derived(
    `${DashboardCardStyleManager.getBodyClasses()}
    ${bodyClass}`.trim()
  );
  const footerClasses = $derived(
    `${DashboardCardStyleManager.getFooterClasses()}
    ${footerClass}`.trim()
  );
  const toggleClasses = $derived(DashboardCardStyleManager.getToggleClasses(isCollapsed));
</script>

<div class={containerClasses} {...restProps}>
  {#if title || actions}
    <div class={headerClasses}>
      <div>
        {#if title}
          <h3 class={titleClasses}>{title}</h3>
        {/if}
        {#if subtitle}
          <p class={subtitleClasses}>{subtitle}</p>
        {/if}
      </div>
      <div class="flex items-center space-x-2">
        {#if actions}
          {@render actions()}
        {/if}
        {#if collapsible}
          <button
            type="button"
            class={toggleClasses}
            onclick={() => isCollapsed = !isCollapsed}
            aria-label={isCollapsed ? 'Развернуть' : 'Свернуть'}
          >
            <svg
              class="h-5 w-5 transform transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        {/if}
      </div>
    </div>
  {/if}

  {#if !isCollapsed}
    <div class={bodyClasses}>
      {@render content()}
    </div>

    {#if footer}
      <div class={footerClasses}>
        {@render footer()}
      </div>
    {/if}
  {/if}
</div>