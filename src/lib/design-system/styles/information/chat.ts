import type { ChatMessageStatus } from '../../contracts/information/chat';
import type { DefaultVariants, NeutralVariant } from '../../tokens/information/default-variants';
import { cn } from '../../utils/cn/index';

const CHAT_MESSAGE_ALIGNMENT_CLASSES = {
	own: 'justify-end',
	other: 'justify-start'
} as const;

const CHAT_MESSAGE_BUBBLE_VARIANT_CLASSES: Record<string, string> = {
	default: 'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] rounded-bl-none',
	primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)] rounded-bl-none',
	secondary: 'bg-[var(--color-neutral-200)] text-[var(--color-text-primary)] rounded-bl-none',
	success: 'bg-[var(--color-success-100)] text-[var(--color-success-800)] rounded-bl-none',
	warning: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)] rounded-bl-none',
	danger: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)] rounded-bl-none',
	info: 'bg-[var(--color-info-100)] text-[var(--color-info-800)] rounded-bl-none',
	neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] rounded-bl-none',
	solid: 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded-bl-none',
	outline: 'bg-transparent border border-[var(--color-border-primary)] rounded-bl-none',
	ghost: 'bg-transparent rounded-bl-none',
	link: 'bg-transparent underline rounded-bl-none',
	subtle: 'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)] rounded-bl-none',
	gray: 'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] rounded-bl-none'
};

const CHAT_MESSAGE_STATUS_ICON_CLASSES: Record<ChatMessageStatus, string> = {
	sent: 'ml-1 h-3 w-3 text-[var(--color-text-tertiary)]',
	delivered: 'ml-1 h-3 w-3 text-[var(--color-text-tertiary)]',
	read: 'ml-1 h-3 w-3 text-[var(--color-primary-500)]'
};

export class ChatStyleManager {
	static getChatMessageAlignmentClass(isOwn: boolean): string {
		return isOwn ? CHAT_MESSAGE_ALIGNMENT_CLASSES.own : CHAT_MESSAGE_ALIGNMENT_CLASSES.other;
	}

	static getChatMessageBubbleClasses(
		isOwn: boolean,
		variant: DefaultVariants | NeutralVariant,
		className = ''
	): string {
		return cn(
			'rounded-lg px-4 py-2 text-sm',
			isOwn
				? 'rounded-br-none bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
				: (CHAT_MESSAGE_BUBBLE_VARIANT_CLASSES[variant] ??
					CHAT_MESSAGE_BUBBLE_VARIANT_CLASSES.default),
			className
		);
	}

	static getChatMessageHeaderClasses(className = ''): string {
		return cn('mb-1 flex items-center text-xs font-semibold text-[var(--color-text-secondary)]', className);
	}

	static getChatMessageFooterClasses(className = ''): string {
		return cn('mt-1 flex items-center justify-end text-xs text-[var(--color-text-tertiary)]', className);
	}

	static getChatMessageStatusIconClasses(status: ChatMessageStatus): string {
		return CHAT_MESSAGE_STATUS_ICON_CLASSES[status];
	}
}
