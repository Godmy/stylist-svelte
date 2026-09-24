<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingGuest from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'adults', type: 'number', defaultValue: 2, min: 1, max: 16, step: 1 },
		{ name: 'seniors', type: 'number', defaultValue: 0, min: 0, max: 16, step: 1 },
		{ name: 'childrenTeen', type: 'number', defaultValue: 0, min: 0, max: 12, step: 1 },
		{ name: 'children', type: 'number', defaultValue: 0, min: 0, max: 12, step: 1 },
		{ name: 'childrenUnder3', type: 'number', defaultValue: 0, min: 0, max: 8, step: 1 },
		{ name: 'textSize', type: 'text', defaultValue: '1rem' },
		{ name: 'gap', type: 'text', defaultValue: '18px' },
		{ name: 'background', type: 'text', defaultValue: '' }
	];
</script>

<Story
	id="booking-molecules-booking-guest"
	title="Booking / BookingGuest"
	component={BookingGuest}
	category="Booking/Molecules"
	description="Поле «Кто поедет»: пять InputStepper (взрослые/пенсионеры со скидкой/дети 13-18/дети до 13/дети до 3) с подписью слева и степпером справа (justify-content: space-between). `textSize` управляет размером подписи, `gap` — минимальным расстоянием, `background` — фоном поля."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingGuest
				adults={Number(values.adults)}
				seniors={Number(values.seniors)}
				childrenTeen={Number(values.childrenTeen)}
				children={Number(values.children)}
				childrenUnder3={Number(values.childrenUnder3)}
				textSize={values.textSize}
				gap={values.gap}
				background={values.background || undefined}
			/>
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
