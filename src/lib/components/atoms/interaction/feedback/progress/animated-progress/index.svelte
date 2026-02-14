<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
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
	} & HTMLAttributes<HTMLDivElement>>();

	let percentage = $derived(Math.round(((value - min) / (max - min)) * 100));
</script>

<div class={`w-full ${className}`} {...restProps}>
	<div class="mb-1 flex justify-between">
		<span class="text-sm font-medium">{label}</span>
		{#if showPercentage}
			<span class="text-sm font-medium">{percentage}%</span>
		{/if}
	</div>
	<div class="h-2.5 w-full rounded-full bg-gray-200">
		<div class="h-2.5 rounded-full bg-blue-600" style={`width: ${percentage}%`}></div>
	</div>
</div>



