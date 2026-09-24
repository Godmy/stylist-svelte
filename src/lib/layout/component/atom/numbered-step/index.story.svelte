<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import NumberedStep from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'index', type: 'number', defaultValue: 1 },
		{ name: 'title', type: 'text', defaultValue: 'Выбираете маршрут' },
		{
			name: 'text',
			type: 'text',
			defaultValue: 'Групповые экскурсии по расписанию или индивидуальные — под вашу компанию, даты и темп.'
		}
	];
</script>

<Story
	{controls}
	component={NumberedStep}
	title="NumberedStep"
	category="Atoms/Layout"
	description="Single numbered step (rule + index + title + text) — one column of a NumberedStepGrid."
	tags={['layout', 'steps', 'process']}
>
	{#snippet children(values: any)}
		<ol class="preview">
			<NumberedStep {...values} />
		</ol>
	{/snippet}
</Story>

<style>
	.preview {
		max-width: 18rem;
		margin: 0;
		padding: 0;
		list-style: none;
		--numbered-step-index-color: var(--color-primary-600, #2563eb);
		--numbered-step-rule-color: var(--color-primary-600, #2563eb);
	}
</style>
