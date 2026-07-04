import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ContractAvatar } from '$stylist/media/interface/contract/avatar';

export interface ContractTeamAvatarStack
	extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
	/** List of team members */
	members: ContractAvatar[];
	/** Maximum visible avatars */
	maxVisible?: number;
	/** Additional CSS class */
	class?: string;
}
