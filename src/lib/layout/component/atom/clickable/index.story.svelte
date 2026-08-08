<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Clickable from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'hoverEffect', type: 'boolean', defaultValue: true },
		{ name: 'pressEffect', type: 'boolean', defaultValue: true },
		{
			name: 'cursor',
			type: 'select',
			defaultValue: 'pointer',
			options: ['pointer', 'default', 'grab', 'not-allowed']
		}
	];

	let eventName = $state('click the card');
	let count = $state(0);
</script>

<Story
	{controls}
	component={Clickable}
	title="Clickable"
	description="Gesture wrapper for click, double click, and context menu interactions."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Clickable
				disabled={Boolean(values.disabled)}
				hoverEffect={Boolean(values.hoverEffect)}
				pressEffect={Boolean(values.pressEffect)}
				cursor={values.cursor as any}
				onClick={() => {
					count += 1;
					eventName = 'click';
				}}
				onDblClick={() => {
					eventName = 'double click';
				}}
				onContextMenu={(event) => {
					event.preventDefault();
					eventName = 'context menu';
				}}
			>
				{#snippet children()}
					<div class="_c2">
						<span class="_c3">Interactive story card</span>
						<strong class="_c4">{count}</strong>
					</div>
				{/snippet}
			</Clickable>
			<p class="_c5">Last event: {eventName}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 1.5rem;
		background-color: #f8fafc;
		padding: 1.5rem;
	}
	._c2 {
		display: flex;
		min-height: 7rem;
		align-items: center;
		justify-content: space-between;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	._c3 {
		font-weight: 500;
		color: #0f172a;
	}
	._c4 {
		font-size: 1.5rem;
		line-height: 2rem;
		color: var(--color-sky-700, #sky-700);
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
</style>
