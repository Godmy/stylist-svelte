import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export interface RecipeToggleBaseProps extends ComputeIntersectAll<[]> {
	disabled?: boolean;
	class?: string;
	size?: TokenSize;
}
