<script lang="ts">
  import { InteractionFormsStyleManager } from '$stylist/interaction/class/style-manager/interaction-forms';
  import type { SecuritySettingsProps } from '$stylist/interaction/interface/interaction-forms';
  let { twoFactor=true, loginAlerts=true, class: className='', ...restProps }: SecuritySettingsProps = $props();
</script>
<form class={InteractionFormsStyleManager.root('c-security-settings border rounded-lg p-4 space-y-2', className)} {...restProps}>
  <label class="text-sm flex items-center gap-2"><input type="checkbox" checked={twoFactor} /> Two-factor authentication</label>
  <label class="text-sm flex items-center gap-2"><input type="checkbox" checked={loginAlerts} /> Login alerts</label>
  <button class="px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded" type="submit">Save security settings</button>
</form>







