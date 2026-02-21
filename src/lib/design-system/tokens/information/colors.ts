/**
 * Цветовые палитры - Атомарные цветовые значения
 * Единый источник истины для всех цветовых значений в дизайн-системе
 */

/**
 * Интерфейс цветовой шкалы
 * Определяет структуру цветовой палитры с 10 оттенками от 50 до 900
 *
 * @property {string} 50 - Самый светлый оттенок цвета
 * @property {string} 100 - Очень светлый оттенок цвета
 * @property {string} 200 - Светлый оттенок цвета
 * @property {string} 300 - Светло-средний оттенок цвета
 * @property {string} 400 - Сlightly темнее среднего оттенка
 * @property {string} 500 - Средний/базовый оттенок цвета
 * @property {string} 600 - Сlightly темный оттенок
 * @property {string} 700 - Темный оттенок цвета
 * @property {string} 800 - Очень темный оттенок цвета
 * @property {string} 900 - Самый темный оттенок цвета
 */
export interface ColorScale {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
}

/**
 * Синяя палитра - Основной цвет
 * Используется для первичных действий и акцентов
 *
 * @example
 * ```ts
 * import { blue } from '$stylist/design-system/tokens';
 *
 * const primaryColor = blue[500]; // '#3b82f6'
 * ```
 */
export const blue: ColorScale = {
	50: '#eff6ff',
	100: '#dbeafe',
	200: '#bfdbfe',
	300: '#93c5fd',
	400: '#60a5fa',
	500: '#3b82f6',
	600: '#2563eb',
	700: '#1d4ed8',
	800: '#1e40af',
	900: '#1e3a8a'
};

/**
 * Серо-голубая палитра - Вторичные/нейтральные цвета
 * Используется для вторичных действий и фона
 *
 * @example
 * ```ts
 * import { slate } from '$stylist/design-system/tokens';
 *
 * const secondaryColor = slate[500]; // '#64748b'
 * ```
 */
export const slate: ColorScale = {
	50: '#f8fafc',
	100: '#f1f5f9',
	200: '#e2e8f0',
	300: '#cbd5e1',
	400: '#94a3b8',
	500: '#64748b',
	600: '#475569',
	700: '#334155',
	800: '#1e293b',
	900: '#0f172a'
};

/**
 * Зеленая палитра - Цвет успеха
 * Используется для обозначения успешных действий и положительных результатов
 *
 * @example
 * ```ts
 * import { green } from '$stylist/design-system/tokens';
 *
 * const successColor = green[500]; // '#22c55e'
 * ```
 */
export const green: ColorScale = {
	50: '#f0fdf4',
	100: '#dcfce7',
	200: '#bbf7d0',
	300: '#86efac',
	400: '#4ade80',
	500: '#22c55e',
	600: '#16a34a',
	700: '#15803d',
	800: '#166534',
	900: '#14532d'
};

/**
 * Оранжево-желтая палитра - Цвет предупреждения
 * Используется для обозначения предупреждений и ситуаций, требующих внимания
 *
 * @example
 * ```ts
 * import { amber } from '$stylist/design-system/tokens';
 *
 * const warningColor = amber[500]; // '#f59e0b'
 * ```
 */
export const amber: ColorScale = {
	50: '#fffbeb',
	100: '#fef3c7',
	200: '#fde68a',
	300: '#fcd34d',
	400: '#fbbf24',
	500: '#f59e0b',
	600: '#d97706',
	700: '#b45309',
	800: '#92400e',
	900: '#78350f'
};

/**
 * Красная палитра - Цвет опасности/ошибки
 * Используется для обозначения ошибок, удалений и критических ситуаций
 *
 * @example
 * ```ts
 * import { red } from '$stylist/design-system/tokens';
 *
 * const dangerColor = red[500]; // '#ef4444'
 * ```
 */
export const red: ColorScale = {
	50: '#fef2f2',
	100: '#fee2e2',
	200: '#fecaca',
	300: '#fca5a5',
	400: '#f87171',
	500: '#ef4444',
	600: '#dc2626',
	700: '#b91c1c',
	800: '#991b1b',
	900: '#7f1d1d'
};

/**
 * Нейтральная палитра - Серые цвета
 * Используется для вспомогательных элементов и фона
 *
 * @example
 * ```ts
 * import { neutral } from '$stylist/design-system/tokens';
 *
 * const neutralColor = neutral[500]; // '#737373'
 * ```
 */
export const neutral: ColorScale = {
	50: '#fafafa',
	100: '#f5f5f5',
	200: '#e5e5e5',
	300: '#d4d4d4',
	400: '#a3a3a3',
	500: '#737373',
	600: '#525252',
	700: '#404040',
	800: '#262626',
	900: '#171717'
};

/**
 * Бирюзовая палитра - Альтернативный цвет успеха/информации
 * Используется как альтернатива зеленому цвету для обозначения успеха или информации
 *
 * @example
 * ```ts
 * import { teal } from '$stylist/design-system/tokens';
 *
 * const infoColor = teal[500]; // '#14b8a6'
 * ```
 */
export const teal: ColorScale = {
	50: '#f0fdf9',
	100: '#ccfbf1',
	200: '#99f6e4',
	300: '#5eead4',
	400: '#2dd4bf',
	500: '#14b8a6',
	600: '#0d9488',
	700: '#0f766e',
	800: '#115e59',
	900: '#134e4a'
};

/**
 * Все цветовые палитры
 * Объект, содержащий все доступные цветовые палитры
 */
export const colorPalettes = {
	blue,
	slate,
	green,
	amber,
	red,
	neutral,
	teal
} as const;

/**
 * Тип, представляющий возможные имена цветовых палитр
 * Используется для типизации при работе с цветовыми палитрами
 */
export type ColorPaletteName = keyof typeof colorPalettes;
