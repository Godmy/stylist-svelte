<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import { L6_TOKEN_DEFINITIONS } from '$stylist/token/const/object/orbit-control-definition';
	import Orbit from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'opened', type: 'boolean', defaultValue: true },
		{ name: 'radius', type: 'number', defaultValue: 112, min: 72, max: 160 }
	];

	const nodes = [
		{
			id: 'component-size',
			icon: 'component-size',
			label: 'Component Size',
			definition: L6_TOKEN_DEFINITIONS['component-size']
		},
		{
			id: 'variants',
			icon: 'variants',
			label: 'Variants',
			definition: L6_TOKEN_DEFINITIONS.variants
		},
		{
			id: 'controls',
			icon: 'controls',
			label: 'Controls',
			definition: L6_TOKEN_DEFINITIONS.controls
		},
		{
			id: 'state',
			icon: 'state',
			label: 'State',
			definition: L6_TOKEN_DEFINITIONS.state
		}
	] as const;
</script>

<Story
	{controls}
	title="Orbit"
	category="Molecules/Token"
	description="Composable orbit molecule that places token nodes around one ring."
	tags={['token', 'orbit', 'molecule']}
>
	{#snippet children(values: any)}
		<div class="token-story-stage">
			<Orbit opened={Boolean(values.opened)} radius={Number(values.radius) || 112} {nodes} />
		</div>
	{/snippet}
</Story>

<style>
	.token-story-stage {
		display: grid;
		place-items: center;
		min-height: 24rem;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 2rem;
	}
</style>
