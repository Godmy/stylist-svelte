import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ChildrenHtmlAttributes } from '$stylist/design-system/html/attributes/children';
import type { Background } from '$stylist/design-system/tokens/information/background';
import type { Height } from '$stylist/design-system/tokens/architecture/size';

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

export interface IHeroProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
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
  backgroundVariant?: Background;

  /** URL фонового изображения */
  backgroundImage?: string;

  /** Высота секции */
  height?: Height; // default: 'screen'
}





