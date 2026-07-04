import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export type FRIEND_LIST_REST_PROPS = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & BehaviorTypography;
