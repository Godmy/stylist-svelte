<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import NumberedStepGrid from './index.svelte';

	const controls: SlotStory[] = [];
	const steps = [
		{
			title: 'Выбираете маршрут',
			text: 'Групповые экскурсии по расписанию или индивидуальные — под вашу компанию, даты и темп.'
		},
		{
			title: 'Оставляете заявку',
			text: 'Указываете дату и число человек. Система сразу считает стоимость и сумму предоплаты в $ и ₽.'
		},
		{
			title: 'Менеджер подтверждает',
			text: 'Связывается с вами, проверяет наличие мест и закрепляет бронь. Оплата — частичной предоплатой.'
		}
	];
</script>

<Story
	{controls}
	component={NumberedStepGrid}
	title="NumberedStepGrid"
	category="Molecules/Layout"
	description="Kicker + title heading above an N-column numbered step list. Collapses to 1 column under 820px."
	tags={['layout', 'steps', 'process', 'how-it-works']}
>
	{#snippet children()}
		<div class="preview">
			<NumberedStepGrid kicker="Как это работает" title="Три шага до поездки" {steps} />
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		max-width: 56rem;
		padding: 1rem;
	}
</style>
