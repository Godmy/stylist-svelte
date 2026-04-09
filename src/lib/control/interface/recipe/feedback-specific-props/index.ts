/** Специфичные свойства для компонентов обратной связи */
import type { Snippet } from 'svelte';

export interface FeedbackSpecificProps {
	/** Тип компонента */
	type?: 'feedback' | 'error' | 'toast' | 'dialog' | 'boundary';

	/** Действия (кнопки) */
	actions?: Snippet;

	/** Текст кнопки подтверждения (для dialog) */
	confirmText?: string;

	/** Текст кнопки отмены (для dialog) */
	cancelText?: string;

	/** Обработчик подтверждения (для dialog) */
	onConfirm?: () => void;

	/** Обработчик отмены (для dialog) */
	onCancel?: () => void;

	/** Автоматическое скрытие (для toast) */
	autoDismiss?: boolean;

	/** Время до скрытия (для toast, мс) */
	dismissTimeout?: number;

	/** children как Snippet */
	children?: Snippet;
}
