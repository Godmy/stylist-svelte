<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/design-system/styles/interaction-forms';
  import type { SecuritySettingsProps } from '$stylist/design-system/props/interaction-forms';
  let { twoFactor=true, loginAlerts=true, class: className='', ...restProps }: SecuritySettingsProps = $props();
</script>
<form class={InteractionFormsStyleManager.root('c-security-settings border rounded-lg p-4 space-y-2', className)} {...restProps}>
  <label class="text-sm flex items-center gap-2"><input type="checkbox" checked={twoFactor} /> Two-factor authentication</label>
  <label class="text-sm flex items-center gap-2"><input type="checkbox" checked={loginAlerts} /> Login alerts</label>
  <button class="px-3 py-1 bg-blue-600 text-white rounded" type="submit">Save security settings</button>
</form>
