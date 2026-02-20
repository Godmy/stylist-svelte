<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconArrowUpSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconArrowUpProps = {
		size?: IconArrowUpSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconArrowUpProps & SVGAttributes<SVGSVGElement> = $props();

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
	<line x1="12" x2="12" y1="19" y2="5" />
	<polyline points="5 12 12 5 19 12" />
</svg>
