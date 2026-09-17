<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingFieldPickup from './index.svelte';

	const pickupOptions = ['Галле', 'Мирисса', 'Унаватуна', 'Тангалле', 'Коломбо'];
	const controls: SlotStory[] = [
		{ name: 'value', type: 'select', options: pickupOptions, defaultValue: 'Галле' }
	];
</script>

<Story
	id="booking-molecules-booking-field-pickup"
	title="Booking / BookingFieldPickup"
	component={BookingFieldPickup}
	category="Booking/Molecules"
	description="Поле «Откуда вас забрать» — кнопка-триггер с иконкой и выпадающим списком городов."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingFieldPickup value={values.value} options={pickupOptions} />
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
