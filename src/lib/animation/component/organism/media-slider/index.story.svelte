<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import MediaSlider from './index.svelte';

	const slides = [
		{
			id: 'palms',
			type: 'image' as const,
			src: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1800&q=80',
			alt: 'Пальмы и тропический берег'
		},
		{
			id: 'ocean-video',
			type: 'video' as const,
			src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
			poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80',
			alt: 'Видео-сцена океана'
		},
		{
			id: 'tea',
			type: 'image' as const,
			src: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?auto=format&fit=crop&w=1800&q=80',
			alt: 'Чайные плантации в горах'
		}
	];

	const controls: SlotStory[] = [
		{ name: 'autoPlay', type: 'boolean', defaultValue: true },
		{ name: 'autoPlayInterval', type: 'number', defaultValue: 4000 },
		{ name: 'showControls', type: 'boolean', defaultValue: true },
		{ name: 'showIndicators', type: 'boolean', defaultValue: true },
		{ name: 'caption1', type: 'text', label: 'Подпись слайда 1', defaultValue: 'Пальмы, океан и тёплый свет' },
		{ name: 'caption2', type: 'text', label: 'Подпись слайда 2', defaultValue: 'Вода движется медленно' },
		{ name: 'caption3', type: 'text', label: 'Подпись слайда 3', defaultValue: 'Чайные плантации и облака' }
	];
</script>

<Story
	{controls}
	component={MediaSlider}
	title="MediaSlider"
	description="Full-viewport image/video slider. Video slides advance on end, image slides on a timer. Respects prefers-reduced-motion."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<MediaSlider
				slides={[
					{ ...slides[0], caption: values.caption1 },
					{ ...slides[1], caption: values.caption2 },
					{ ...slides[2], caption: values.caption3 }
				]}
				autoPlay={Boolean(values.autoPlay)}
				autoPlayInterval={Number(values.autoPlayInterval)}
				showControls={Boolean(values.showControls)}
				showIndicators={Boolean(values.showIndicators)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 70vh;
		overflow: hidden;
		border-radius: 0.5rem;
	}

	._c1 :global(.c-media-slider) {
		height: 100%;
	}
</style>
