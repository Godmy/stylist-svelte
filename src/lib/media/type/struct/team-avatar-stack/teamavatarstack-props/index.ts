import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TeamMember } from '$stylist/media/type/struct/team-avatar-stack/teammember';

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
} & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography;
