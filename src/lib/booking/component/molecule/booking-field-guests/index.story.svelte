<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingFieldGuests from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'adults', type: 'number', defaultValue: 2, min: 1, max: 16, step: 1 },
		{ name: 'seniors', type: 'number', defaultValue: 0, min: 0, max: 16, step: 1 },
		{ name: 'childrenTeen', type: 'number', defaultValue: 0, min: 0, max: 12, step: 1 },
		{ name: 'children', type: 'number', defaultValue: 0, min: 0, max: 12, step: 1 },
		{ name: 'childrenUnder2', type: 'number', defaultValue: 0, min: 0, max: 8, step: 1 }
	];
</script>

<Story
	id="booking-molecules-booking-field-guests"
	title="Booking / BookingFieldGuests"
	component={BookingFieldGuests}
	category="Booking/Molecules"
	description="Поле «Гости» — кнопка-триггер с иконкой. В самом баре — короткая сводка («N человек», без разбивки по категориям, чтобы ширина триггера не менялась и панель не сдвигалась), в раскрывающейся панели — полный BookingGuest со всеми пятью категориями."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingFieldGuests
				adults={Number(values.adults)}
				seniors={Number(values.seniors)}
				childrenTeen={Number(values.childrenTeen)}
				children={Number(values.children)}
				childrenUnder2={Number(values.childrenUnder2)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		display: inline-grid;
		padding: 24px;
		background: #f7f3ec;
	}
</style>
