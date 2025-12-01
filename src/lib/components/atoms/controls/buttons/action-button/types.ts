/**
 * Типы для компонента ActionButton
 * Следует принципам SOLID и архитектуре SAMO
 */

import type { Snippet } from 'svelte';

/** Варианты кнопки */
export type ActionButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';

/** Размеры кнопки */
export type ActionButtonSize = 'sm' | 'md' | 'lg';

/** Пропсы компонента ActionButton */
export interface IActionButtonProps {
  children: Snippet;
  variant?: ActionButtonVariant;
  size?: ActionButtonSize;
  disabled?: boolean;
  class?: string;
}