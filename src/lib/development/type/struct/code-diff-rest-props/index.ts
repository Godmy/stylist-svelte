import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export type CodeDiffRestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography;
