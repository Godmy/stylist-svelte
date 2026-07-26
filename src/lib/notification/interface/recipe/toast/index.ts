import type { BehaviorActionable } from '$stylist/notification/interface/behavior/actionable';
import type { BehaviorDismissible } from '$stylist/notification/interface/behavior/dismissible';
import type { SlotText } from '$stylist/typography/interface/slot/text';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeToast
	extends ComputeIntersectAll<
		[
			{
				id: string;
				message: string;
				type: TokenColorTone;
				duration?: number;
			},
			SlotText,
			BehaviorActionable,
			BehaviorDismissible
		]
	> {}
