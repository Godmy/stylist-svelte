<script lang="ts">
  /**
   * MetricCard - компонент для отображения метрики с прогресс-баром
   * 
   * Следует принципам SOLID:
   * 
   * Single Responsibility: Отвечает только за отображение метрики с прогресс-баром
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим компонентом метрик при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для метрики
   * Dependency Inversion: Зависит от абстракции стилей через MetricCardStyleManager
   * 
   * Использует подход Atomic Design (Molecule) - комбинирует базовые элементы
   * (заголовок, значение, прогресс-бар) в составной компонент для отображения метрики
   */
  
  import type { IMetricCardProps, MetricCardVariant } from '$stylist/design-system/props/metric-card';
  import { MetricCardStyleManager } from '$stylist/design-system/styles/metric-card';
  
  let {
    title,
    value,
    max,
    percentage,
    description,
    variant = 'info',
    showProgressBar = true,
    class: className = ''
  }: IMetricCardProps = $props();
  
  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(MetricCardStyleManager.getContainerClasses(className));
  const titleClasses = $derived(MetricCardStyleManager.getTitleClasses());
  const valueClasses = $derived(MetricCardStyleManager.getValueClasses());
  const descriptionClasses = $derived(MetricCardStyleManager.getDescriptionClasses());
  const progressBarContainerClasses = $derived(MetricCardStyleManager.getProgressBarContainerClasses());
  const progressBarClasses = $derived(MetricCardStyleManager.getProgressBarClasses());
  const progressBarFillClasses = $derived(MetricCardStyleManager.getProgressBarFillClasses(variant, percentage));
  const percentageClasses = $derived(MetricCardStyleManager.getPercentageClasses(variant));

  // Определяем ширину прогресс-бара как derived значение
  const progressBarWidth = $derived(`${Math.min(100, Math.max(0, percentage))}%`);
</script>

<div class={containerClasses} role="region" aria-label={`Metric: ${title}`}>
  <h3 class={titleClasses} aria-label={`Metric title: ${title}`}>{title}</h3>
  <div class={valueClasses} aria-label={`Value: ${value}`}>
    {value}
  </div>
  {#if description}
    <p class={descriptionClasses} aria-label={`Description: ${description}`}>
      {description}
    </p>
  {/if}
  
  {#if showProgressBar}
    <div class={progressBarContainerClasses}>
      <div class={progressBarClasses} role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" aria-label={`Progress: ${percentage}%`}>
        <div
          class={progressBarFillClasses}
          style={`width: ${progressBarWidth};`}
          aria-hidden="true"
        ></div>
      </div>
      <div class={percentageClasses}>
        {percentage}%
      </div>
    </div>
  {/if}
</div>