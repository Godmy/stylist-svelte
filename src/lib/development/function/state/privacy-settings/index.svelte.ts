import { PrivacySettingsStyleManager } from '$stylist/development/class/style-manager/privacy-settings';

type Setting = {
	id: string;
	label: string;
	description: string;
	enabled: boolean;
};

export type Props = {
	settings: Setting[];
	onSave?: () => void;
	class?: string;
};

export function createPrivacySettingsState(props: Props) {
	let localSettings = $state([...props.settings]);
	$effect(() => {
		localSettings = [...props.settings];
	});

	const containerClass = $derived(PrivacySettingsStyleManager.getContainerClass(props.class ?? ''));
	const titleClass = $derived(PrivacySettingsStyleManager.getTitleClass());
	const settingsContainerClass = $derived(PrivacySettingsStyleManager.getSettingsContainerClass());
	const settingItemClass = $derived(PrivacySettingsStyleManager.getSettingItemClass());
	const settingContentClass = $derived(PrivacySettingsStyleManager.getSettingContentClass());
	const settingLabelClass = $derived(PrivacySettingsStyleManager.getSettingLabelClass());
	const settingDescriptionClass = $derived(PrivacySettingsStyleManager.getSettingDescriptionClass());
	const toggleContainerClass = $derived(PrivacySettingsStyleManager.getToggleContainerClass());
	const toggleInputClass = $derived(PrivacySettingsStyleManager.getToggleInputClass());
	const toggleTrackClass = (isEnabled: boolean) => PrivacySettingsStyleManager.getToggleTrackClass(isEnabled);
	const toggleThumbClass = (isEnabled: boolean) => PrivacySettingsStyleManager.getToggleThumbClass(isEnabled);
	const saveButtonContainerClass = $derived(PrivacySettingsStyleManager.getSaveButtonContainerClass());
	const saveButtonClass = $derived(PrivacySettingsStyleManager.getSaveButtonClass());

	function toggleSetting(id: string) {
		const index = localSettings.findIndex(s => s.id === id);
		if (index !== -1) {
			localSettings[index] = {
				...localSettings[index],
				enabled: !localSettings[index].enabled
			};
		}
	}

	return {
		get localSettings() {
			return localSettings;
		},
		get containerClass() {
			return containerClass;
		},
		get titleClass() {
			return titleClass;
		},
		get settingsContainerClass() {
			return settingsContainerClass;
		},
		get settingItemClass() {
			return settingItemClass;
		},
		get settingContentClass() {
			return settingContentClass;
		},
		get settingLabelClass() {
			return settingLabelClass;
		},
		get settingDescriptionClass() {
			return settingDescriptionClass;
		},
		get toggleContainerClass() {
			return toggleContainerClass;
		},
		get toggleInputClass() {
			return toggleInputClass;
		},
		toggleTrackClass,
		toggleThumbClass,
		get saveButtonContainerClass() {
			return saveButtonContainerClass;
		},
		get saveButtonClass() {
			return saveButtonClass;
		},
		toggleSetting
	};
}

export default createPrivacySettingsState;
