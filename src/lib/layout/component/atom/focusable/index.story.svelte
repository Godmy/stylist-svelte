<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Focusable from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'focusEffect', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];

	let stateLabel = $state('focus the button with Tab');
</script>

<Story
	{controls}
	component={Focusable}
	title="Focusable"
	description="Focus wrapper that exposes keyboard focus and blur states."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Focusable
				focusEffect={Boolean(values.focusEffect)}
				disabled={Boolean(values.disabled)}
				class="_c2"
				onFocus={() => {
					stateLabel = 'focused';
				}}
				onBlur={() => {
					stateLabel = 'blurred';
				}}
			>
				{#snippet children()}
					<button type="button" class="_c3"> Keyboard focus target </button>
				{/snippet}
			</Focusable>
			<p class="_c4">State: {stateLabel}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1.5rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c2 {
		display: block;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.5rem;
	}
	._c3 {
		width: 100%;
		border-radius: 0.75rem;
		background-color: var(--color-warning-50);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1.25rem;
		padding-bottom: 1.25rem;
		text-align: left;
		font-weight: 500;
		color: var(--color-warning-900);
	}
	._c4 {
		margin-top: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
