<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingPickupList from './index.svelte';

	const pickupOptions = ['Галле', 'Мирисса', 'Унаватуна', 'Тангалле', 'Коломбо'];
	const controls: SlotStory[] = [
		{ name: 'value', type: 'select', options: pickupOptions, defaultValue: 'Галле' }
	];
</script>

<Story
	id="booking-molecules-booking-pickup-list"
	title="Booking / BookingPickupList"
	component={BookingPickupList}
	category="Booking/Molecules"
	description="Список городов выдачи с чекмаркой у выбранного — переиспользуется в десктопной dropdown-панели BookingFieldPickup и в мобильном аккордеоне бронирования. Фаза 1: выбор только из списка городов, без карты."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingPickupList value={values.value} options={pickupOptions} />
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
