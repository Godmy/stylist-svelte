<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingAccordion from './index.svelte';

	const controls: SlotStory[] = [];
</script>

<Story
	id="booking-organisms-booking-accordion"
	title="Booking / BookingAccordion"
	component={BookingAccordion}
	category="Booking/Organisms"
	description="Мобильная вертикальная лента: одна секция открыта одновременно (Место / Дата / Гости / Приключения). Заголовок каждой секции — всегда живая сводка выбранного (режим чтения), при раскрытии под ним появляются элементы редактирования. Задуман как мобильный аналог BookingBar — переключение между ними через CSS-медиа-запрос на уровне вызывающего компонента, а не JS-детект устройства."
	{controls}
>
	{#snippet children()}
		<div class="_surface">
			<BookingAccordion />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		display: flex;
		justify-content: center;
		padding: 24px;
		background: #f7f3ec;
	}
</style>
