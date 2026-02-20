<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconTrendingDownSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconTrendingDownProps = {
		size?: IconTrendingDownSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconTrendingDownProps & SVGAttributes<SVGSVGElement> = $props();

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
	<polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
	<polyline points="17 18 23 18 23 12" />
</svg>
