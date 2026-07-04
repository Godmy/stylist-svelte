import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ContractAnnouncementBanner } from '$stylist/media/interface/contract/announcement-banner';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeAnnouncementBanner
	extends ComputeIntersectAll<
		[
			ContractAnnouncementBanner,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			SlotThemeBorder,
			SlotTypography,
			SlotChildren
		]
	> {}