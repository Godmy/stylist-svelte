<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingDurationPicker from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'selected',
			type: 'select',
			options: ['none', 'one-day', 'two-and-three-plus'],
			defaultValue: 'none'
		}
	];

	function selectionFor(mode: string): number[] {
		if (mode === 'one-day') return [1];
		if (mode === 'two-and-three-plus') return [2, 3];
		return [];
	}
</script>

<Story
	id="booking-molecules-booking-duration-picker"
	title="Booking / BookingDurationPicker"
	component={BookingDurationPicker}
	category="Booking/Molecules"
	description="Мультивыбор длительности тура в днях (чипы «1 день» / «2 дня» / «3+ дня») — фильтр по каталогу туров, а не параметр брони одного тура. Используется в секции «Количество дней» booking-accordion и в booking-filter-panel."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingDurationPicker selected={selectionFor(values.selected)} />
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
