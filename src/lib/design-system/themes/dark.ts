/**
 * Определение темной темы
 * Использует токены дизайна для создания согласованной темной темы
 */

import { blue, slate, teal, amber, red, neutral } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { fontSize, fontWeight, lineHeight, fontFamily } from '../tokens/typography';
import { borderRadius } from '../tokens/radius';
import { shadow } from '../tokens/shadows';
import type { Theme } from './types';

/**
 * Темная тема
 * Определяет значения для темного режима интерфейса
 */
export const darkTheme: Theme = {
	name: 'dark',

	colors: {
		// Семантические цветовые сопоставления (настроенные для темной темы)
		primary: blue, // Основной цвет
		secondary: slate, // Вторичный цвет
		success: teal, // Цвет успеха (используется бирюзовый вместо зеленого для лучшего контраста в темной теме)
		warning: amber, // Цвет предупреждения
		danger: red, // Цвет опасности
		neutral: neutral, // Нейтральный цвет

		// Цвета поверхностей (темные фоны)
		background: {
			primary: slate[900], // Основной фон (#0f172a)
			secondary: slate[800], // Вторичный фон (#1e293b)
			tertiary: slate[700] // Третичный фон (#334155)
		},

		// Цвета текста (светлый текст на темном фоне)
		text: {
			primary: slate[50], // Основной текст (#f8fafc)
			secondary: slate[300], // Вторичный текст (#cbd5e1)
			tertiary: slate[400], // Третичный текст (#94a3b8)
			inverse: slate[900] // Инвертированный текст (#0f172a)
		},

		// Цвета границ (светлые границы для темного режима)
		border: {
			primary: slate[600], // Основная граница (#475569)
			secondary: slate[700], // Вторичная граница (#334155)
			tertiary: slate[800] // Третичная граница (#1e293b)
		}
	},

	spacing, // Шкала отступов из токенов

	typography: {
		fontFamily: fontFamily.sans, // Семейство шрифтов
		fontSize: fontSize as Record<string, string>, // Размеры шрифта
		fontWeight: fontWeight as Record<string, string>, // Насыщенность шрифта
		lineHeight: lineHeight as Record<string, string> // Высота строк
	},

	borderRadius: borderRadius as Record<string, string>, // Скругления границ
	boxShadow: shadow as Record<string, string> // Тени
};

/**
 * Design System Default Theme (Light)
 * Базовая светлая тема дизайн-системы
 */
export const designSystemDefaultTheme: Theme = {
	name: 'light',
	colors: {
		primary: blue,
		secondary: slate,
		success: teal,
		warning: amber,
		danger: red,
		neutral: neutral,
		background: {
			primary: '#ffffff',
			secondary: slate[50],
			tertiary: slate[100]
		},
		text: {
			primary: slate[900],
			secondary: slate[600],
			tertiary: slate[500],
			inverse: '#ffffff'
		},
		border: {
			primary: slate[300],
			secondary: slate[200],
			tertiary: slate[100]
		}
	},
	spacing,
	typography: {
		fontFamily: fontFamily.sans,
		fontSize: fontSize as Record<string, string>,
		fontWeight: fontWeight as Record<string, string>,
		lineHeight: lineHeight as Record<string, string>
	},
	borderRadius: borderRadius as Record<string, string>,
	boxShadow: shadow as Record<string, string>
};

/**
 * Design System Dark Theme
 * Альтернативное экспортируемое имя для darkTheme
 */
export const designSystemDarkTheme = darkTheme;
