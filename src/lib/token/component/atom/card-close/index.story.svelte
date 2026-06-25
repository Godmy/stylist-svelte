<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import CardClose from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'expanded', type: 'boolean', defaultValue: true }
	];

	let clicks = $state(0);
</script>

<Story
	{controls}
	title="CardClose"
	description="Floating close affordance for expanded orbit cards."
>
	{#snippet children(values: any)}
		<div class="token-story-stage">
			<div class="token-story-card">
				<CardClose
					expanded={Boolean(values.expanded)}
					onClick={() => {
						clicks += 1;
					}}
				/>
			</div>
			<p class="token-story-meta">Clicks: {clicks}</p>
		</div>
	{/snippet}
</Story>

<style>
	.token-story-stage {
		position: relative;
		min-height: 11rem;
		overflow: hidden;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 2rem;
	}
	.token-story-card {
		position: relative;
		height: 6rem;
		width: 16rem;
		border: 1px solid #e2e8f0;
		border-radius: 0.5rem;
		background: #ffffff;
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
