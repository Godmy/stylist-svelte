import type { MessageAlign as MessageAlignment } from '$stylist/design-system/tokens/information/message-align';
import type { MessageAvatarSize, MessageStatus, MessageVariant } from '$stylist/design-system/tokens/information/message';

const MESSAGE_ALIGNMENT_CLASSES = {
	left: 'items-start',
	right: 'items-end',
	center: 'items-center'
} as const;

const MESSAGE_VARIANT_BG_CLASSES = {
	default: 'bg-[var(--color-background-primary)] border-[--color-border-secondary]',
	system: 'bg-[--color-background-secondary] border-[--color-border-primary]',
	incoming: 'bg-[var(--color-background-primary)] border-[--color-border-secondary]',
	outgoing: 'bg-[--color-primary-500] border-[--color-primary-600]',
	error: 'bg-[--color-danger-50] border-[--color-danger-200]',
	warning: 'bg-[--color-warning-50] border-[--color-warning-200]',
	success: 'bg-[--color-success-50] border-[--color-success-200]'
} as const;

const MESSAGE_VARIANT_TEXT_CLASSES = {
	default: 'text-[--color-text-primary]',
	system: 'text-[--color-text-secondary]',
	incoming: 'text-[--color-text-primary]',
	outgoing: 'text-[--color-text-inverse]',
	error: 'text-[--color-danger-800]',
	warning: 'text-[--color-warning-800]',
	success: 'text-[--color-success-800]'
} as const;

const MESSAGE_STATUS_CLASSES = {
	sent: 'text-[--color-primary-500]',
	delivered: 'text-[--color-text-tertiary]',
	read: 'text-[--color-success-500]',
	error: 'text-[--color-danger-500]'
} as const;

const MESSAGE_AVATAR_SIZE_CLASSES = {
	sm: 'w-6 h-6',
	md: 'w-8 h-8',
	lg: 'w-10 h-10'
} as const;

export class MessageStyleManager {
	static getMessageContainerClasses(align: MessageAlignment = 'left', className?: string): string {
		const alignmentClass = MESSAGE_ALIGNMENT_CLASSES[align];
		return `${'flex items-start gap-3'} ${alignmentClass} ${className || ''}`.trim();
	}

	static getMessageBubbleClasses(variant: MessageVariant = 'default', className?: string): string {
		const bgClass = MESSAGE_VARIANT_BG_CLASSES[variant] || MESSAGE_VARIANT_BG_CLASSES.default;
		return `${'rounded-lg p-4 max-w-[75%] shadow-sm border'} ${bgClass} ${className || ''}`.trim();
	}

	static getMessageTextClasses(variant: MessageVariant = 'default'): string {
		return MESSAGE_VARIANT_TEXT_CLASSES[variant] || MESSAGE_VARIANT_TEXT_CLASSES.default;
	}

	static getAuthorClasses(align: MessageAlignment = 'left', variant: MessageVariant = 'default'): string {
		const textClass = MESSAGE_VARIANT_TEXT_CLASSES[variant] || MESSAGE_VARIANT_TEXT_CLASSES.default;
		return `${'text-sm font-semibold mb-1'} ${textClass}`;
	}

	static getContentClasses(align: MessageAlignment = 'left', variant: MessageVariant = 'default'): string {
		const textClass = MESSAGE_VARIANT_TEXT_CLASSES[variant] || MESSAGE_VARIANT_TEXT_CLASSES.default;
		return `${'text-[--color-text-primary] word-wrap-break-word whitespace-pre-wrap'} ${textClass}`;
	}

	static getMetaClasses(): string {
		return 'flex items-center gap-2 mt-2 text-xs';
	}

	static getTimestampClasses(): string {
		return 'text-[--color-text-secondary]';
	}

	static getStatusClasses(status: MessageStatus = 'delivered'): string {
		return MESSAGE_STATUS_CLASSES[status] || MESSAGE_STATUS_CLASSES.delivered;
	}

	static getAvatarContainerClasses(_align: MessageAlignment = 'left'): string {
		return 'flex-shrink-0';
	}

	static getAvatarSizeClasses(size: MessageAvatarSize = 'md'): string {
		return MESSAGE_AVATAR_SIZE_CLASSES[size] || MESSAGE_AVATAR_SIZE_CLASSES.md;
	}

	static getAlignmentClass(align: MessageAlignment = 'left'): string {
		return MESSAGE_ALIGNMENT_CLASSES[align];
	}

	static getBubbleVariantClass(variant: MessageVariant = 'default'): string {
		return MESSAGE_VARIANT_BG_CLASSES[variant] || MESSAGE_VARIANT_BG_CLASSES.default;
	}

	static getTextVariantClass(variant: MessageVariant = 'default'): string {
		return MESSAGE_VARIANT_TEXT_CLASSES[variant] || MESSAGE_VARIANT_TEXT_CLASSES.default;
	}

	static getStatusClass(status: MessageStatus = 'delivered'): string {
		return MESSAGE_STATUS_CLASSES[status] || MESSAGE_STATUS_CLASSES.delivered;
	}

	static getAvatarSizeClass(size: MessageAvatarSize = 'md'): string {
		return MESSAGE_AVATAR_SIZE_CLASSES[size] || MESSAGE_AVATAR_SIZE_CLASSES.md;
	}

	static getActionsClasses(): string {
		return 'flex items-center gap-1 mt-2 opacity-[var(--opacity-0)] group-hover:opacity-[var(--opacity-100)] transition-opacity';
	}

	static getActionButtonClasses(): string {
		return 'p-1 rounded hover:bg-[--color-background-secondary] transition-colors';
	}

	static getReactionButtonClasses(): string {
		return 'text-lg p-1 rounded hover:bg-[--color-background-secondary]';
	}

	static getMessageListContainerClasses(className?: string): string {
		return `${'flex flex-col gap-4 p-4 overflow-y-auto'} ${className || ''}`.trim();
	}

	static getMessageListItemClasses(): string {
		return 'flex gap-3';
	}

	static getDateSeparatorClasses(): string {
		return 'flex items-center gap-4 my-4 text-xs text-[--color-text-secondary]';
	}

	static getDateSeparatorLineClasses(): string {
		return 'flex-1 h-px bg-[--color-border-secondary]';
	}

	static getMessageComposerContainerClasses(className?: string): string {
		return `${'flex items-end gap-2 p-4 border-t border-[--color-border-secondary] bg-[--color-background-primary]'} ${className || ''}`.trim();
	}

	static getMessageComposerInputContainerClasses(): string {
		return 'flex-1 flex items-center gap-2 border border-[--color-border-secondary] rounded-lg px-3 py-2 bg-[--color-background-primary]';
	}

	static getMessageComposerInputClasses(className?: string): string {
		return `${'flex-1 resize-none border-none outline-none bg-transparent text-[--color-text-primary] placeholder-[--color-text-secondary]'} ${className || ''}`.trim();
	}

	static getMessageComposerButtonClasses(): string {
		return 'p-2 rounded-md hover:bg-[--color-background-secondary] transition-colors';
	}
}

export default MessageStyleManager;
