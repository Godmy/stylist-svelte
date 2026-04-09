import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export type TeamMember = {
	id: string;
	name: string;
	avatar?: string;
	role?: string;
	status?: 'online' | 'away' | 'busy' | 'offline';
	presence?: boolean;
};

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
