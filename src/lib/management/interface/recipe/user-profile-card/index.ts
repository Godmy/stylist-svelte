import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotUserProfileCard as UserProfileCardProps } from '$stylist/form/interface/slot/user-profile-card';

export interface UserProfileCardStateProps extends StructIntersectAll<[UserProfileCardProps]> {}
