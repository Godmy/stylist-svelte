import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotSecuritySettings as SecuritySettingsProps } from '$stylist/auth/interface/slot/security-settings';

export interface RecipeSecuritySettings extends ComputeIntersectAll<[SecuritySettingsProps]> {}

