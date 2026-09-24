<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingTourTypeFilter from './index.svelte';

	const controls: SlotStory[] = [];
</script>

<Story
	id="booking-molecules-booking-tour-type-filter"
	title="Booking / BookingTourTypeFilter"
	component={BookingTourTypeFilter}
	category="Booking/Molecules"
	description="Радио-выбор «Индивидуальная экскурсия» / «Групповая экскурсия» — часть BookingFilterPanel."
	{controls}
>
	{#snippet children()}
		<div class="_surface">
			<BookingTourTypeFilter />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		padding: 24px;
		background: #f7f3ec;
	}
</style>
