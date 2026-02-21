<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import StepConnector from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'status', type: 'select', defaultValue: 'active', options: ['pending', 'active', 'completed', 'error'] },
		{ name: 'class', type: 'text', defaultValue: 'h-1.5 w-20 rounded-full bg-[--color-border-secondary]' }
	];
</script>

<Story component={StepConnector} title="StepConnector" description="Visual bridge between steps in a multi-step flow." {controls}>
	{#snippet children(values: any)}
		<div class="flex items-center gap-3 text-xs font-medium text-[--color-text-secondary]">
			<span>Step 1</span>
			<StepConnector status={values.status} class={values.class} />
			<span>Step 2</span>
		</div>
	{/snippet}
</Story>
