import { cn } from '../../utils/cn/index';
import { CARD_BASE_CLASSES } from './card';

const TEAM_MEMBER_CARD_VARIANT_CLASSES = {
	default: '',
	compact: 'p-2',
	detailed: 'p-8',
	featured:
		'ring-2 ring-[var(--color-primary-500)] shadow-lg scale-[1.02] border-[var(--color-primary-300)]'
} as const;

export class TeamMemberCardStyleManager {
	static getBaseClasses(
		variant: keyof typeof TEAM_MEMBER_CARD_VARIANT_CLASSES = 'default',
		className = ''
	): string {
		return cn(
			'team-member-card overflow-hidden',
			CARD_BASE_CLASSES,
			TEAM_MEMBER_CARD_VARIANT_CLASSES[variant],
			className
		);
	}

	static getVariantClasses(variant: keyof typeof TEAM_MEMBER_CARD_VARIANT_CLASSES): string {
		return TEAM_MEMBER_CARD_VARIANT_CLASSES[variant] ?? TEAM_MEMBER_CARD_VARIANT_CLASSES.default;
	}

	static getHeaderClasses(): string {
		return 'p-6 pb-4';
	}

	static getAvatarContainerClasses(): string {
		return 'mb-4 flex items-center';
	}

	static getAvatarClasses(): string {
		return 'mr-4 h-16 w-16 rounded-full object-cover';
	}

	static getInfoContainerClasses(): string {
		return 'min-w-0 flex-1';
	}

	static getNameClasses(): string {
		return 'truncate text-lg font-bold text-[var(--color-text-primary)]';
	}

	static getRoleClasses(): string {
		return 'truncate text-sm text-[var(--color-text-secondary)]';
	}

	static getModelClasses(): string {
		return 'mt-1 truncate text-xs text-[var(--color-text-tertiary)]';
	}

	static getBadgeContainerClasses(): string {
		return 'mt-3 flex flex-wrap gap-2';
	}

	static getDescriptionClasses(): string {
		return 'border-b border-[var(--color-border-secondary)] px-6 pb-4 pt-2 text-sm text-[var(--color-text-secondary)]';
	}

	static getAchievementsContainerClasses(): string {
		return 'p-6 pt-4';
	}

	static getAchievementsTitleClasses(): string {
		return 'mb-2 text-sm font-semibold text-[var(--color-text-primary)]';
	}

	static getAchievementItemClasses(): string {
		return 'mb-2 last:mb-0';
	}

	static getAchievementTitleClasses(): string {
		return 'text-sm font-medium text-[var(--color-text-primary)]';
	}

	static getAchievementDescriptionClasses(): string {
		return 'mt-1 text-xs text-[var(--color-text-secondary)]';
	}
}
