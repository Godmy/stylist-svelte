<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingBar from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'pickup', type: 'select', options: ['Галле', 'Мирисса', 'Унаватуна', 'Тангалле'], defaultValue: 'Галле' },
		{ name: 'date', type: 'text', defaultValue: '2026-10-18' },
		{ name: 'adults', type: 'number', defaultValue: 2, min: 1, max: 8, step: 1 },
		{ name: 'seniors', type: 'number', defaultValue: 0, min: 0, max: 8, step: 1 },
		{ name: 'childrenTeen', type: 'number', defaultValue: 0, min: 0, max: 6, step: 1 },
		{ name: 'children', type: 'number', defaultValue: 1, min: 0, max: 6, step: 1 },
		{ name: 'childrenUnder2', type: 'number', defaultValue: 0, min: 0, max: 4, step: 1 },
		{ name: 'compact', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="booking-molecules-booking-bar"
	title="Booking / BookingBar"
	component={BookingBar}
	category="Booking/Molecules"
	description="Отзывчивый бар бронирования: место, дата, гости (5 категорий), приключения. `compact` — сжатый режим для встраивания (например, в BookingBridge при скролле)."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingBar
				value={{
					pickup: values.pickup,
					date: values.date,
					adults: Number(values.adults),
					seniors: Number(values.seniors),
					childrenTeen: Number(values.childrenTeen),
					children: Number(values.children),
					childrenUnder2: Number(values.childrenUnder2),
					adventures: []
				}}
				compact={Boolean(values.compact)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 32px 16px;
		background: linear-gradient(180deg, #d6eef0, #f7f3ec);
	}
</style>
