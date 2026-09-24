<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingBridge from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'progress', type: 'range', min: 0, max: 1, step: 0.01, defaultValue: 0.24 },
		{ name: 'pickup', type: 'select', options: ['Галле', 'Мирисса', 'Унаватуна', 'Тангалле'], defaultValue: 'Галле' },
		{ name: 'date', type: 'text', defaultValue: '2026-10-18' },
		{ name: 'adults', type: 'number', defaultValue: 2, min: 1, max: 8, step: 1 },
		{ name: 'children', type: 'number', defaultValue: 0, min: 0, max: 6, step: 1 },
		{ name: 'showDuration', type: 'boolean', label: 'Показать "Количество дней"', defaultValue: true }
	];
</script>

<Story
	id="booking-organisms-booking-bridge"
	title="Booking / BookingBridge"
	component={BookingBridge}
	category="Booking/Organisms"
	description="Sticky scroll bridge: рендерит BookingBar (десктоп, без приключений — они только в BookingFilterPanel) и BookingAccordion (мобильный breakpoint, приключения остаются последней секцией). `compact` включается сам при `progress > 0.45`. Тащи `progress`, чтобы прокрутить состояние."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingBridge
				progress={Number(values.progress)}
				value={{
					pickup: values.pickup,
					date: values.date,
					adults: Number(values.adults),
					seniors: 0,
					childrenTeen: 0,
					children: Number(values.children),
					childrenUnder3: 0,
					adventures: [],
					durationDays: []
				}}
				showDuration={Boolean(values.showDuration)}
			/>
			<div class="_surface__filler">Прокручиваемое содержимое страницы под липким баром</div>
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding-top: 120px;
		background: linear-gradient(180deg, #2f4a45, #f7f3ec 55%);
	}
	._surface__filler {
		height: 60vh;
		display: grid;
		place-items: center;
		color: rgba(23, 35, 31, 0.4);
		font-size: 0.9rem;
	}
</style>
