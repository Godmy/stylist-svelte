<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import SecureForm from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'token', type: 'text', defaultValue: 'csrf-demo-token' }
	];
</script>

<Story
	id="auth-organism-secure-form"
	title="SecureForm"
	component={SecureForm}
	category="Auth"
	description="Secure form shell with hidden token."
	tags={['auth', 'security', 'form']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<SecureForm token={String(values.token || '')} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 28rem;
		padding: 1rem;
	}
</style>
