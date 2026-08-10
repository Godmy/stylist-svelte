<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import StepList from './index.svelte';

	const controls: SlotStory[] = [];
	const steps = [
		'Collect independent estimates before group discussion starts.',
		'Expose disagreement as ranges, confidence, and explicit assumptions.',
		'Turn uncertainty into priorities that a committee can act on.'
	];
</script>

<Story
	{controls}
	component={StepList}
	title="StepList"
	category="Molecules/Landing"
	description="Numbered landing page step list."
	tags={['landing', 'steps', 'process']}
>
	{#snippet children()}
		<div class="preview">
			<StepList {steps} />
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--step-list-text: var(--color-text-primary, #111827);
		--step-list-marker-border: var(--color-border-primary, #d1d5db);
		--step-list-marker-color: var(--color-primary-600, #2563eb);
		max-width: 36rem;
		padding: 1rem;
	}
</style>
