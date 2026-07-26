import type { SlotUserProfile as LegacyUserProfileCardProps1 } from '$stylist/user/interface/slot/user-profile';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotUserProfileCard as UserProfileCardProps } from '$stylist/user/interface/slot/user-profile-card';

export interface RecipeUserProfileCard
	extends ComputeIntersectAll<[LegacyUserProfileCardProps1, UserProfileCardProps]> {}

