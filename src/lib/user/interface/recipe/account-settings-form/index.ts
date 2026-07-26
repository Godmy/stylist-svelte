import type { RecipeAccountSettings } from '$stylist/user/interface/recipe/account-settings';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotAccountSettingsForm } from '$stylist/user/interface/slot/account-settings-form';

export interface RecipeAccountSettingsForm
	extends ComputeIntersectAll<[RecipeAccountSettings, SlotAccountSettingsForm]> {}

