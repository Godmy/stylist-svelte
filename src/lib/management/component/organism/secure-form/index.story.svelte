<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { SecureFormStyleManager } from '$stylist/form/class/style-manager/secure-form-style-manager';
	import SecureForm from './index.svelte';

	type Props = {
		showEncryption: boolean;
		showSecureIndicator: boolean;
		autoLock: boolean;
		sessionTimeout: number;
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showEncryption', type: 'boolean', defaultValue: true },
		{ name: 'showSecureIndicator', type: 'boolean', defaultValue: true },
		{ name: 'autoLock', type: 'boolean', defaultValue: true },
		{ name: 'sessionTimeout', type: 'number', defaultValue: 300 }
	];

	function handleSubmit(data: any) {
		console.log('Secure form submitted:', data);
		alert('Secure form submitted successfully!');
	}

	function handleSessionExpired() {
		console.log('Session expired');
		alert('Session expired. Please login again.');
	}
</script>

<Story
	id="organisms-secure-form"
	title="Organisms / Interaction / Forms / Secure Form"
	component={SecureForm}
	category="Organisms/Interaction/Forms"
	description="A secure form component with encryption and session management for sensitive data."
	tags={['form', 'secure', 'encryption', 'session']}
	{controls}
>
	{#snippet children(values: any)}
		<div class={SecureFormStyleManager.container('sb-organisms-secure-form p-4')}>
			<h1 class="mb-4 text-lg font-semibold">SecureForm Component</h1>

			<div class="mb-6 rounded border p-4">
				<h2 class="text-md mb-2 font-semibold">Interactive SecureForm</h2>
				<div class="max-w-md">
					<SecureForm />
				</div>
			</div>
		</div>
	{/snippet}
</Story>
