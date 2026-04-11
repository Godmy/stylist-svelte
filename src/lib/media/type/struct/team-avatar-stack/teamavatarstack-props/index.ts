import type { InformationHTMLAttributes } from '$stylist/information';
import type { TeamMember } from '../teammember';

export type TeamAvatarStackProps = {
	members: TeamMember[];
	maxVisible?: number;
	showStatus?: boolean;
	showTooltip?: boolean;
	size?: 'sm' | 'md' | 'lg';
	stackDirection?: 'horizontal' | 'vertical';
	class?: string;
	avatarClass?: string;
	tooltipClass?: string;
} & InformationHTMLAttributes<HTMLDivElement>;
