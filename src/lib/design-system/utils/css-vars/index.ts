/**
 * Генератор CSS переменных
 * Автоматически создает CSS кастомные свойства из объектов тем
 */

import type { Theme } from '../../themes/types';
import type { ColorScale } from '../../tokens/information/colors';

/**
 * Сглаживает вложенный объект в формат CSS переменных
 * Пример: { colors: { primary: { 500: '#000' } } } => '--color-primary-500: #000'
 * @param obj Объект для преобразования
 * @param prefix Префикс для ключей (опционально)
 * @param result Результирующий объект для накопления (опционально)
 * @returns Объект с плоской структурой переменных CSS
 */
function flattenObject(
	obj: any,
	prefix = '',
	result: Record<string, string> = {}
): Record<string, string> {
	for (const [key, value] of Object.entries(obj)) {
		const newKey = prefix ? `${prefix}-${key}` : key;

		if (value && typeof value === 'object' && !Array.isArray(value)) {
			flattenObject(value, newKey, result);
		} else {
			result[newKey] = String(value);
		}
	}

	return result;
}

/**
 * Преобразует объект темы в объект CSS переменных
 * @param theme Объект темы для преобразования
 * @returns Объект с CSS переменными, сгенерированными из темы
 */
export function themeToCSSVars(theme: Theme): Record<string, string> {
	const vars: Record<string, string> = {};

	// Обработка цветов
	// Основная палитра
	Object.entries(theme.colors.primary).forEach(([shade, color]) => {
		vars[`color-primary-${shade}`] = color;
	});

	// Вторичная палитра
	Object.entries(theme.colors.secondary).forEach(([shade, color]) => {
		vars[`color-secondary-${shade}`] = color;
	});

	// Палитра успеха
	Object.entries(theme.colors.success).forEach(([shade, color]) => {
		vars[`color-success-${shade}`] = color;
	});

	// Палитра предупреждения
	Object.entries(theme.colors.warning).forEach(([shade, color]) => {
		vars[`color-warning-${shade}`] = color;
	});

	// Палитра опасности
	Object.entries(theme.colors.danger).forEach(([shade, color]) => {
		vars[`color-danger-${shade}`] = color;
	});

	// Нейтральная палитра
	Object.entries(theme.colors.neutral).forEach(([shade, color]) => {
		vars[`color-neutral-${shade}`] = color;
	});

	// Цвета фона
	vars['color-bg-primary'] = theme.colors.background.primary; // Основной фон
	vars['color-bg-secondary'] = theme.colors.background.secondary; // Вторичный фон
	vars['color-bg-tertiary'] = theme.colors.background.tertiary; // Третичный фон

	// Цвета текста
	vars['color-text-primary'] = theme.colors.text.primary; // Основной текст
	vars['color-text-secondary'] = theme.colors.text.secondary; // Вторичный текст
	vars['color-text-tertiary'] = theme.colors.text.tertiary; // Третичный текст
	vars['color-text-inverse'] = theme.colors.text.inverse; // Инвертированный текст

	// Цвета границ
	vars['color-border-primary'] = theme.colors.border.primary; // Основная граница
	vars['color-border-secondary'] = theme.colors.border.secondary; // Вторичная граница
	vars['color-border-tertiary'] = theme.colors.border.tertiary; // Третичная граница

	// Отступы
	Object.entries(theme.spacing).forEach(([key, value]) => {
		vars[`spacing-${key}`] = value;
	});

	// Типографика
	Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
		vars[`font-size-${key}`] = value;
	});

	Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
		vars[`font-weight-${key}`] = value;
	});

	Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
		vars[`line-height-${key}`] = value;
	});

	vars['font-family-sans'] = theme.typography.fontFamily; // Семейство шрифтов

	// Скругления границ
	Object.entries(theme.borderRadius).forEach(([key, value]) => {
		vars[`radius-${key}`] = value;
	});

	// Тени
	Object.entries(theme.boxShadow).forEach(([key, value]) => {
		vars[`shadow-${key}`] = value;
	});

	return vars;
}

/**
 * Применяет CSS переменные к DOM элементу
 * @param element DOM элемент для применения переменных
 * @param vars Объект с CSS переменными в формате --имя: значение
 */
export function applyCSSVars(element: HTMLElement, vars: Record<string, string>): void {
	Object.entries(vars).forEach(([key, value]) => {
		element.style.setProperty(`--${key}`, value);
	});
}

/**
 * Удаляет CSS переменные из DOM элемента
 * @param element DOM элемент для удаления переменных
 * @param varNames Массив имен переменных для удаления (без префикса --)
 */
export function removeCSSVars(element: HTMLElement, varNames: string[]): void {
	varNames.forEach((name) => {
		element.style.removeProperty(`--${name}`);
	});
}

/**
 * Применяет тему к корневому элементу документа
 * @param theme Объект темы для применения
 * @param element Целевой DOM элемент (по умолчанию document.documentElement)
 */
export function applyThemeToDOM(
	theme: Theme,
	element: HTMLElement = document.documentElement
): void {
	const vars = themeToCSSVars(theme);
	applyCSSVars(element, vars);

	// Устанавливает атрибут данных для CSS селекторов
	element.setAttribute('data-theme', theme.name);
}

/**
 * Генерирует CSS строку из темы (для статической генерации CSS)
 * @param theme Объект темы для генерации CSS
 * @param selector CSS селектор для применения переменных (по умолчанию :root)
 * @returns Строка CSS с переменными темы
 */
export function generateThemeCSS(theme: Theme, selector = ':root'): string {
	const vars = themeToCSSVars(theme);
	const cssVars = Object.entries(vars)
		.map(([key, value]) => `  --${key}: ${value};`)
		.join('\n');

	return `${selector} {\n${cssVars}\n}`;
}
