<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Hoverable from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'hoverEffect', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];

	let hoverLabel = $state('waiting for pointer');
</script>

<Story
	{controls}
	component={Hoverable}
	title="Hoverable"
	description="Pointer hover wrapper with simple state feedback."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Hoverable
				hoverEffect={Boolean(values.hoverEffect)}
				disabled={Boolean(values.disabled)}
				class="_c2"
				onMouseEnter={() => {
					hoverLabel = 'pointer entered';
				}}
				onMouseLeave={() => {
					hoverLabel = 'pointer left';
				}}
			>
				{#snippet children()}
					<div class="_c3 content-center">Hover the surface</div>
				{/snippet}
			</Hoverable>
			<p class="_c4">State: {hoverLabel}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1.5rem;
		background-color: #f8fafc;
		padding: 1.5rem;
	}
	._c2 {
		display: block;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
		padding: 0.5rem;
	}
	._c3 {
		min-height: 7rem;
		border-radius: 0.75rem;
		background-color: var(--color-sky-50);
		padding-left: 1rem;
		padding-right: 1rem;
		text-align: center;
		font-weight: 500;
		color: var(--color-sky-950, #sky-950);
	}
	._c4 {
		margin-top: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
</style>
