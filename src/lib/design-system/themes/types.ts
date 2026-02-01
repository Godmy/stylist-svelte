/**
 * Определения типов темы
 */

import type { ColorScale } from '../tokens/colors';

/**
 * Семантические сопоставления цветов для темы
 */
export interface ThemeColors {
  // Семантические цветовые шкалы
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  danger: ColorScale;
  neutral: ColorScale;

  // Цвета поверхностей
  background: {
    primary: string;    // Основной фон
    secondary: string;  // Вторичный фон
    tertiary: string;   // Третичный фон
  };

  // Цвета текста
  text: {
    primary: string;    // Основной текст
    secondary: string;  // Вторичный текст
    tertiary: string;   // Третичный текст
    inverse: string;    // Инвертированный текст (на темном фоне)
  };

  // Цвета границ
  border: {
    primary: string;    // Основная граница
    secondary: string;  // Вторичная граница
    tertiary: string;   // Третичная граница
  };
}

/**
 * Полная структура темы
 */
export interface Theme {
  name: string;                             // Имя темы
  colors: ThemeColors;                      // Цвета темы
  spacing: Record<string, string>;          // Отступы темы
  typography: {
    fontFamily: string;                     // Семейство шрифтов
    fontSize: Record<string, string>;       // Размеры шрифта
    fontWeight: Record<string, string>;     // Насыщенность шрифта
    lineHeight: Record<string, string>;     // Высота строк
  };
  borderRadius: Record<string, string>;     // Скругления границ
  boxShadow: Record<string, string>;        // Тени
}

/**
 * Названия тем
 */
export type ThemeName = 'light' | 'dark';
