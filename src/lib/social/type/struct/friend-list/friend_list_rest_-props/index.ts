import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export type FRIEND_LIST_REST_PROPS = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography;
