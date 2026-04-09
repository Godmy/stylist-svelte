import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { AvatarContract } from '$stylist/media/interface/component/avatar/contract';

export interface TeamAvatarStackContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** List of team members */
	members: AvatarContract[];
	/** Maximum visible avatars */
	maxVisible?: number;
	/** Additional CSS class */
	class?: string;
}
