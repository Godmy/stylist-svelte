<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import TourCardBadges from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'tourType', type: 'select', defaultValue: 'group', options: ['group', 'individual', 'tour'] },
		{ name: 'duration', type: 'text', defaultValue: '2 дня' },
		{ name: 'highlight', type: 'text', defaultValue: 'ТОП' },
		{ name: 'onDark', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="travel-commerce-molecules-tour-card-badges"
	title="Travel Commerce / TourCardBadges"
	component={TourCardBadges}
	category="Travel Commerce/Molecules"
	description="Product card badges: promo mark, tour type and day count."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface" class:_dark={values.onDark}>
			<TourCardBadges
				tourType={values.tourType}
				duration={values.duration}
				highlights={values.highlight ? [values.highlight] : []}
				onDark={values.onDark}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #ffffff;
	}
	._surface._dark {
		background: #17231f;
	}
</style>
