import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { PrivacySettingsSetting } from '$stylist/development/type/struct/privacy-settings-setting';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipePrivacySettings extends ComputeIntersectAll<[((Omit<HTMLAttributes<HTMLDivElement>, 'class'> & SlotThemeBorder & SlotTypography & {
settings?: PrivacySettingsSetting[];
	onSave?: () => void;
	class?: string;
}))]> {}
