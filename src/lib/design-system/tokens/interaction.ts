import { APPEARANCE_STYLES, SEMANTIC_VARIANTS } from './variants';

/**
 * Комбинированные варианты для интерактивных компонентов (семантика + внешний вид)
 */
export const INTERACTIVE_VARIANTS = [...SEMANTIC_VARIANTS, ...APPEARANCE_STYLES] as const;
export type InteractiveVariant = (typeof INTERACTIVE_VARIANTS)[number];

/**
 * Mapping вариант → utility-классы на CSS-переменных темы.
 * Строится в design-system, чтобы компоненты не тянули кастомные constants.
 */
export const VARIANT_CLASSES: Record<InteractiveVariant, string> = {
  // Semantic variants
  primary:
    'bg-[var(--color-primary-600,#2563eb)] text-[var(--color-text-inverse,#ffffff)] ' +
    'border border-transparent hover:bg-[var(--color-primary-700,#1d4ed8)]',
  secondary:
    'bg-[var(--color-secondary-600,#475569)] text-[var(--color-text-inverse,#f9fafb)] ' +
    'border border-[var(--color-secondary-700,#334155)] hover:bg-[var(--color-secondary-500,#6b7280)]',
  success:
    'bg-[var(--color-success-600,#16a34a)] text-[var(--color-text-inverse,#ffffff)] ' +
    'border border-transparent hover:bg-[var(--color-success-700,#15803d)]',
  warning:
    'bg-[var(--color-warning-500,#f59e0b)] text-[var(--color-text-inverse,#ffffff)] ' +
    'border border-transparent hover:bg-[var(--color-warning-600,#d97706)]',
  danger:
    'bg-[var(--color-danger-600,#dc2626)] text-[var(--color-text-inverse,#ffffff)] ' +
    'border border-transparent hover:bg-[var(--color-danger-700,#b91c1c)]',
  info:
    'bg-[var(--color-primary-500,#3b82f6)] text-[var(--color-text-inverse,#ffffff)] ' +
    'border border-transparent hover:bg-[var(--color-primary-600,#2563eb)]',

  // Appearance styles
  solid:
    'bg-[var(--color-primary-600,#2563eb)] text-[var(--color-text-inverse,#ffffff)] ' +
    'border border-transparent hover:bg-[var(--color-primary-700,#1d4ed8)]',
  outline:
    'bg-transparent text-[var(--color-text-primary,#111827)] ' +
    'border border-[var(--color-neutral-400,#9ca3af)] hover:bg-[var(--color-bg-secondary,#f3f4f6)] hover:border-[var(--color-neutral-500,#6b7280)]',
  ghost:
    'bg-transparent text-[var(--color-text-primary,#111827)] ' +
    'border border-transparent hover:bg-[var(--color-bg-secondary,#f3f4f6)]',
  link:
    'bg-transparent text-[var(--color-primary-600,#2563eb)] underline underline-offset-2 ' +
    'border border-transparent hover:text-[var(--color-primary-700,#1d4ed8)]',
  subtle:
    'bg-[var(--color-neutral-100,#f5f5f5)] text-[var(--color-text-primary,#111827)] ' +
    'border border-transparent hover:bg-[var(--color-neutral-200,#e5e5e5)]'
};
