<script lang="ts">
  import { createSecuritySettingsState } from '$stylist/management/function/state/security-settings';
  import type { SecuritySettingsProps } from '$stylist/form/interface/component/interaction-forms/other';

  let props: SecuritySettingsProps = $props();
  const state = createSecuritySettingsState(props);
</script>
<form class={state.containerClasses} {...state.restProps}>
  <label class="text-sm flex items-center gap-2"><input type="checkbox" checked={state.twoFactor} /> Two-factor authentication</label>
  <label class="text-sm flex items-center gap-2"><input type="checkbox" checked={state.loginAlerts} /> Login alerts</label>
  <button class="px-3 py-1 bg-[var(--color-primary-600)] text-[var(--color-text-inverse)] rounded" type="submit">Save security settings</button>
</form>
