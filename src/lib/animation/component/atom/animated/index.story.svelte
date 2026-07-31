<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Animated from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'from', type: 'number', defaultValue: 1250 },
		{ name: 'to', type: 'number', defaultValue: 9875 },
		{ name: 'prefix', type: 'text', defaultValue: '$' },
		{ name: 'suffix', type: 'text', defaultValue: '' }
	];
</script>

<Story
	{controls}
	component={Animated}
	title="Animated"
	description="Animates a numeric value and renders the formatted result."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<p class="_c2">Revenue target</p>
			<Animated
				from={Number(values.from)}
				to={Number(values.to)}
				format={(value) => `${values.prefix}${Math.round(value).toLocaleString()}${values.suffix}`}
				class="_c3"
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #f8fafc;
		padding: 1.5rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
	._c3 {
		font-size: 2.25rem;
		line-height: 2.5rem;
		font-weight: 600;
		letter-spacing: -0.025em;
		color: #0f172a;
	}
</style>
