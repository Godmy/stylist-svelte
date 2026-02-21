<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import LoadingSpinner from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'color', type: 'select', defaultValue: 'blue', options: ['blue', 'gray', 'green', 'red', 'yellow'] },
		{ name: 'showLabel', type: 'boolean', defaultValue: true },
		{ name: 'label', type: 'text', defaultValue: 'Loading data...' }
	];
</script>

<Story component={LoadingSpinner} title="LoadingSpinner" description="Simple spinner with optional status label." {controls}>
	{#snippet children(values: any)}
		<LoadingSpinner size={values.size} color={values.color} showLabel={values.showLabel} label={values.label} class="rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-8" />
	{/snippet}
</Story>
