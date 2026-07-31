<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Transformable from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'scale', type: 'range', defaultValue: 1.08, min: 0.7, max: 1.4, step: 0.01 },
		{ name: 'rotate', type: 'range', defaultValue: 6, min: -20, max: 20, step: 1 },
		{ name: 'translateY', type: 'range', defaultValue: -6, min: -24, max: 24, step: 1 },
		{ name: 'animateOnHover', type: 'boolean', defaultValue: true },
		{ name: 'animateOnClick', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={Transformable}
	title="Transformable"
	description="Applies transform contracts and optional hover or press motion."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<Transformable
				scale={Number(values.scale)}
				rotate={Number(values.rotate)}
				translateY={Number(values.translateY)}
				translateX={0}
				skewX={0}
				skewY={0}
				transformOrigin="center center"
				animateOnHover={Boolean(values.animateOnHover)}
				animateOnClick={Boolean(values.animateOnClick)}
				class="_c2"
			>
				{#snippet children()}
					<div class="_c3">
						<strong class="_c4">Hover the card</strong>
						<p class="_c5">Use the controls to change the motion contract.</p>
					</div>
				{/snippet}
			</Transformable>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1.5rem;
		background-color: linear-gradient(135deg, #e0f2fe, #f8fafc);
		padding: 2rem;
	}
	._c2 {
		margin-left: auto;
		margin-right: auto;
		max-width: 18rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-sky-200);
		background-color: #ffffff;
		padding: 1.5rem;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	._c3 {
		display: grid;
		gap: 0.5rem;
		text-align: center;
	}
	._c4 {
		color: #0f172a;
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
</style>
