<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import WorkflowSection from './index.svelte';

	const controls: SlotStory[] = [];
	const imageSrc =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23111a20'/%3E%3Ctext x='50%25' y='50%25' fill='%23a8d7b3' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EWorkflow%3C/text%3E%3C/svg%3E";
	const steps = [
		'Ask experts for independent ranges and confidence before discussion.',
		'Compare disagreement, assumptions, and evidence quality in one view.',
		'Publish a decision packet with review triggers and owners.'
	];
	const comparisonColumns: [string, string, string] = ['Meeting', 'Survey', 'WeOracle'];
	const comparisonCriteria = ['Independent estimates', 'Visible disagreement', 'Decision artifact'];
	const comparisonRows: [string, string, string][] = [
		['Weak', 'Medium', 'Strong'],
		['Often hidden', 'Partial', 'Explicit'],
		['Notes', 'Raw answers', 'Range with assumptions']
	];
</script>

<Story
	{controls}
	component={WorkflowSection}
	title="WorkflowSection"
	category="Organisms/Landing"
	description="Landing workflow section with process steps, media, and comparison table."
	tags={['landing', 'workflow', 'comparison']}
>
	{#snippet children()}
		<div class="preview">
			<WorkflowSection
				ariaLabel="Workflow"
				eyebrow="Workflow"
				title="From independent judgment to committee-ready output"
				{steps}
				{imageSrc}
				imageAlt="Workflow placeholder"
				comparisonTitle="Compared with common alternatives"
				{comparisonColumns}
				{comparisonCriteria}
				{comparisonRows}
			/>
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--workflow-section-border: var(--color-border-primary, #d1d5db);
		--workflow-section-text: var(--color-text-secondary, #4b5563);
		--workflow-section-heading: var(--color-text-primary, #111827);
		--workflow-section-media-bg: var(--color-background-secondary, #f9fafb);
		--workflow-section-marker-border: var(--color-border-primary, #d1d5db);
		--workflow-section-marker-color: var(--color-primary-600, #2563eb);
		--section-heading-eyebrow-color: var(--color-primary-600, #2563eb);
		--section-heading-title-color: var(--color-text-primary, #111827);
		container-type: inline-size;
		padding: 1rem;
	}
</style>
