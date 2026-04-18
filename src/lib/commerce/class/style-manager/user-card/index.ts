import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { UserCardSize } from '$stylist/commerce/type/enum/user-card-style-size';
import type { UserStatus } from '$stylist/commerce/type/enum/user-card-status';

export class UserCardStyleManager {
	static getSizeClasses(size: UserCardSize): {
		avatarSize: string;
		textSize: string;
		paddingClass: string;
	} {
		return {
			sm: {
				avatarSize: 'w-10 h-10',
				textSize: 'text-sm',
				paddingClass: 'p-3'
			},
			md: {
				avatarSize: 'w-12 h-12',
				textSize: 'text-base',
				paddingClass: 'p-4'
			},
			lg: {
				avatarSize: 'w-16 h-16',
				textSize: 'text-lg',
				paddingClass: 'p-5'
			}
		}[size];
	}

	static getRootClass(className?: string): string {
		return mergeClassNames(
			'c-user-card flex items-center bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)]',
			className
		);
	}

	static getAvatarContainerClass(): string {
		return 'relative flex-shrink-0 mr-4';
	}

	static getAvatarClass(avatarSize: string, className?: string): string {
		return mergeClassNames(`${avatarSize} rounded-full object-cover`, className);
	}

	static getAvatarPlaceholderClass(avatarSize: string): string {
		return `${avatarSize} rounded-full bg-[var(--color-background-tertiary)] flex items-center justify-center`;
	}

	static getAvatarInitialsClass(): string {
		return 'text-[var(--color-text-secondary)] font-medium';
	}

	static getStatusIndicatorClass(status: UserStatus): string {
		return `absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[var(--color-background-primary)] ${
			status === 'online' ? 'bg-[var(--color-success-500)]' :
			status === 'away' ? 'bg-yellow-500' :
			status === 'busy' ? 'bg-[var(--color-danger-500)]' :
			'bg-[var(--color-neutral-400)]'
		}`;
	}

	static getContentClass(className?: string): string {
		return mergeClassNames('flex-1 min-w-0', className);
	}

	static getNameContainerClass(): string {
		return 'flex items-baseline';
	}

	static getNameClass(textSize: string): string {
		return `font-semibold text-[var(--color-text-primary)] truncate ${textSize}`;
	}

	static getTitleClass(textSize: string): string {
		return `text-[var(--color-text-secondary)] truncate ${textSize}`;
	}

	static getEmailClass(textSize: string): string {
		return `text-[var(--color-text-secondary)] truncate ${textSize}`;
	}

	static getActionsContainerClass(className?: string): string {
		return mergeClassNames('ml-4', className);
	}

	static getMoreButtonClass(): string {
		return 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]';
	}
}
