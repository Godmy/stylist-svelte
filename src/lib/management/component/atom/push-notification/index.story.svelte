<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import PushNotification from './index.svelte';

	let closed = $state(false);

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Build completed' },
		{ name: 'message', type: 'text', defaultValue: 'Your release was deployed successfully.' },
		{
			name: 'type',
			type: 'select',
			defaultValue: 'success',
			options: ['info', 'success', 'warning', 'error']
		},
		{ name: 'showIcon', type: 'boolean', defaultValue: true },
		{ name: 'autoDismiss', type: 'boolean', defaultValue: false },
		{ name: 'duration', type: 'number', defaultValue: 5000, min: 500, max: 15000, step: 500 }
	];
</script>

<Story
	component={PushNotification}
	title="PushNotification"
	description="Compact inline notification with status styles and auto-dismiss."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			{#if !closed}
				<PushNotification
					title={values.title}
					message={values.message}
					type={values.type}
					showIcon={values.showIcon}
					autoDismiss={values.autoDismiss}
					duration={values.duration}
					onClose={() => (closed = true)}
				/>
			{:else}
				<button class="_c2" onclick={() => (closed = false)}>Show again</button>
			{/if}
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		border-radius: 0.375rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
