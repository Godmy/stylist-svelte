<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import SectionHeading from './index.svelte';

	const controls: SlotStory[] = [];
</script>

<Story
	{controls}
	component={SectionHeading}
	title="SectionHeading"
	category="Molecules/Landing"
	description="Eyebrow and heading pair for landing page sections."
	tags={['landing', 'heading', 'section']}
>
	{#snippet children()}
		<div class="preview">
			<SectionHeading
				eyebrow="Decision method"
				title="A landing section headline with a clear editorial rhythm"
			/>
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--section-heading-eyebrow-color: var(--color-primary-600, #2563eb);
		--section-heading-title-color: var(--color-text-primary, #111827);
		container-type: inline-size;
		padding: 1rem;
	}
</style>
