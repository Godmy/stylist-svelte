/**
 * Типы и интерфейсы для компонента KPIIndicator
 * Соответствует принципу SOLID - обеспечивает строгую типизацию и изоляцию контрактов компонента
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Варианты статуса KPI индикатора
 */
export type KPIStatus = 'on-track' | 'at-risk' | 'off-track' | 'exceeded';

/**
 * Варианты тренда для KPI индикатора
 */
export type KPITrend = 'up' | 'down' | 'neutral';

/**
 * Варианты размера KPI индикатора
 */
export type KPIIndicatorSize = 'sm' | 'md' | 'lg';

/**
 * Пропсы для компонента KPIIndicator
 * 
 * Принципы SOLID:
 * - SRP: Интерфейс определяет только то, что нужно для KPIIndicator
 * - ISP: Пользователи могут использовать только нужные им свойства
 */
export interface IKPIIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Заголовок KPI индикатора
   */
  title: string;
  
  /**
   * Текущее значение
   */
  currentValue: number;
  
  /**
   * Целевое значение
   */
  targetValue: number;
  
  /**
   * Единица измерения (например, '%', '$', 'ч.')
   */
  unit?: string;
  
  /**
   * Статус KPI
   * @default 'on-track'
   */
  status?: KPIStatus;
  
  /**
   * Направление тренда
   * @default 'neutral'
   */
  trend?: KPITrend;
  
  /**
   * Значение тренда в процентах
   * @default 0
   */
  trendValue?: number;
  
  /**
   * Размер компонента
   * @default 'md'
   */
  size?: KPIIndicatorSize;
  
  /**
   * Дополнительные CSS-классы для контейнера
   */
  class?: string;
  
  /**
   * Дополнительные CSS-классы для заголовка
   */
  titleClass?: string;
  
  /**
   * Дополнительные CSS-классы для значения
   */
  valueClass?: string;
}