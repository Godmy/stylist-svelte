<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
	let {
		value = 0,
		min = 0,
		max = 100,
		label = 'Progress',
		showPercentage = true,
		class: className = '',
		...restProps
	} = $props<{
		value?: number;
		min?: number;
		max?: number;
		label?: string;
		showPercentage?: boolean;
		class?: string;
	} & InteractionHTMLAttributes<HTMLDivElement>>();

	let percentage = $derived(Math.round(((value - min) / (max - min)) * 100));
</script>

<div class={`w-full ${className}`} {...restProps}>
	<div class="mb-1 flex justify-between">
		<span class="text-sm font-medium">{label}</span>
		{#if showPercentage}
			<span class="text-sm font-medium">{percentage}%</span>
		{/if}
	</div>
	<div class="h-2.5 w-full rounded-full bg-[var(--color-background-tertiary)]">
		<div class="h-2.5 rounded-full bg-[var(--color-primary-600)]" style={`width: ${percentage}%`}></div>
	</div>
</div>






