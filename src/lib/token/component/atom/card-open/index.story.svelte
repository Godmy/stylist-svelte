<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CardOpen from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'orbitOpen', type: 'boolean', defaultValue: false },
		{ name: 'dragging', type: 'boolean', defaultValue: false }
	];

	let toggles = $state(0);
</script>

<Story
	{controls}
	title="CardOpen"
	description="Seed button that toggles the orbit panel between closed and opened states."
>
	{#snippet children(values: any)}
		<div class="token-story-stage">
			<CardOpen
				orbitOpen={Boolean(values.orbitOpen)}
				dragging={Boolean(values.dragging)}
				style="left: calc(50% - 24px); top: 4.5rem;"
				onClick={() => {
					toggles += 1;
				}}
			/>
			<p class="token-story-meta">Toggle clicks: {toggles}</p>
		</div>
	{/snippet}
</Story>

<style>
	.token-story-stage {
		position: relative;
		min-height: 12rem;
		overflow: hidden;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 2rem;
	}
	.token-story-meta {
		position: absolute;
		bottom: 1rem;
		left: 1.5rem;
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
</style>
