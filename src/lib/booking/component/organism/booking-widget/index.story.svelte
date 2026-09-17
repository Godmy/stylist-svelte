<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingWidget from './index.svelte';

	const controls: SlotStory[] = [];
</script>

<Story
	id="booking-organisms-booking-widget"
	title="Booking / BookingWidget"
	component={BookingWidget}
	category="Booking/Organisms"
	description="Отзывчивая точка входа: BookingBar на десктопе, BookingAccordion на мобильном (≤640px). Переключение — чистый CSS-медиа-запрос (оба варианта в DOM, один скрыт через display:none), без JS-детекта устройства и без риска рассинхрона с SSR. Сузьте окно превью, чтобы увидеть переключение."
	{controls}
>
	{#snippet children()}
		<div class="_surface">
			<BookingWidget />
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		display: block;
		width: 100%;
		padding: 24px;
		background: #f7f3ec;
	}
</style>
