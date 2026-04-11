<script lang="ts">
  import type { Props } from '$stylist/development/type/struct/privacy-settings';
  import { createPrivacySettingsState } from '$stylist/development/function/state/privacy-settings';

  let {
    settings = [],
    onSave = () => {},
    class: className = ''
  }: Props = $props();

  const state = createPrivacySettingsState({ settings, onSave, class: className });
</script>

<div class={state.containerClass}>
  <h2 class={state.titleClass}>Privacy Settings</h2>
  <div class={state.settingsContainerClass}>
    {#each state.localSettings as setting}
      <div class={state.settingItemClass}>
        <div class={state.settingContentClass}>
          <h3 class={state.settingLabelClass}>{setting.label}</h3>
          <p class={state.settingDescriptionClass}>{setting.description}</p>
        </div>
        <label class={state.toggleContainerClass}>
          <input
            type="checkbox"
            class={state.toggleInputClass}
            checked={setting.enabled}
            onchange={() => state.toggleSetting(setting.id)}
          />
          <div class={state.toggleTrackClass(setting.enabled)}></div>
          <div class={state.toggleThumbClass(setting.enabled)}></div>
        </label>
      </div>
    {/each}
  </div>
  <div class={state.saveButtonContainerClass}>
    <button
      onclick={onSave}
      class={state.saveButtonClass}
    >
      Save Settings
    </button>
  </div>
</div>
