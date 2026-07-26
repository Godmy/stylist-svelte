<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import SecuritySettings from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'twoFactor', type: 'boolean', defaultValue: true },
		{ name: 'loginAlerts', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="auth-organism-security-settings"
	title="SecuritySettings"
	component={SecuritySettings}
	category="Auth"
	description="Account security preferences."
	tags={['auth', 'security', 'settings']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<SecuritySettings
				twoFactor={Boolean(values.twoFactor)}
				loginAlerts={Boolean(values.loginAlerts)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 28rem;
		padding: 1rem;
	}
</style>
