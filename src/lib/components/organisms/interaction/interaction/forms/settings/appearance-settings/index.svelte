<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction-forms';
  import type { AppearanceSettingsProps } from '$stylist/design-system/props/interaction-forms';
  let { theme='system', fontScale=100, class: className='', ...restProps }: AppearanceSettingsProps = $props();
</script>
<form class={InteractionFormsStyleManager.root('c-appearance-settings border rounded-lg p-4 space-y-3', className)} {...restProps}>
  <div>
    <label class="text-sm">Theme</label>
    <select class="w-full border rounded px-2 py-1" value={theme}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  </div>
  <div>
    <label class="text-sm">Font scale ({fontScale}%)</label>
    <input type="range" min="80" max="140" value={fontScale} class="w-full" />
  </div>
</form>
