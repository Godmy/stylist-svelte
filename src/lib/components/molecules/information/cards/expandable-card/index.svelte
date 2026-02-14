<script lang="ts">
  import type { IExpandableCardProps } from '$stylist/design-system/props/expandable-card';
  import { ExpandableCardStyleManager } from '$stylist/design-system/styles/expandable-card';
  import { ChevronDown } from 'lucide-svelte';

  /**
   * Компонент ExpandableCard - карточка с возможностью раскрытия/сворачивания деталей
   *
   * Следует принципам SOLID:
   * - Принцип единственной ответственности (SRP): компонент отвечает только за отображение раскрываемой карточки
   * - Принцип открытости/закрытости (OCP): легко расширяем через пропсы и стили
   * - Принцип подстановки Лисков (LSP): можно использовать как замену стандартной карточке
   * - Принцип разделения интерфейса (ISP): четко определенный интерфейс пропсов
   * - Принцип инверсии зависимостей (DIP): зависит от абстракций (стилей через ExpandableCardStyleManager)
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
  }: IExpandableCardProps = $props();

  let isExpanded = $state(defaultExpanded);

  function toggleExpanded() {
    if (!disabled) {
      isExpanded = !isExpanded;
    }
  }

  // Вычисляем стили с использованием ExpandableCardStyleManager
  const baseClasses = $derived(ExpandableCardStyleManager.getBaseClasses());
  const themedClasses = $derived(ExpandableCardStyleManager.getThemedClasses({ variant }));
  const containerClasses = $derived(
    `${baseClasses} ${themedClasses} ${className}`.trim()
  );
  const headerClasses = $derived(
    `${ExpandableCardStyleManager.getHeaderClasses(disabled)} ${headerClass}`.trim()
  );
  const titleClasses = $derived(ExpandableCardStyleManager.getTitleClasses());
  const subtitleClasses = $derived(ExpandableCardStyleManager.getSubtitleClasses());
  const summaryContainerClasses = $derived(
    `${ExpandableCardStyleManager.getSummaryClasses()} ${summaryClass}`.trim()
  );
  const chevronClasses = $derived(
    ExpandableCardStyleManager.getChevronClasses(isExpanded, chevronClass)
  );
  const detailsContainerClasses = $derived(
    ExpandableCardStyleManager.getDetailsContainerClasses(isExpanded)
  );
  const detailsContentClasses = $derived(
    `${ExpandableCardStyleManager.getDetailsContentClasses()} ${detailsClass}`.trim()
  );
</script>

<div class={containerClasses} {...restProps}>
  <button
    class={headerClasses}
    onclick={toggleExpanded}
    aria-expanded={isExpanded}
    aria-controls="expandable-card-content"
    disabled={disabled}
  >
    <div class="flex-1">
      <h3 class={titleClasses}>{title}</h3>
      {#if subtitle}
        <p class={subtitleClasses}>{subtitle}</p>
      {/if}
      <div class={summaryContainerClasses}>
        {@render summary()}
      </div>
    </div>

    <ChevronDown
      class={chevronClasses}
    />
  </button>

  <div
    id="expandable-card-content"
    class={detailsContainerClasses}
  >
    <div class={detailsContentClasses}>
      {@render details()}
    </div>
  </div>
</div>