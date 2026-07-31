<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';

	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import GradientBackground from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'variant',

			type: 'select',

			defaultValue: 'dynamic',

			options: ['dynamic', 'static', 'particles']
		},

		{
			name: 'direction',

			type: 'select',

			defaultValue: 'diagonal',

			options: ['diagonal', 'horizontal', 'vertical', 'radial']
		},

		{ name: 'speed', type: 'number', defaultValue: 20, min: 5, max: 60, step: 1 },

		{ name: 'intensity', type: 'number', defaultValue: 50, min: 10, max: 100, step: 1 }
	];
</script>

<Story
	component={GradientBackground}
	title="GradientBackground"
	description="Decorative animated background container."
	{controls}
>
	{#snippet children(values: any)}
		<GradientBackground
			variant={values.variant}
			direction={values.direction}
			speed={values.speed}
			intensity={values.intensity}
			class="_c1"
		>
			{#snippet children()}
				<div class="_c2">
					<h3 class="_c3">Background Preview</h3>

					<p class="_c4">Use this for hero sections or feature callouts.</p>
				</div>
			{/snippet}
		</GradientBackground>
	{/snippet}
</Story>

<style>
	._c1 {
		min-height: 13rem;

		border-radius: 1rem;
	}

	._c2 {
		padding: 1.5rem;

		color: var(--color-text-inverse);
	}

	._c3 {
		font-size: 1.25rem;

		line-height: 1.75rem;

		font-weight: 600;
	}

	._c4 {
		font-size: 0.875rem;

		line-height: 1.25rem;
	}

	._c4 {
		opacity: var(--opacity-90);
	}
</style>
