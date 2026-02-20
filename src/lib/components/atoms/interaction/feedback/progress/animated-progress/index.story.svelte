<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import AnimatedProgress from './index.svelte';

	type Props = {
		value?: number;
		min?: number;
		max?: number;
		label?: string;
		showPercentage?: boolean;
		class?: string;
	};

	const controls: ControlConfig[] = [
		{
			name: 'value',
			type: 'number',
			defaultValue: 50,
			min: 0,
			max: 100
		},
		{
			name: 'min',
			type: 'number',
			defaultValue: 0
		},
		{
			name: 'max',
			type: 'number',
			defaultValue: 100
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Progress'
		},
		{
			name: 'showPercentage',
			type: 'boolean',
			defaultValue: true
		}
	];
</script>

<Story
	id="molecules-animated-progress"
	title="AnimatedProgress"
	component={AnimatedProgress}
	category="Molecules"
	description="A progress bar component with animated value display."
	{controls}
>
	{#snippet children(props)}
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">AnimatedProgress Story</h2>
			<AnimatedProgress {...props} />
		</div>
	{/snippet}
</Story>




