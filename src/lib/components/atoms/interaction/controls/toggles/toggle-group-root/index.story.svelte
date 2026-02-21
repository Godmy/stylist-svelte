<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ToggleGroupRoot from './index.svelte';
	import ToggleGroupItem from '../toggle-group-item/index.svelte';

	let valueText = $state('none');

	const controls: ControlConfig[] = [
		{ name: 'type', type: 'select', defaultValue: 'single', options: ['single', 'multiple'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={ToggleGroupRoot} title="ToggleGroupRoot" description="Context provider that coordinates single or multiple toggle selection." {controls}>
	{#snippet children(values: any)}
		<div class="space-y-3">
			<ToggleGroupRoot
				type={values.type}
				disabled={values.disabled}
				onValueChange={(e) => {
					const value = e.detail.value;
					valueText = Array.isArray(value) ? value.join(', ') : value || 'none';
				}}
			>
				<ToggleGroupItem value="day">Day</ToggleGroupItem>
				<ToggleGroupItem value="week">Week</ToggleGroupItem>
				<ToggleGroupItem value="month">Month</ToggleGroupItem>
			</ToggleGroupRoot>
			<p class="text-sm text-[--color-text-secondary]">Current value: {valueText}</p>
		</div>
	{/snippet}
</Story>
