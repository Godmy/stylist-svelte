import type { SlotChildren } from '$stylist/architecture/interface/slot/children';
import type { ContractAnnouncementBanner } from '$stylist/media/interface/contract/announcement-banner';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeAnnouncementBanner
	extends ComputeIntersectAll<
		[
			ContractAnnouncementBanner,
			Omit<HTMLAttributes<HTMLDivElement>, 'class'>,
			BehaviorBorderToken,
			BehaviorTypography,
			SlotChildren
		]
	> {}