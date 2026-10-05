<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import LandingTopicGrid from './index.svelte';
	import type { LandingTopic } from '$stylist/travel-commerce/type/object/landing-topic';

	const topics: LandingTopic[] = [
		{
			id: 'individual',
			title: 'Индивидуальные экскурсии',
			caption: 'Только вы и ваши спутники',
			image: 'https://images.unsplash.com/photo-1586613835341-6a1d5d8b2a43?w=1200',
			href: '#individual'
		},
		{
			id: 'group',
			title: 'Групповые экскурсии',
			caption: 'Выезды по расписанию',
			image: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=1200',
			href: '#group'
		},
		{
			id: 'tour',
			title: 'Туры',
			caption: 'Многодневные маршруты',
			image: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?w=1200',
			href: '#tour'
		}
	];
</script>

<Story
	id="travel-commerce-organisms-landing-topic-grid"
	title="Travel Commerce / LandingTopicGrid"
	category="Travel Commerce/Organisms"
	component={LandingTopicGrid}
	description="Themed photo tiles that lead from the landing page into the catalogue and info pages."
>
	{#snippet children()}
		<div class="_surface">
			<LandingTopicGrid {topics} />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #f7f3ec;
	}
</style>
