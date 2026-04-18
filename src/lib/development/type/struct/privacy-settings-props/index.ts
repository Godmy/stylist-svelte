import type { PrivacySettingsSetting } from '$stylist/development/type/struct/privacy-settings-setting';

export type PrivacySettingsProps = {
	settings: PrivacySettingsSetting[];
	onSave?: () => void;
	class?: string;
};
