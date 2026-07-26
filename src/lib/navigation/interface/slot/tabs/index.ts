import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';

export interface SlotTabs extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, SlotChildren {
	selectedId?: string;
	onValueChange?: (id: string) => void;
	variant?: TokenColorTone;
	size?: TokenSize;
	disabled?: boolean;
}
