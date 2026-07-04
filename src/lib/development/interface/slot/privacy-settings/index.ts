import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { PrivacySettingsSetting } from '$stylist/development/type/struct/privacy-settings-setting';

export interface SlotPrivacySettings extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, BehaviorTypography {
	settings?: PrivacySettingsSetting[];
	onSave?: () => void;
	class?: string;
}
