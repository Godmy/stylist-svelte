<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import NumberInput from './index.svelte';

	let value = $state(10);

	const controls: ControlConfig[] = [
		{ name: 'min', type: 'number', defaultValue: 0, min: -100, max: 100, step: 1 },
		{ name: 'max', type: 'number', defaultValue: 100, min: 1, max: 500, step: 1 },
		{ name: 'step', type: 'number', defaultValue: 1, min: 1, max: 50, step: 1 },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'readonly', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={NumberInput} title="NumberInput" description="Numeric input with increment/decrement controls." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-2 max-w-xs">
			<NumberInput
				value={value}
				min={values.min}
				max={values.max}
				step={values.step}
				disabled={values.disabled}
				readonly={values.readonly}
				onValueChange={(next) => (value = next)}
			/>
			<p class="text-sm text-[--color-text-secondary]">Current value: {value}</p>
		</div>
	{/snippet}
</Story>
