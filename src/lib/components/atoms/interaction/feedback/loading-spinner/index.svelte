<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		size?: 'sm' | 'md' | 'lg';
		color?: string;
		label?: string;
		showLabel?: boolean;
		class?: string;
		spinnerClass?: string;
	} & HTMLAttributes<HTMLDivElement>;

	let {
		size = 'md',
		color = 'blue',
		label = 'Loading...',
		showLabel = true,
		class: className = '',
		spinnerClass = '',
		...restProps
	}: Props = $props();

	const sizeClasses = $derived(() => {
		if (size === 'sm') {
			return 'w-6 h-6';
		} else if (size === 'md') {
			return 'w-8 h-8';
		} else if (size === 'lg') {
			return 'w-12 h-12';
		}
		return '';
	});

	const colorClasses = $derived(() => {
		if (color === 'blue') {
			return 'text-blue-500';
		} else if (color === 'gray') {
			return 'text-gray-500';
		} else if (color === 'green') {
			return 'text-green-500';
		} else if (color === 'red') {
			return 'text-red-500';
		} else if (color === 'yellow') {
			return 'text-yellow-500';
		} else {
			// Custom color
			return `text-[${color}]`;
		}
	});
</script>

<div class={`flex flex-col items-center justify-center ${className}`} {...restProps}>
	<svg
		class={`animate-spin ${sizeClasses} ${colorClasses} ${spinnerClass}`}
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
	>
		<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
		></circle>
		<path
			class="opacity-75"
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		></path>
	</svg>

	{#if showLabel}
		<span class="mt-2 text-sm text-gray-600">{label}</span>
	{/if}
</div>



