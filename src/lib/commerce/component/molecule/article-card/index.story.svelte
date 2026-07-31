<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ArticleCard from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Shipping Design Systems at Scale' },
		{ name: 'subtitle', type: 'text', defaultValue: 'How teams align product and engineering.' },
		{ name: 'image', type: 'text', defaultValue: '' }
	];
</script>

<Story
	component={ArticleCard}
	title="ArticleCard"
	description="Content preview card for editorial and blog entries."
	{controls}
>
	{#snippet children(values: any)}
		<ArticleCard
			title={values.title}
			subtitle={values.subtitle}
			image={values.image}
			actions={[{ label: 'Read', onClick: () => {} }]}
		/>
	{/snippet}
</Story>
