import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';

export interface SlotTabs extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>, SlotChildren {
	selectedId?: string;
	onValueChange?: (id: string) => void;
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
}
