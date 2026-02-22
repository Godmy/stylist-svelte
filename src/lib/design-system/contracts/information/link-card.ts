/**
 * Типы и интерфейсы для компонента LinkCard
 * 
 * LinkCard - компонент для отображения карточки-ссылки для быстрых переходов
 * Следует принципам SOLID:
 * 
 * Single Responsibility: Компонент отвечает только за отображение карточки-ссылки
 * Open/Closed: Легко расширяется через пропсы
 * Liskov Substitution: Может быть заменен другим компонентом навигации
 * Interface Segregation: Имеет минимальный, конкретный интерфейс
 * Dependency Inversion: Зависит от абстракций, а не от конкретных реализаций
 */

export type LinkCardVariant = 'default' | 'primary' | 'secondary' | 'outline';

export interface ILinkCardProps {
  /** Заголовок карточки */
  title: string;
  
  /** Описание карточки */
  description?: string;
  
  /** URL для перехода */
  href: string;
  
  /** Открывать ли ссылку в новой вкладке */
  newTab?: boolean; // default: false
  
  /** Вариант оформления */
  variant?: LinkCardVariant;
  
  /** Иконка для карточки */
  icon?: string;
  
  /** Показывать ли стрелку перехода */
  showArrow?: boolean; // default: true
  
  /** Дополнительные CSS классы */
  class?: string;
}