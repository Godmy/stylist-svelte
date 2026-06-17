import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { PrivacySettingsSetting } from '$stylist/development/type/struct/privacy-settings-setting';

export interface SlotPrivacySettings extends Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'> {
	settings?: PrivacySettingsSetting[];
	onSave?: () => void;
	class?: string;
}
