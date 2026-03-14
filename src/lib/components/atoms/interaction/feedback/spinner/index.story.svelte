<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
	import Spinner from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'variant', type: 'select', defaultValue: 'icon', options: ['icon', 'svg', 'css'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'color', type: 'select', defaultValue: 'blue', options: ['blue', 'gray', 'green', 'red', 'yellow', 'white'] },
		{ name: 'showLabel', type: 'boolean', defaultValue: true },
		{ name: 'label', type: 'text', defaultValue: 'Loading...' }
	];
</script>

<Story
	{controls}
	component={Spinner}
	title="Spinner"
	category="Atoms/Interaction/Feedback"
	description="Flexible spinner component with multiple variants (icon, svg, css) for indicating loading states"
	tags={['spinner', 'loader', 'loading', 'progress', 'feedback']}
>
	{#snippet children(values: any)}
		<Spinner
			variant={values.variant as 'icon' | 'svg' | 'css'}
			size={values.size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
			color={values.color as string}
			showLabel={values.showLabel as boolean}
			label={values.label as string}
			class="rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-8"
		/>
	{/snippet}
</Story>


