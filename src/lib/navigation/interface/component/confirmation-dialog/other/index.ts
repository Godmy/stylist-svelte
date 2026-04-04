import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenThemeTone } from '$stylist/theme/type/enum/theme-tone';

/**
 * ConfirmationDialogProps — свойства диалога подтверждения.
 *
 * LEGO-состав:
 *   ILabelSlot            (information) — title
 *   ICaptionSlot          (information) — message
 *   IClickable            (interaction) — onConfirm, onCancel, onClose
 *   ISizable              (architecture) — size
 *   ThemeAttributes       (theme)       — variant (tone)
 */
export interface ConfirmationDialogProps
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
