/**
 * Типы и интерфейсы для компонента MetricCard
 * 
 * MetricCard - компонент, отображающий метрику с прогресс-баром
 * и дополнительной информацией. Следует принципам SOLID:
 * 
 * Single Responsibility: Компонент отвечает только за отображение метрики
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим компонентом метрик
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

export type MetricCardVariant = 'success' | 'warning' | 'danger' | 'info';

export interface IMetricCardProps {
  /** Название метрики */
  title: string;
  
  /** Значение метрики */
  value: number;
  
  /** Максимальное значение для расчёта прогресса */
  max: number;
  
  /** Процентное значение метрики (для отображения) */
  percentage: number;
  
  /** Описание метрики */
  description?: string;
  
  /** Вариант оформления */
  variant?: MetricCardVariant;
  
  /** Показывать ли прогресс-бар */
  showProgressBar?: boolean; // default: true
  
  /** Дополнительные CSS классы */
  class?: string;
}