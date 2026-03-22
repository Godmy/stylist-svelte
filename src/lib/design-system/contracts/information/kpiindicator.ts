/**
 * Типы и интерфейсы для компонента KPIIndicator
 * Соответствует принципу SOLID - обеспечивает строгую типизацию и изоляцию контрактов компонента
 */

import type { InformationHTMLAttributes } from '$stylist/design-system/html/attributes/information';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenTrend } from '$stylist/design-system/tokens/information/trend';
import type { TokenKPI } from '$stylist/design-system/tokens/interaction/kpi';

/**
 * Варианты статуса KPI индикатора
 */
/**
 * Варианты тренда для KPI индикатора
 */
/**
 * Варианты размера KPI индикатора
 */

/**
 * Пропсы для компонента KPIIndicator
 * 
 * Принципы SOLID:
 * - SRP: Интерфейс определяет только то, что нужно для KPIIndicator
 * - ISP: Пользователи могут использовать только нужные им свойства
 */
export interface IKPIIndicatorProps extends InformationHTMLAttributes<HTMLDivElement> {
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
  status?: TokenKPI;
  
  /**
   * Направление тренда
   * @default 'neutral'
   */
  trend?: TokenTrend;
  
  /**
   * Значение тренда в процентах
   * @default 0
   */
  trendValue?: number;
  
  /**
   * Размер компонента
   * @default 'md'
   */
  size?: TokenSize;
  
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








