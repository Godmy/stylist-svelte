<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import OrbitBackground from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'opened', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={OrbitBackground}
	title="OrbitBackground"
	description="Concentric orbit stage used to host token control nodes."
>
	{#snippet children(values: any)}
		<div class="token-story-stage">
			<OrbitBackground opened={Boolean(values.opened)}>
				{#snippet children()}
					<div class="token-story-center">Orbit center</div>
				{/snippet}
			</OrbitBackground>
		</div>
	{/snippet}
</Story>

<style>
	.token-story-stage {
		place-items: center;
		display: grid;
		min-height: 24rem;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 2.5rem;
	}
	.token-story-center {
		place-items: center;
		display: grid;
		border: 1px solid #bae6fd;
		border-radius: 9999px;
		background: rgba(255, 255, 255, 0.9);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: #334155;
	}
</style>
