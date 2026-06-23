import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TeamMember } from '../teammember';

export type TeamAvatarStackProps = {
	members?: TeamMember[];
	maxVisible?: number;
	showStatus?: boolean;
	showTooltip?: boolean;
	size?: 'sm' | 'md' | 'lg';
	stackDirection?: 'horizontal' | 'vertical';
	class?: string;
	avatarClass?: string;
	tooltipClass?: string;
} & HTMLAttributes<HTMLDivElement> & BehaviorBorderToken & BehaviorTypography;
