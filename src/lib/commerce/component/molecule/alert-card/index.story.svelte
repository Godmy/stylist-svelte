<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Usage Limit Reached' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Upgrade to continue processing requests.' },
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'warning',
			options: ['info', 'success', 'warning', 'error']
		}
	];
</script>

<Story title="AlertCard" description="Attention card with severity styling and actions." {controls}>
	{#snippet children(values: any)}
		<div class="_c1">
			<div class="_c2">{values.title}</div>
			{#if values.subtitle}
				<div class="_c3">{values.subtitle}</div>
			{/if}
			<div class="_c4">
				<button type="button" class="_c5">Upgrade</button>
				<button type="button" class="_c6">Dismiss</button>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c2 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
	}
	._c3 {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c4 {
		margin-top: 1rem;
		display: flex;
		gap: 0.5rem;
	}
	._c5 {
		border-radius: 0.25rem;
		background-color: var(--color-primary-600);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		color: var(--color-text-inverse);
	}
	._c6 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}
</style>
