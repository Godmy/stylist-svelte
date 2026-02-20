<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconCheckCircleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconCheckCircleProps = {
		size?: IconCheckCircleSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconCheckCircleProps & SVGAttributes<SVGSVGElement> = $props();

	const {
		size = 'md',
		strokeWidth = 1.5,
		class: className = '',
		...restProps
	} = props;

	const iconClasses = $derived(
		IconStyleManager.getIconClasses(size, className)
	);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={iconClasses}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	{...restProps}
>
	<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
	<polyline points="22 4 12 14.01 9 11.01" />
</svg>
