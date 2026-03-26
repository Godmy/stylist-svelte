import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
import type { TokenSize } from '$stylist/architecture/type/token/size';

export interface TransformationProps extends InteractionHTMLAttributes<HTMLDivElement> {
	/** Масштаб (0-2) */
	scale?: number;
	/** Поворот в градусах (0-360) */
	rotate?: number;
	/** Смещение по оси X */
	translateX?: string | number;
	/** Смещение по оси Y */
	translateY?: string | number;
	/** Наклон по оси X (градусы) */
	skewX?: number;
	/** Наклон по оси Y (градусы) */
	skewY?: number;
	/** Точка трансформации */
	transformOrigin?: 'center' | 'top' | 'bottom' | 'left' | 'right' | string;
	/** Длительность анимации (мс) */
	duration?: number;
	/** Функция плавности анимации */
	easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | string;
	/** Задержка анимации (мс) */
	delay?: number;
	/** Применять анимацию при наведении */
	animateOnHover?: boolean;
	/** Применять анимацию при клике */
	animateOnClick?: boolean;
	/** Зациклить анимацию */
	animateInfinite?: boolean;
	/** Блокировка трансформации */
	disabled?: boolean;
}
