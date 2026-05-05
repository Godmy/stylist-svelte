import type { TokenAlignment as MessageAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenMessageStatus } from '$stylist/chat/type/enum/message-status';
import type { TokenMessageState } from '$stylist/chat/type/enum/message-state';
import { MESSAGE_AVATAR_SIZE_CLASSES } from '$stylist/chat/const/record/message-avatar-size-classes';
import { MESSAGE_ALIGNMENT_CLASSES } from '$stylist/chat/const/map/message-alignment-classes';
import { MESSAGE_VARIANT_BG_CLASSES } from '$stylist/chat/const/map/message-variant-bg-classes';
import { MESSAGE_VARIANT_TEXT_CLASSES } from '$stylist/chat/const/map/message-variant-text-classes';
import { MESSAGE_STATUS_CLASSES } from '$stylist/chat/const/map/message-status-classes';
import { getMessageAlignmentClass } from '$stylist/chat/function/script/get-message-alignment-class';

export class MessageStyleManager {
	static getMessageContainerClasses(align: MessageAlignment = 'left', className?: string): string {
		const alignmentClass = getMessageAlignmentClass(align);
		return `${'message-row flex w-full items-end gap-3'} ${alignmentClass} ${className || ''}`.trim();
	}

	static getMessageBubbleClasses(variant: TokenMessageState = 'draft', className?: string): string {
		const bgClass = MESSAGE_VARIANT_BG_CLASSES[variant] || MESSAGE_VARIANT_BG_CLASSES.draft;
		return `${'message-bubble rounded-[1.25rem] border px-4 py-3 max-w-[75%] shadow-custom28'} ${bgClass} ${className || ''}`.trim();
	}

	static getMessageTextClasses(variant: TokenMessageState = 'draft'): string {
		return MESSAGE_VARIANT_TEXT_CLASSES[variant] || MESSAGE_VARIANT_TEXT_CLASSES.draft;
	}

	static getAuthorClasses(align: MessageAlignment = 'left', variant: TokenMessageState = 'draft'): string {
		const textClass = MESSAGE_VARIANT_TEXT_CLASSES[variant] || MESSAGE_VARIANT_TEXT_CLASSES.draft;
		return `${'text-sm font-semibold mb-1'} ${textClass}`;
	}

	static getContentClasses(align: MessageAlignment = 'left', variant: TokenMessageState = 'draft'): string {
		const textClass = MESSAGE_VARIANT_TEXT_CLASSES[variant] || MESSAGE_VARIANT_TEXT_CLASSES.draft;
		return `${'text-[--color-text-primary] word-wrap-break-word whitespace-pre-wrap'} ${textClass}`;
	}

	static getMetaClasses(): string {
		return 'message-meta mt-2 flex items-center gap-2 text-[11px]';
	}

	static getTimestampClasses(): string {
		return 'text-[var(--color-text-secondary)]';
	}

	static getStatusClasses(status: TokenMessageStatus = 'delivered'): string {
		return MESSAGE_STATUS_CLASSES[status] || MESSAGE_STATUS_CLASSES.delivered;
	}

	static getAvatarContainerClasses(_align: MessageAlignment = 'left'): string {
		return 'flex-shrink-0';
	}

	static getAvatarSizeClasses(size: TokenSize = 'md'): string {
		return MESSAGE_AVATAR_SIZE_CLASSES[size] ?? MESSAGE_AVATAR_SIZE_CLASSES.md ?? 'w-8 h-8';
	}

	static getAlignmentClass(align: MessageAlignment = 'left'): string {
		return getMessageAlignmentClass(align);
	}

	static getBubbleVariantClass(variant: TokenMessageState = 'draft'): string {
		return MESSAGE_VARIANT_BG_CLASSES[variant] || MESSAGE_VARIANT_BG_CLASSES.draft;
	}

