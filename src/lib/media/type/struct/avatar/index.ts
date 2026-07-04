import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { ContractAvatar as AvatarContract } from '$stylist/media/interface/contract/avatar';

export type AvatarProps = AvatarContract & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & SlotTypography;
