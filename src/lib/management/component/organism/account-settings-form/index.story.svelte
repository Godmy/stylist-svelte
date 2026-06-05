<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import type { AccountSettings } from '$stylist/management/type/struct/settings/account-settings';
	import { AccountSettingsStyleManager } from '$stylist/interaction/class/style-manager/account-settings';
	import AccountSettingsForm from './index.svelte';

	type Props = {
		showEmailChange: boolean;
		showPasswordChange: boolean;
		showDeleteAccount: boolean;
		showTwoFactor: boolean;
		loading: boolean;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showEmailChange', type: 'boolean', defaultValue: true },
		{ name: 'showPasswordChange', type: 'boolean', defaultValue: true },
		{ name: 'showDeleteAccount', type: 'boolean', defaultValue: true },
		{ name: 'showTwoFactor', type: 'boolean', defaultValue: true },
		{ name: 'loading', type: 'boolean', defaultValue: false }
	];

	function handleSubmit(settings: AccountSettings) {
		console.log('Account settings submitted:', settings);
		alert('Account settings saved!');
	}

	function handleDeleteAccount() {
		console.log('Delete account requested');
		if (confirm('Are you sure you want to delete your account?')) {
			alert('Account deletion initiated');
		}
	}
</script>

<Story
	id="organisms-account-settings-form"
	title="Organisms / Interaction / Forms / Account / Account Settings Form"
	component={AccountSettingsForm}
	category="Organisms/Interaction/Forms/Account"
	description="An account settings form for managing user account preferences and security settings."
	tags={['form', 'account', 'settings', 'security']}
	{controls}
>
	{#snippet children(values: any)}
		<div class={AccountSettingsStyleManager.form('sb-organisms-account-settings-form p-4')}>
			<h1 class="mb-4 text-lg font-semibold">AccountSettingsForm Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive AccountSettingsForm</h2>
				<div class="max-w-lg">
					<AccountSettingsForm />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
