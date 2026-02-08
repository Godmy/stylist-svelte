/**
 * Токены CSS классов
 * Повторно используемые шаблоны CSS классов, применяемые в компонентах
 */

/**
 * CSS классы состояний компонентов
 */
export const STATE_CLASSES = {
	disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
	loading: 'animate-spin',
	block: 'w-full',
	hidden: 'hidden',
	visible: 'visible',
	interactive: 'cursor-pointer',
	readonly: 'cursor-default'
} as const;

export type StateClass = keyof typeof STATE_CLASSES;

/**
 * CSS классы доступности
 */
export const ACCESSIBILITY_CLASSES = {
	srOnly: 'sr-only',
	notSrOnly: 'not-sr-only',
	focusVisible:
		'focus:outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-primary-500)] focus-visible:outline-offset-2',
	focusRing: 'focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-500)]',
	focusWithin:
		'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[var(--color-primary-500)]'
} as const;

export type AccessibilityClass = keyof typeof ACCESSIBILITY_CLASSES;

/**
 * Базовые классы компонентов - общие шаблоны
 */
export const BASE_CLASSES = {
	interactive: 'inline-flex items-center justify-center font-medium rounded-md transition-colors',
	surface: 'bg-[var(--color-surface)] border border-[var(--color-border)]',
	elevated: 'bg-[var(--color-surface)] shadow-[var(--shadow-md)]',
	text: 'text-[var(--color-text-primary)]',
	input:
		'w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2',
	card: 'rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm'
} as const;

export type BaseClass = keyof typeof BASE_CLASSES;

/**
 * Классы переходов
 */
export const TRANSITION_CLASSES = {
	all: 'transition-all duration-200',
	colors: 'transition-colors duration-200',
	opacity: 'transition-opacity duration-200',
	transform: 'transition-transform duration-200',
	fast: 'transition-all duration-150',
	slow: 'transition-all duration-300'
} as const;

export type TransitionClass = keyof typeof TRANSITION_CLASSES;

/**
 * Флаги по умолчанию для состояний компонентов
 */
export const DEFAULT_FLAGS = {
	disabled: false,
	loading: false,
	readonly: false,
	required: false,
	closeable: false
} as const;
