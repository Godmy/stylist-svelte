import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
export interface RecipeDomainToolbar {
	active?: string;
	domains?: readonly string[];
	orientation?: TokenOrientation;
	showLabel?: boolean;
	onSelect?: (name: string) => void;
	class?: string;
}
