<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import BookingAdventureList from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'selected',
			type: 'select',
			options: ['none', 'one', 'two', 'all'],
			defaultValue: 'two'
		},
		{ name: 'emptyLabel', type: 'text', defaultValue: 'Добавить' }
	];

	function selectionFor(mode: string): string[] {
		if (mode === 'one') return [SAMPLE_EXCURSIONS[0].id];
		if (mode === 'two') return [SAMPLE_EXCURSIONS[0].id, SAMPLE_EXCURSIONS[1].id];
		if (mode === 'all') return SAMPLE_EXCURSIONS.map((excursion) => excursion.id);
		return [];
	}
</script>

<Story
	id="booking-molecules-booking-adventure-list"
	title="Booking / BookingAdventureList"
	component={BookingAdventureList}
	category="Booking/Molecules"
	description="Ряд маленьких цветных значков выбранных приключений (без чисел) — переиспользуется и в заголовке секции «Приключения» booking-accordion, и в триггере BookingFieldAdventures на десктопном баре. emptyLabel — текст, когда ничего не выбрано (пусто по умолчанию — не рендерит ничего)."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingAdventureList selected={selectionFor(values.selected)} emptyLabel={values.emptyLabel} />
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
