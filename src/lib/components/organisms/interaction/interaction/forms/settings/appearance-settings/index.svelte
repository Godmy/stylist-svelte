<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction/interaction-forms';
  import type { AppearanceSettingsProps } from '$stylist/design-system/props/interaction/interaction-forms';
  let { theme='system', fontScale=100, class: className='', ...restProps }: AppearanceSettingsProps = $props();
  const themeId = 'appearance-settings-theme';
  const fontScaleId = 'appearance-settings-font-scale';
</script>
<form class={InteractionFormsStyleManager.root('c-appearance-settings border rounded-lg p-4 space-y-3', className)} {...restProps}>
  <div>
    <label class="text-sm" for={themeId}>Theme</label>
    <select id={themeId} class="w-full border rounded px-2 py-1" value={theme}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  </div>
  <div>
    <label class="text-sm" for={fontScaleId}>Font scale ({fontScale}%)</label>
    <input id={fontScaleId} type="range" min="80" max="140" value={fontScale} class="w-full" />
  </div>
</form>
