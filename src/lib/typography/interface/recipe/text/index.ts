import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TokenTypographyTone } from '$stylist/theme/type/alias/tone';

export interface RecipeText
	extends Omit<HTMLAttributes<HTMLElement>, 'children'>,
		SlotChildren,
		BehaviorTypography {
	text?: string;
	tone?: TokenTypographyTone;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
}
