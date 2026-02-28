<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import { AppearanceSettingsStyleManager } from '$stylist/design-system/styles';
  import AppearanceSettingsComponent from './index.svelte';

  type Props = {
    theme: 'light' | 'dark' | 'system';
    highContrast: boolean;
    uiTheme: 'minimal' | 'ocean' | 'forest' | 'sunset';
  };

  const controls: ControlConfig[] = [
    { name: 'theme', type: 'select', defaultValue: 'system', options: ['light', 'dark', 'system'] },
    { name: 'highContrast', type: 'boolean', defaultValue: false },
    { name: 'uiTheme', type: 'select', defaultValue: 'minimal', options: ['minimal', 'ocean', 'forest', 'sunset'] }
  ];
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
            theme={values.theme}
            highContrast={values.highContrast}
            uiTheme={values.uiTheme}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

