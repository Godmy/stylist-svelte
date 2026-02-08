/**
 * Определение светлой темы
 * Использует токены дизайна для создания согласованной светлой темы
 */

import { blue, slate, green, amber, red, neutral } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { fontSize, fontWeight, lineHeight, fontFamily } from '../tokens/typography';
import { borderRadius } from '../tokens/radius';
import { boxShadow } from '../tokens/shadows';
import type { Theme } from './types';

/**
 * Светлая тема
 * Определяет значения для светлого режима интерфейса
 */
export const lightTheme: Theme = {
	name: 'light',

	colors: {
		// Семантические цветовые сопоставления
		primary: blue, // Основной цвет
		secondary: slate, // Вторичный цвет
		success: green, // Цвет успеха
		warning: amber, // Цвет предупреждения
		danger: red, // Цвет опасности
		neutral: neutral, // Нейтральный цвет

		// Цвета поверхностей
		background: {
			primary: '#ffffff', // Основной фон
			secondary: '#f9fafb', // Вторичный фон
			tertiary: '#f3f4f6' // Третичный фон
		},

		// Цвета текста
		text: {
			primary: slate[900], // Основной текст (#0f172a)
			secondary: slate[600], // Вторичный текст (#475569)
			tertiary: slate[500], // Третичный текст (#64748b)
			inverse: '#ffffff' // Инвертированный текст
		},

		// Цвета границ
		border: {
			primary: slate[200], // Основная граница (#e2e8f0)
			secondary: slate[300], // Вторичная граница (#cbd5e1)
			tertiary: slate[100] // Третичная граница (#f1f5f9)
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
	boxShadow: boxShadow as Record<string, string> // Тени
};
