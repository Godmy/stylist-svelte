<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ProgressBar from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'value', type: 'number', defaultValue: 58, min: 0, max: 100, step: 1 },
		{ name: 'max', type: 'number', defaultValue: 100, min: 1, max: 200, step: 1 },
		{ name: 'label', type: 'text', defaultValue: 'Deployment progress' },
		{ name: 'showPercentage', type: 'boolean', defaultValue: true },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'variant', type: 'select', defaultValue: 'primary', options: ['primary', 'success', 'warning', 'danger'] }
	];
</script>

<Story component={ProgressBar} title="ProgressBar" description="Linear progress indicator with label and visual variants." {controls}>
	{#snippet children(values: any)}
		<ProgressBar
			value={values.value}
			max={values.max}
			label={values.label}
			showPercentage={values.showPercentage}
			size={values.size}
			variant={values.variant}
		/>
	{/snippet}
</Story>
