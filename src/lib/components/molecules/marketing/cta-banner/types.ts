/**
 * Типы и интерфейсы для компонента CTABanner
 * 
 * CTABanner - баннер с призывом к действию и кнопками
 * Следует принципам SOLID:
 * 
 * Single Responsibility: Компонент отвечает только за отображение CTA баннера
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим компонентом баннера
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

export type CTABannerButton = {
  label: string;
  variant: 'primary' | 'secondary' | 'outline';
  onClick: () => void;
};

export type CTABannerBackgroundVariant = 'gradient' | 'solid' | 'image';

export interface ICTABannerProps {
  /** Заголовок баннера */
  title: string;
  
  /** Описание баннера */
  description?: string;
  
  /** Кнопки действия */
  buttons: CTABannerButton[];
  
  /** Вариант фона */
  backgroundVariant?: CTABannerBackgroundVariant;
  
  /** URL фонового изображения */
  backgroundImage?: string;
  
  /** Дополнительные CSS классы */
  class?: string;
}