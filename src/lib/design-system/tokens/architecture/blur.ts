/**
 * Токены размытия - Значения blur для фильтров и backdrop
 *
 * @example
 * ```ts
 * import { blur, backdropBlur } from '$stylist/design-system/tokens';
 *
 * const modalStyle = {
 *   backdropFilter: `blur(${backdropBlur.md})`,
 *   filter: `blur(${blur.sm})`
 * };
 * ```
 */

/**
 * Объект, содержащий значения blur для фильтров
 * Используется для создания эффектов размытия элементов
 *
 * @property {string} 0 - Без размытия
 * @property {string} sm - Маленькое размытие (4px)
 * @property {string} md - Среднее размытие (8px)
 * @property {string} lg - Большое размытие (16px)
 * @property {string} xl - Очень большое размытие (24px)
 * @property {string} 2xl - Экстремальное размытие (40px)
 * @property {string} 3xl - Максимальное размытие (64px)
 */
export const blur = {
	0: '0',
	sm: '4px',
	md: '8px',
	lg: '16px',
	xl: '24px',
	'2xl': '40px',
	'3xl': '64px'
} as const;

/**
 * Тип, представляющий возможные ключи blur
 */
export type BlurKey = keyof typeof blur;

/**
 * Объект, содержащий значения backdrop blur
 * Используется для размытия фона элементов (стеклянный эффект)
 *
 * @property {string} 0 - Без размытия
 * @property {string} sm - Маленькое размытие (4px)
 * @property {string} md - Среднее размытие (12px)
 * @property {string} lg - Большое размытие (16px)
 * @property {string} xl - Очень большое размытие (24px)
 * @property {string} 2xl - Экстремальное размытие (40px)
 */
export const backdropBlur = {
	0: '0',
	sm: '4px',
	md: '12px',
	lg: '16px',
	xl: '24px',
	'2xl': '40px'
} as const;

/**
 * Тип, представляющий возможные ключи backdrop blur
 */
export type BackdropBlurKey = keyof typeof backdropBlur;

/**
 * Объект, объединяющий все токены размытия
 */
export const blurTokens = {
	blur,
	backdropBlur
} as const;
