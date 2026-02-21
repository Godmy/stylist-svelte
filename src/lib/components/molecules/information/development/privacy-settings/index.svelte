<script lang="ts">
  import { PrivacySettingsStyleManager } from '$stylist/design-system/styles/information/privacy-settings';

  let {
    settings = [],
    onSave = () => {},
    class: className = ''
  } = $props<{
    settings: Array<{
      id: string;
      label: string;
      description: string;
      enabled: boolean;
    }>;
    onSave?: () => void;
    class?: string;
  }>();

  let localSettings = $state([...settings]);

  $effect(() => {
    localSettings = [...settings];
  });

  const toggleSetting = (id: string) => {
    const index = localSettings.findIndex(s => s.id === id);
    if (index !== -1) {
      localSettings[index] = {
        ...localSettings[index],
        enabled: !localSettings[index].enabled
      };
    }
  };

  // Generate CSS classes using the style manager
  const containerClass = $derived(PrivacySettingsStyleManager.getContainerClass(className));
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
</script>

<div class={containerClass}>
  <h2 class={titleClass}>Privacy Settings</h2>
  <div class={settingsContainerClass}>
    {#each localSettings as setting}
      <div class={settingItemClass}>
        <div class={settingContentClass}>
          <h3 class={settingLabelClass}>{setting.label}</h3>
          <p class={settingDescriptionClass}>{setting.description}</p>
        </div>
        <label class={toggleContainerClass}>
          <input
            type="checkbox"
            class={toggleInputClass}
            checked={setting.enabled}
            onchange={() => toggleSetting(setting.id)}
          />
          <div class={toggleTrackClass(setting.enabled)}></div>
          <div class={toggleThumbClass(setting.enabled)}></div>
        </label>
      </div>
    {/each}
  </div>
  <div class={saveButtonContainerClass}>
    <button
      onclick={onSave}
      class={saveButtonClass}
    >
      Save Settings
    </button>
  </div>
</div>
