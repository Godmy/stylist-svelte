<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import AuthLink from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'href', type: 'text', defaultValue: '/forgot-password' },
		{ name: 'label', type: 'text', defaultValue: 'Forgot password?' }
	];
</script>

<Story
	id="auth-atom-auth-link"
	title="AuthLink"
	component={AuthLink}
	category="Auth"
	description="Auth navigation link."
	tags={['auth', 'link']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<AuthLink href={String(values.href || '#')}>
				{#snippet children()}{String(values.label || 'Auth link')}{/snippet}
			</AuthLink>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
</style>
