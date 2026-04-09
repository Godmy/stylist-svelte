import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { AvatarContract } from '$stylist/media/interface/component/avatar/contract';

export interface AvatarGroupContract extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	/** List of avatars */
	avatars: AvatarContract[];
	/** Maximum visible avatars */
	maxVisible?: number;
	/** Avatar size */
	size?: AvatarContract['size'];
	/** Additional CSS class */
	class?: string;
}
