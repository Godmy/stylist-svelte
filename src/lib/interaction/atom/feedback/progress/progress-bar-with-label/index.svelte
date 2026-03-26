<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
	let {
		value = 0,
		max = 100,
		label = '',
		showPercentage = true,
		color = 'blue',
		height = 'h-2',
		class: className = '',
		...restProps
	} = $props<{
		value?: number;
		max?: number;
		label?: string;
		showPercentage?: boolean;
		color?: string;
		height?: string;
		class?: string;
	} & InteractionHTMLAttributes<HTMLDivElement>>();

	let percentage = $derived(Math.round((value / max) * 100));

	const colorClasses: Record<string, string> = {
		blue: 'bg-[var(--color-primary-500)]',
		green: 'bg-[var(--color-success-500)]',
		red: 'bg-[var(--color-danger-500)]',
		yellow: 'bg-yellow-500',
		purple: 'bg-[var(--color-secondary-500)]'
	};
</script>

<div class={`${className}`} {...restProps}>
	{#if label}
		<div class="mb-1 flex justify-between">
			<span class="text-sm font-medium">{label}</span>
			{#if showPercentage}
				<span class="text-sm font-medium">{percentage}%</span>
			{/if}
		</div>
	{/if}
	<div class="w-full rounded-full bg-[var(--color-background-tertiary)] ${height}">
		<div
			class="h-full rounded-full ${colorClasses[color as keyof typeof colorClasses] ||
				colorClasses.blue}"
			style={`width: ${percentage}%`}
		></div>
	</div>
	{#if !label && showPercentage}
		<div class="mt-1 text-right">
			<span class="text-sm font-medium">{percentage}%</span>
		</div>
	{/if}
</div>







