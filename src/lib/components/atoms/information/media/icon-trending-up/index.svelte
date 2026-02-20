<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconTrendingUpSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconTrendingUpProps = {
		size?: IconTrendingUpSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconTrendingUpProps & SVGAttributes<SVGSVGElement> = $props();

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
	<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
	<polyline points="17 6 23 6 23 12" />
</svg>
