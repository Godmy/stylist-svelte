import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { ContractAvatar as AvatarContract } from '$stylist/media/interface/contract/avatar';
import type { ContractAvatar } from '$stylist/media/interface/contract/avatar';

export interface ContractAvatarGroup extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** List of avatars */
	avatars: ContractAvatar[];
	/** Maximum visible avatars */
	maxVisible?: number;
	/** Avatar size */
	size?: ContractAvatar['size'];
	/** Additional CSS class */
	class?: string;
}
