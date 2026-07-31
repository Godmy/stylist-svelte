<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import PermissionGate from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'hasPermission',
			type: 'boolean',
			defaultValue: true
		},
		{
			name: 'useCustomFallback',
			type: 'boolean',
			defaultValue: true
		}
	];
</script>

<Story
	id="atoms-permission-gate"
	title="PermissionGate"
	component={PermissionGate}
	category="Atoms"
	description="Conditionally renders content based on permission state"
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			{#if values.useCustomFallback}
				<PermissionGate hasPermission={values.hasPermission as boolean}>
					{#snippet children()}
						<div class="_c2">Visible content for allowed users.</div>
					{/snippet}
					{#snippet fallback()}
						<div class="_c3">Custom fallback: access is restricted.</div>
					{/snippet}
				</PermissionGate>
			{:else}
				<PermissionGate hasPermission={values.hasPermission as boolean}>
					{#snippet children()}
						<div class="_c2">Visible content for allowed users.</div>
					{/snippet}
				</PermissionGate>
			{/if}
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c2 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-emerald-300);
		background-color: var(--color-emerald-50);
		padding: 1rem;
		color: var(--color-emerald-900, #emerald-900);
	}
	._c3 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-amber-300);
		background-color: var(--color-amber-50);
		padding: 1rem;
		color: var(--color-amber-900, #amber-900);
	}
</style>
