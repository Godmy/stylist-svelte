<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AnimatedBackground from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'class', type: 'text', defaultValue: '' }
	];
</script>

<Story
	{controls}
	component={AnimatedBackground}
	title="AnimatedBackground"
	description="Ambient animated background with floating shapes, orbs, and particles. Wraps any content with a layered motion effect."
>
	{#snippet children(values: any)}
		<AnimatedBackground class={values.class || undefined}>
			<div
				style="padding: 3rem 2rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; text-align: center;"
			>
				<p style="font-size: 1.5rem; font-weight: 600; color: var(--color-text-primary);">
					Animated Background
				</p>
				<p style="font-size: 0.875rem; color: var(--color-text-secondary); max-width: 28rem;">
					Ambient layers of floating shapes, glowing orbs, and drifting particles compose a living
					background behind your content.
				</p>
			</div>
		</AnimatedBackground>
	{/snippet}
</Story>
