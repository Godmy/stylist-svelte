<script lang="ts">
	import { createSecuritySettingsState } from '$stylist/management/function/state/security-settings';
	import type { SlotSecuritySettings as SecuritySettingsProps } from '$stylist/form/interface/slot/security-settings';

	let props: SecuritySettingsProps = $props();
	const state = createSecuritySettingsState(props);
</script>

<form class={state.containerClasses} {...state.restProps}>
	<label class="flex items-center gap-2 text-sm"
		><input type="checkbox" checked={state.twoFactor} /> Two-factor authentication</label
	>
	<label class="flex items-center gap-2 text-sm"
		><input type="checkbox" checked={state.loginAlerts} /> Login alerts</label
	>
	<button
		class="rounded bg-[var(--color-primary-600)] px-3 py-1 text-[var(--color-text-inverse)]"
		type="submit">Save security settings</button
	>
</form>
