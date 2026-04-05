import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IMotionToken } from '$stylist/interaction/interface/proto/motion-token';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * FeedbackRecipe — унифицированный рецепт для компонентов обратной связи.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — title, heading
 *   ICaptionSlot              (information) — message, description
 *   IStatusSlot               (information) — severity, state
 *   IIconSlot                 (information) — status icon
 *   IClickable                (interaction) — onDismiss, onClose, onConfirm
 *   IFocusable                (interaction) — tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) — size
 *   IMotionToken              (theme)       — duration, easing (для toast/alert)
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Feedback: type='feedback', общий компонент
 *   - ErrorMessage: type='error', сообщение об ошибке
 *   - Toast/Alert: type='toast', всплывающее уведомление
 *   - ConfirmationDialog: type='dialog', диалог подтверждения
 *   - ErrorBoundary: type='boundary', граница ошибок
 */
export interface FeedbackRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot,
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable,
		IMotionToken,
		ThemeAttributes<HTMLDivElement>
	]>,
		FeedbackSpecificProps
{}

/** Специфичные свойства для компонентов обратной связи */
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
