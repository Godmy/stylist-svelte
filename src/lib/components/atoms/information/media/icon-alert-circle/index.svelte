<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconAlertCircleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconAlertCircleProps = {
		size?: IconAlertCircleSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconAlertCircleProps & SVGAttributes<SVGSVGElement> = $props();

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
	<line x1="12" x2="12" y1="8" y2="12" />
	<line x1="12" x2="12.01" y1="16" y2="16" />
</svg>
