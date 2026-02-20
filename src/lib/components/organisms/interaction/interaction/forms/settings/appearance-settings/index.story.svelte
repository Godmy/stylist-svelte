<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import { AppearanceSettingsStyleManager } from '$stylist/design-system/styles';
  import AppearanceSettingsComponent from './index.svelte';

  type Props = {
    showThemeSelector: boolean;
    showColorPicker: boolean;
    showFontSize: boolean;
    showDensity: boolean;
    showPreview: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'showThemeSelector', type: 'boolean', defaultValue: true },
    { name: 'showColorPicker', type: 'boolean', defaultValue: true },
    { name: 'showFontSize', type: 'boolean', defaultValue: true },
    { name: 'showDensity', type: 'boolean', defaultValue: true },
    { name: 'showPreview', type: 'boolean', defaultValue: true }
  ];

  function handleSubmit(settings: unknown) {
    console.log('Appearance settings submitted:', settings);
    alert('Appearance settings saved!');
  }

  function handlePreviewChange(settings: unknown) {
    console.log('Preview changed:', settings);
  }
</script>

<Story
  id="organisms-appearance-settings"
  title="Organisms / Interaction / Forms / Settings / Appearance Settings"
  component={AppearanceSettingsComponent}
  category="Organisms/Interaction/Forms/Settings"
  description="An appearance settings component for managing theme, colors, and display preferences."
  tags={['settings', 'appearance', 'theme', 'display']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={AppearanceSettingsStyleManager.preferences('sb-organisms-appearance-settings p-4')}>
      <h1 class="text-lg font-semibold mb-4">AppearanceSettings Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive AppearanceSettings</h2>
        <div class="max-w-md">
          <AppearanceSettingsComponent
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

