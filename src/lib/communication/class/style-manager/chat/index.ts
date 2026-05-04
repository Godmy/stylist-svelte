import type { TokenMessageStatus } from '$stylist/communication/type/enum/message-status';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';





export class ChatStyleManager {
	static getListContainerClasses(className = ''): string {
		return mergeClassNames(
			'chat-list flex h-full flex-col overflow-y-auto rounded-[1.25rem] bg-[var(--color-background-primary)]',
			className
		);
	}

	static getItemContainerClasses(isActive: boolean, className = ''): string {
		return mergeClassNames(
			'chat-item group relative flex items-center gap-3 border-b border-[var(--color-border-primary)] px-4 py-4 transition-all duration-200',
			isActive
				? 'bg-[var(--color-primary-50)] shadow-[inset_3px_0_0_var(--color-primary-500)]'
				: 'bg-transparent hover:bg-[var(--color-background-secondary)] hover:translate-x-[2px]',
			className
		);
	}

	static getItemInfoClasses(): string {
		return 'chat-info flex-1 min-w-0';
	}

	static getItemNameClasses(): string {
		return 'chat-name mb-1 truncate text-sm font-semibold tracking-[0.01em] text-[var(--color-text-primary)]';
	}

	static getItemPreviewClasses(): string {
		return 'last-message truncate text-[13px] leading-5 text-[var(--color-text-secondary)]';
	}

	static getItemMetaClasses(): string {
		return 'chat-meta flex flex-col items-end gap-1 self-start';
	}

	static getItemActionsClasses(): string {
		return 'chat-actions absolute right-3 top-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100';
	}

	static getWindowContainerClasses(className = ''): string {
		return mergeClassNames(
			'chat-window flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-custom40',
			className
		);
	}

	static getWindowHeaderClasses(): string {
		return 'flex items-center justify-between border-b border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-3';
	}

	static getWindowMessagesClasses(): string {
		return 'chat-messages flex-1 overflow-y-auto bg-[var(--color-background-secondary)]';
	}

	static getWindowInputClasses(): string {
		return 'chat-input border-t border-[var(--color-border-primary)] bg-[var(--color-background-primary)]';
	}

	static getRoomContainerClasses(className = ''): string {
		return mergeClassNames(
			'chat-room flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-custom40',
			className
		);
	}

	static getRoomHeaderClasses(className = ''): string {
		return mergeClassNames(
			'flex items-center justify-between border-b border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-4',
			className
		);
	}

	static getRoomMessagesAreaClasses(spacingClass: string, className = ''): string {
		return mergeClassNames(
			'flex-1 overflow-y-auto bg-[var(--color-background-secondary)] px-4 py-4',
			spacingClass,
			className
		);
	}

	static getRoomFooterClasses(className = ''): string {
		return mergeClassNames(
			'border-t border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4',
			className
		);
	}

	static getRoomParticipantAvatarClasses(index: number): string {
		return mergeClassNames(
			'h-8 w-8 overflow-hidden rounded-full ring-2 ring-[var(--color-background-primary)]',
			index > 0 ? '-ml-2' : 'ml-0'
		);
	}

	static getRoomOverflowBadgeClasses(): string {
		return 'flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-background-secondary)] text-xs font-semibold text-[var(--color-text-secondary)] ring-2 ring-[var(--color-background-primary)]';
	}

	static getUserStatusContainerClasses(): string {
		return 'user-status inline-flex items-center gap-2.5';
	}

	static getUserStatusInfoClasses(): string {
		return 'user-info flex min-w-0 flex-col gap-[2px]';
	}

	static getUserStatusNameClasses(): string {
		return 'user-name truncate text-sm font-medium text-[var(--color-text-primary)]';
	}

	static getUserStatusTextClasses(): string {
		return 'status-text text-xs leading-4 text-[var(--color-text-secondary)]';
	}

	static getPresenceContainerClasses(className = ''): string {
		return mergeClassNames('inline-flex items-center gap-2', className);
	}

	static getPresenceIndicatorClasses(size: 'sm' | 'md' | 'lg', status: string): string {
		const sizeClass =
			size === 'lg' ? 'h-3 w-3' : size === 'md' ? 'h-2.5 w-2.5' : 'h-2 w-2';
		const statusClass =
			status === 'online'
				? 'bg-emerald-500'
				: status === 'away'
					? 'bg-amber-500'
					: status === 'typing'
						? 'bg-sky-500'
						: 'bg-slate-400';

		return mergeClassNames(
			'inline-flex rounded-full ring-2 ring-[var(--color-background-primary)] shadow-sm',
			sizeClass,
			statusClass
		);
	}

	static getPresenceLabelClasses(): string {
		return 'text-xs font-medium text-[var(--color-text-secondary)]';
	}

	static getChatMessageAlignmentClass(isOwn: boolean): string {
		return isOwn ? 'justify-end' : 'justify-start';
	}

	static getChatMessageBubbleClasses(
		isOwn: boolean,
		variant: TokenAppearance | TokenAppearance,
		className = ''
	): string {
		return mergeClassNames(
			'rounded-lg px-4 py-2 text-sm',
			isOwn
				? 'rounded-br-none bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
				: ({
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
					gray: 'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] rounded-bl-none',
					error: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)] rounded-bl-none',
					dark: 'bg-[var(--color-neutral-900)] text-[var(--color-text-inverse)] rounded-bl-none',
					light: 'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)] rounded-bl-none',
					elevated: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] rounded-bl-none shadow-sm',
					flat: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] rounded-bl-none'
				}[variant] ?? 'bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] rounded-bl-none'),
			className
		);
	}

	static getChatMessageHeaderClasses(className = ''): string {
		return mergeClassNames('mb-1 flex items-center text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-secondary)]', className);
	}

	static getChatMessageFooterClasses(className = ''): string {
		return mergeClassNames('mt-1 flex items-center justify-end text-[11px] text-[var(--color-text-tertiary)]', className);
	}

	static getMessageStatusTypeIconClasses(status: TokenMessageStatus): string {
		return {
			sent: 'ml-1 h-3 w-3 text-[var(--color-text-tertiary)]',
			delivered: 'ml-1 h-3 w-3 text-[var(--color-text-tertiary)]',
			read: 'ml-1 h-3 w-3 text-[var(--color-primary-500)]',
			error: 'ml-1 h-3 w-3 text-[var(--color-danger-500)]'
		}[status];
	}
}








