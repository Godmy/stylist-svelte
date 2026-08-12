<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DefinitionSection from './index.svelte';

	const controls: SlotStory[] = [];
	const imageSrc =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23111a20'/%3E%3Ctext x='50%25' y='50%25' fill='%23a8d7b3' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EDefinition%3C/text%3E%3C/svg%3E";
</script>

<Story
	{controls}
	component={DefinitionSection}
	title="DefinitionSection"
	category="Organisms/Landing"
	description="Landing section that defines the offer with supporting media."
	tags={['landing', 'definition', 'media']}
>
	{#snippet children()}
		<div class="preview">
			<DefinitionSection
				ariaLabel="Definition"
				eyebrow="Definition"
				text="Expert consensus without pretending uncertainty disappeared"
				body="The section explains the concept in direct language, with enough detail to make the offer concrete."
				{imageSrc}
				imageAlt="Definition placeholder"
			/>
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--definition-section-border: var(--color-border-primary, #d1d5db);
		--definition-section-heading: var(--color-text-primary, #111827);
		--definition-section-text: var(--color-text-secondary, #4b5563);
		--definition-section-media-bg: var(--color-background-secondary, #f9fafb);
		container-type: inline-size;
		padding: 1rem;
	}
</style>
