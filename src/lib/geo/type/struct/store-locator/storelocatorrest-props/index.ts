import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export type StoreLocatorRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & BehaviorTypography;
