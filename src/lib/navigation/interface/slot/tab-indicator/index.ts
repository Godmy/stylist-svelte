import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { HTMLAttributes } from 'svelte/elements';
export interface SlotTabIndicator extends HTMLAttributes<HTMLDivElement> {
	left?: string;
	width?: number;
	color?: TokenColorTone;
	size?: TokenSize;
	disabled?: boolean;
}
