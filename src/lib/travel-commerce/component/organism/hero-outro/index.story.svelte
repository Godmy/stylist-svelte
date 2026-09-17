<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import HeroOutro from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Choose your Sri Lanka' },
		{
			name: 'text',
			type: 'text',
			defaultValue: 'Tell us what you want to see, and we will shape the route around your dates.'
		},
		{ name: 'progress', type: 'range', defaultValue: 0.7, min: 0, max: 1, step: 0.05 }
	];
</script>

<Story
	id="travel-commerce-organisms-hero-outro"
	title="Travel Commerce / HeroOutro"
	category="Travel Commerce/Organisms"
	component={HeroOutro}
	description="Outro panel that resolves the cinematic hero into the shopping flow."
	{controls}
>
	{#snippet children(values: any)}
		<HeroOutro title={values.title} text={values.text} progress={Number(values.progress)} />
	{/snippet}
</Story>
