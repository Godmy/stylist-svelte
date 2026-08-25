<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AuthLink from './index.svelte';

	const controls: SlotStory[] = [
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
