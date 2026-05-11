<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { SecuritySettingsStyleManager } from '$stylist/interaction';
	import SecuritySettingsComponent from './index.svelte';

	type Props = {
		showPasswordChange: boolean;
		showTwoFactor: boolean;
		showSessionManagement: boolean;
		showLoginHistory: boolean;
		showSecurityLevel: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showPasswordChange', type: 'boolean', defaultValue: true },
		{ name: 'showTwoFactor', type: 'boolean', defaultValue: true },
		{ name: 'showSessionManagement', type: 'boolean', defaultValue: true },
		{ name: 'showLoginHistory', type: 'boolean', defaultValue: true },
		{ name: 'showSecurityLevel', type: 'boolean', defaultValue: true }
	];

	function handleSubmit(settings: unknown) {
		console.log('Security settings submitted:', settings);
		alert('Security settings saved!');
	}

	function handleEnableTwoFactor() {
		console.log('Two-factor authentication enabled');
	}

	function handleChangePassword() {
		console.log('Password change requested');
	}
</script>

<Story
	id="organisms-security-settings"
	title="Organisms / Interaction / Forms / Settings / Security Settings"
	component={SecuritySettingsComponent}
	category="Organisms/Interaction/Forms/Settings"
	description="A security settings component for managing password, 2FA, and security preferences."
	tags={['settings', 'security', 'password', '2fa']}
	{controls}
>
	{#snippet children(values: any)}
		<div class={SecuritySettingsStyleManager.preferences('sb-organisms-security-settings p-4')}>
			<h1 class="mb-4 text-lg font-semibold">SecuritySettings Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive SecuritySettings</h2>
				<div class="max-w-md">
					<SecuritySettingsComponent />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
