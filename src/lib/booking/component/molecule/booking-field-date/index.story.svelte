<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingFieldDate from './index.svelte';

	const controls: SlotStory[] = [{ name: 'value', type: 'text', defaultValue: '2026-10-18' }];
</script>

<Story
	id="booking-molecules-booking-field-date"
	title="Booking / BookingFieldDate"
	component={BookingFieldDate}
	category="Booking/Molecules"
	description="Поле «Когда» — кнопка-триггер с иконкой и выпадающим мини-календарём (даты в прошлом недоступны)."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingFieldDate value={values.value} />
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
