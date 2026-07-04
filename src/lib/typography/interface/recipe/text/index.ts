import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TokenTypographyTone } from '$stylist/theme/type/alias/tone';

export interface RecipeText
	extends Omit<HTMLAttributes<HTMLElement>, 'children'>,
		SlotChildren,
		SlotTypography {
	text?: string;
	tone?: TokenTypographyTone;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
}
