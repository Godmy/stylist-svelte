import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ContractAvatar as AvatarContract } from '$stylist/media/interface/contract/avatar';

export type AvatarProps = AvatarContract & HTMLAttributes<HTMLDivElement> & SlotThemeBorder & BehaviorTypography;
