<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AuthGuard from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'isAuthenticated', type: 'boolean', defaultValue: true },
		{ name: 'requiredRole', type: 'text', defaultValue: 'admin' },
		{ name: 'userRoles', type: 'text', defaultValue: 'admin, editor' },
		{ name: 'showLoadingState', type: 'boolean', defaultValue: false }
	];

	function getRoles(value: unknown) {
		return String(value || '')
			.split(',')
			.map((role) => role.trim())
			.filter(Boolean);
	}
</script>

<Story
	id="auth-organism-auth-guard"
	title="AuthGuard"
	component={AuthGuard}
	category="Auth"
	description="Authorization wrapper states."
	tags={['auth', 'guard', 'access']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<AuthGuard
				isAuthenticated={Boolean(values.isAuthenticated)}
				requiredRole={String(values.requiredRole || '')}
				userRoles={getRoles(values.userRoles)}
				showLoadingState={Boolean(values.showLoadingState)}
				redirectUrl="/login"
			>
				{#snippet children()}
					<section class="_c2">
						<h3>Protected workspace</h3>
						<p>The signed-in user can view this reusable protected content.</p>
					</section>
				{/snippet}
			</AuthGuard>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		max-width: 34rem;
		padding: 1rem;
	}

	._c2 {
		border: 1px solid var(--color-border-primary, #e5e7eb);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
		padding: 1.25rem;
	}

	._c2 h3 {
		margin: 0 0 0.5rem;
		font-size: 1rem;
	}

	._c2 p {
		margin: 0;
		color: var(--color-text-secondary, #6b7280);
	}
</style>
