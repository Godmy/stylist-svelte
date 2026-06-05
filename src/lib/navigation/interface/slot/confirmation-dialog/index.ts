import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction/interaction-html-attributes';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenThemeTone } from '$stylist/theme/type/enum/theme-tone';

/**
 * SlotConfirmationDialog — свойства диалога подтверждения.
 *
 * LEGO-состав:
 *   SlotLabel            (information) — title
 *   SlotCaption          (information) — message
 *   BehaviorClickable            (interaction) — onConfirm, onCancel, onClose
 *   BehaviorSizable              (architecture) — size
 *   ThemeAttributes       (theme)       — variant (tone)
 */
export interface SlotConfirmationDialog
	extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
	open?: boolean;
	title?: string;
	message?: string;
	confirmText?: string;
	cancelText?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
	onClose?: () => void;
	/** Тон диалога (успех, предупреждение, ошибка, информация) */
	variant?: TokenThemeTone;
	class?: string;
	contentClass?: string;
	headerClass?: string;
	bodyClass?: string;
	footerClass?: string;
	/** Размер диалога */
	size?: TokenSize;
}
