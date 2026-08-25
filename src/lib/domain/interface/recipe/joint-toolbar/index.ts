import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
export interface RecipeJointToolbar {
	active?: string;
	availableJoints?: readonly string[];
	orientation?: TokenOrientation;
	showLabel?: boolean;
	onSelect?: (name: string) => void;
	class?: string;
}
