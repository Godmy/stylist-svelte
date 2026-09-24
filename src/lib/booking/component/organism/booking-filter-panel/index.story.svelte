<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingFilterPanel from './index.svelte';

	const controls: SlotStory[] = [];
</script>

<Story
	id="booking-organisms-booking-filter-panel"
	title="Booking / BookingFilterPanel"
	component={BookingFilterPanel}
	category="Booking/Organisms"
	description="Левая боковая панель для общего списка туров (store-page на главной), обновлена 2026-09-23 по правкам заказчика: «Что хотите посмотреть?» (EXPERIENCE_CATEGORIES, 12 категорий), тип экскурсии (радио), «Рекомендуем с детьми» / «Без раннего выезда» (чекбоксы), физическая нагрузка (радио, 3 уровня с описанием). Откуда/Гости/Когда/Количество дней сюда не входят — они уже есть в BookingBar над списком, дублировать их здесь не нужно."
	{controls}
>
	{#snippet children()}
		<div class="_surface">
			<BookingFilterPanel />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		display: flex;
		padding: 24px;
		background: #f7f3ec;
	}
</style>
