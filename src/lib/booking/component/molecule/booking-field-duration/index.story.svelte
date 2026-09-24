<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingFieldDuration from './index.svelte';

	const controls: SlotStory[] = [];
</script>

<Story
	id="booking-molecules-booking-field-duration"
	title="Booking / BookingFieldDuration"
	component={BookingFieldDuration}
	category="Booking/Molecules"
	description="Поле «Количество дней» — кнопка-триггер с иконкой и выпадающим мультиселектом чипов (BookingDurationPicker)."
	{controls}
>
	{#snippet children()}
		<div class="_surface">
			<BookingFieldDuration />
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
