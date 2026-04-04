import type { TierContent } from '$stylist/architecture/type/enum/tier';
import { cn } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';

const TEAM_MEMBER_CARD_VARIANT_CLASSES: Partial<Record<TierContent, string>> = {
	detailed: '',
	compact: 'p-2',
	screen: 'p-8',
	icon: 'ring-2 ring-[var(--color-primary-500)] shadow-lg scale-[1.02] border-[var(--color-primary-300)]'
};





export class TeamMemberCardStyleManager {
	static getBaseClasses(
		variant: TierContent = 'detailed',
		className = ''
	): string {
		return cn(
			'team-member-card overflow-hidden',
			CardStyleManager.getBaseClasses(),
			TEAM_MEMBER_CARD_VARIANT_CLASSES[variant] ?? TEAM_MEMBER_CARD_VARIANT_CLASSES.detailed,
			className
		);
	}

	static getVariantClasses(variant: TierContent): string {
		return TEAM_MEMBER_CARD_VARIANT_CLASSES[variant] ?? TEAM_MEMBER_CARD_VARIANT_CLASSES.detailed ?? '';
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


