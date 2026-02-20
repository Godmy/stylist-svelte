<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconXCircleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconXCircleProps = {
		size?: IconXCircleSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconXCircleProps & SVGAttributes<SVGSVGElement> = $props();

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
	<circle cx="12" cy="12" r="10" />
	<path d="m15 9-6 6" />
	<path d="m9 9 6 6" />
</svg>
