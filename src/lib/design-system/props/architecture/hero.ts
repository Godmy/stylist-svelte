/**
 * Типы и интерфейсы для компонента Hero
 * 
 * Hero - полноэкранная секция заголовка с фоном и CTA
 * Следует принципам SOLID:
 * 
 * Single Responsibility: Компонент отвечает только за отображение hero секции
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим компонентом лейаута
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

export interface IHeroStat {
  label: string;
  value: string | number;
}

export interface IHeroCTA {
  label: string;
  onClick: () => void;
}

export type HeroBackgroundVariant = 'gradient' | 'particles' | 'image';
export type HeroHeight = 'screen' | 'large' | 'medium';

export interface IHeroProps {
  /** Заголовок hero секции */
  title: string;
  
  /** Подзаголовок hero секции */
  subtitle?: string;
  
  /** Статистика для отображения */
  stats?: IHeroStat[];
  
  /** Основная кнопка действия */
  primaryCTA?: IHeroCTA;
  
  /** Второстепенная кнопка действия */
  secondaryCTA?: IHeroCTA;
  
  /** Вариант фона */
  backgroundVariant?: HeroBackgroundVariant;
  
  /** URL фонового изображения */
  backgroundImage?: string;
  
  /** Высота секции */
  height?: HeroHeight; // default: 'screen'
  
  /** Дополнительные CSS классы */
  class?: string;
  
  /** Слот для дополнительного контента */
  children?: import('svelte').Snippet;
}