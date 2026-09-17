<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingFieldAdventures from './index.svelte';

	const controls: SlotStory[] = [];

	let selected = $state<string[]>([]);
</script>

<Story
	id="booking-molecules-booking-field-adventures"
	title="Booking / BookingFieldAdventures"
	component={BookingFieldAdventures}
	category="Booking/Molecules"
	description="Поле «Приключения» в booking-bar — кнопка-триггер, раскрывающая AdventureGrid (travel-commerce) с чипами-иконками по каждому приключению. В самом баре — короткая сводка («Выбрано: N» / «Добавить»)."
	{controls}
>
	{#snippet children()}
		<div class="_surface">
			<BookingFieldAdventures {selected} onChange={(next) => (selected = next)} />
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
