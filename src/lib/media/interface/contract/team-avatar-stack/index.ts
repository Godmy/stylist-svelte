import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { ContractAvatar as AvatarContract } from '$stylist/media/interface/contract/avatar';
import type { ContractAvatar } from '$stylist/media/interface/contract/avatar';

export interface ContractTeamAvatarStack extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** List of team members */
	members: ContractAvatar[];
	/** Maximum visible avatars */
	maxVisible?: number;
	/** Additional CSS class */
	class?: string;
}
