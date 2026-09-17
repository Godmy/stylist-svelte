<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingCalendar from './index.svelte';

	const controls: SlotStory[] = [{ name: 'value', type: 'text', defaultValue: '2026-10-18' }];
</script>

<Story
	id="booking-molecules-booking-calendar"
	title="Booking / BookingCalendar"
	component={BookingCalendar}
	category="Booking/Molecules"
	description="Мини-календарь (Пн-первая неделя, прошлые даты недоступны) — переиспользуется в десктопной dropdown-панели BookingFieldDate и в мобильном аккордеоне бронирования."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingCalendar value={values.value} />
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