	static getTextVariantClass(variant: TokenMessageState = 'draft'): string {
		return MESSAGE_VARIANT_TEXT_CLASSES[variant] || MESSAGE_VARIANT_TEXT_CLASSES.draft;
	}

	static getStatusClass(status: TokenMessageStatus = 'delivered'): string {
		return MESSAGE_STATUS_CLASSES[status] || MESSAGE_STATUS_CLASSES.delivered;
	}

	static getAvatarSizeClass(size: TokenSize = 'md'): string {
		return MESSAGE_AVATAR_SIZE_CLASSES[size] ?? MESSAGE_AVATAR_SIZE_CLASSES.md ?? 'w-8 h-8';
	}

	static getActionsClasses(): string {
		return 'message-actions mt-2 flex items-center gap-1 opacity-[var(--opacity-70)] transition-opacity hover:opacity-[var(--opacity-100)]';
	}

	static getActionButtonClasses(): string {
		return 'action-button rounded-full border border-[var(--color-border-primary)] bg-[var(--color-background-primary)]/70 p-1.5 transition-colors hover:bg-[var(--color-background-secondary)]';
	}

	static getReactionButtonClasses(): string {
		return 'reaction-option rounded-full p-1 text-lg transition-colors hover:bg-[var(--color-background-secondary)]';
	}

	static getMessageListContainerClasses(className?: string): string {
		return `${'message-list flex flex-col gap-3 overflow-y-auto px-4 py-5'} ${className || ''}`.trim();
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

	static getThreadHostClasses(className?: string): string {
		return `${'flex h-full max-h-[600px] flex-col overflow-hidden rounded-[1.25rem] border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-custom28'} ${className || ''}`.trim();
	}

	static getThreadHeaderClasses(): string {
		return 'border-b border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-3';
	}

	static getThreadContainerClasses(): string {
		return 'flex-1 overflow-y-auto bg-[var(--color-background-secondary)] px-4 py-4';
	}

	static getThreadMessageContainerClasses(): string {
		return 'flex flex-col gap-3';
	}

	static getThreadLoadingClasses(): string {
		return 'flex h-32 items-center justify-center';
	}

	static getThreadSpinnerClasses(): string {
		return 'h-8 w-8 animate-spin rounded-full border-b-2 border-[var(--color-primary-500)]';
	}

	static getChatMessageContainerClasses(isOwn: boolean, className = ''): string {
		return `flex ${isOwn ? 'justify-end' : 'justify-start'} ${className}`.trim();
	}

	static getChatMessageContentClasses(className = ''): string {
		return `max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl ${className}`.trim();
	}

	static getChatMessageHeaderClasses(className = ''): string {
		return `mb-1 flex items-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)] ${className}`.trim();
	}

	static getChatMessageBubbleShellClasses(isOwn: boolean, variantClass: string, className = ''): string {
		const ownClasses = 'rounded-[1.25rem] rounded-br-md bg-[var(--color-primary-500)] px-4 py-3 text-[var(--color-text-inverse)] shadow-custom28';
		const baseClasses = 'rounded-[1.25rem] rounded-bl-md px-4 py-3 shadow-custom28';
		return `${baseClasses} ${isOwn ? ownClasses : variantClass} ${className}`.trim();
	}

	static getChatMessageTextClasses(): string {
		return 'text-sm leading-6';
	}

	static getChatMessageFooterClasses(className = ''): string {
		return `mt-1 flex items-center justify-end text-[11px] text-[var(--color-text-secondary)] ${className}`.trim();
	}

	static getMetaSeparatorClasses(): string {
		return 'meta-separator text-[11px] text-[var(--color-text-secondary)]';
	}

	static getMetaStatusTextClasses(): string {
		return 'inline-flex items-center gap-1 text-[11px] text-[var(--color-text-secondary)]';
	}

	static getMetaStatusIconClasses(isRead: boolean): string {
		return `h-3 w-3 ${isRead ? 'text-[var(--color-primary-600)]' : 'text-[var(--color-text-tertiary)]'}`;
	}
}

