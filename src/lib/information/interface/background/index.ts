import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';
import type { TokenBackground } from '$stylist/information/type/token/background';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';

export interface BackgroundProps extends InformationHTMLAttributes<HTMLDivElement> {
	/** Тип фона */
	background?: TokenBackground;
	/** Цвет фона (CSS value или токен) */
	backgroundColor?: string;
	/** URL изображения для фона */
	backgroundImage?: string;
	/** Позиционирование фонового изображения */
	backgroundPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right' | string;
	/** Размер фонового изображения */
	backgroundSize?: 'cover' | 'contain' | 'auto' | string;
	/** Повторение фона */
	backgroundRepeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
	/** Градиент (если background='gradient') */
	gradient?: string;
	/** Прозрачность фона (0-1) */
	opacity?: number;
	/** Вариант отображения */
	variant?: TokenAppearance;
}
