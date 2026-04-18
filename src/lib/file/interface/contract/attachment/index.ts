import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface ContractAttachment {
	id: string;
	name: string;
	type: string;
	size: number;
	url?: string;
	previewUrl?: string;
}
