import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export type CodeBlockWithLineNumbersRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & BehaviorTypography;
