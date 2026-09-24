<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingPhysicalLoadFilter from './index.svelte';

	const controls: SlotStory[] = [];
</script>

<Story
	id="booking-molecules-booking-physical-load-filter"
	title="Booking / BookingPhysicalLoadFilter"
	component={BookingPhysicalLoadFilter}
	category="Booking/Molecules"
	description="Радио-выбор физической нагрузки (низкая/средняя/высокая) с описанием под каждым вариантом — часть BookingFilterPanel."
	{controls}
>
	{#snippet children()}
		<div class="_surface">
			<BookingPhysicalLoadFilter />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #f7f3ec;
	}
</style>
