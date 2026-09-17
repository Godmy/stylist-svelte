<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BookingDropdown from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'align', type: 'select', options: ['left', 'right'], defaultValue: 'left' }
	];
</script>

<Story
	id="booking-atoms-booking-dropdown"
	title="Booking / BookingDropdown"
	component={BookingDropdown}
	category="Booking/Atoms"
	description="Базовый шелл «кнопка-триггер + всплывающая панель» для полей booking-виджета: закрывается по клику снаружи, по Escape, и через close() из content-снипета."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_surface">
			<BookingDropdown align={values.align}>
				{#snippet trigger({ open })}
					<button type="button" class="_trigger" aria-expanded={open}>
						Открыть панель
					</button>
				{/snippet}
				{#snippet content({ close })}
					<div class="_panel-content">
						<p>Содержимое панели.</p>
						<button type="button" onclick={close}>Закрыть</button>
					</div>
				{/snippet}
			</BookingDropdown>
		</div>
	{/snippet}
</Story>

<style>
	._surface {
		display: inline-grid;
		padding: 24px;
		background: #f7f3ec;
	}
	._trigger {
		border: 1px solid rgba(23, 35, 31, 0.16);
		border-radius: 999px;
		padding: 10px 16px;
		background: white;
		cursor: pointer;
	}
	._panel-content {
		display: grid;
		gap: 10px;
		padding: 16px;
		min-width: 220px;
	}
</style>
