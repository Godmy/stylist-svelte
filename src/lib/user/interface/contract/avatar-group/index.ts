import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ContractAvatar } from '$stylist/user/interface/contract/avatar';

export interface ContractAvatarGroup extends SlotThemeBorder, SlotTypography {
	/** List of avatars */
	avatars: ContractAvatar[];
	/** Maximum visible avatars */
	maxVisible?: number;
	/** Avatar size */
	size?: ContractAvatar['size'];
	/** Additional CSS class */
	class?: string;
}
