import { MESSAGE_ALIGNMENT_CLASSES } from '../../constants/interaction/message';
import type { MessageAlignment, MessageAvatarSize, MessageStatus, MessageVariant } from '../../types/interaction/message';
import { getMessageAvatarSizeClasses, getMessageStatusClasses, getMessageVariantBgClasses, getMessageVariantTextClasses } from '../../functions/interaction/message';



export class MessageStyleManager {
	static getMessageContainerClasses(align: MessageAlignment = 'left', className?: string): string {
		const alignmentClass = MESSAGE_ALIGNMENT_CLASSES[align];
		return `${'flex items-start gap-3'} ${alignmentClass} ${className || ''}`.trim();
	}

	static getMessageBubbleClasses(variant: MessageVariant = 'default', className?: string): string {
		const bgClass = getMessageVariantBgClasses(variant);
		return `${'rounded-lg p-4 max-w-[75%] shadow-sm border'} ${bgClass} ${className || ''}`.trim();
	}

	static getMessageTextClasses(variant: MessageVariant = 'default'): string {
		return getMessageVariantTextClasses(variant);
	}

	static getAuthorClasses(align: MessageAlignment = 'left', variant: MessageVariant = 'default'): string {
		const textClass = getMessageVariantTextClasses(variant);
		return `${'text-sm font-semibold mb-1'} ${textClass}`;
	}

	static getContentClasses(align: MessageAlignment = 'left', variant: MessageVariant = 'default'): string {
		const textClass = getMessageVariantTextClasses(variant);
		return `${'text-[--color-text-primary] word-wrap-break-word whitespace-pre-wrap'} ${textClass}`;
	}

	static getMetaClasses(): string {
		return 'flex items-center gap-2 mt-2 text-xs';
	}

	static getTimestampClasses(): string {
		return 'text-[--color-text-secondary]';
	}

	static getStatusClasses(status: MessageStatus = 'delivered'): string {
		return getMessageStatusClasses(status);
	}

	static getAvatarContainerClasses(align: MessageAlignment = 'left'): string {
		return 'flex-shrink-0';
	}

	static getAvatarSizeClasses(size: MessageAvatarSize = 'md'): string {
		return getMessageAvatarSizeClasses(size);
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



