import type { ShareOption } from '$stylist/social/type/object/social-share/shareoption';
import type { SocialPlatform } from '$stylist/social/type/object/social-share/socialplatform';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';

export interface RecipeSocialShare extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
title?: string;
	url?: string;
	description?: string;
	platforms?: SocialPlatform[];
	showCopyLink?: boolean;
	showEmbed?: boolean;
	showSave?: boolean;
	showLike?: boolean;
	customOptions?: ShareOption[];
	class?: string;
	buttonClass?: string;
	dropdownClass?: string;
	onShare?: (platform: SocialPlatform, url: string) => void;
	onSave?: () => void;
	onLike?: () => void;
	size?: 'sm' | 'md' | 'lg';
}
