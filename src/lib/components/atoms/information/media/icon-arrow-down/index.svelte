<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconArrowDownSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconArrowDownProps = {
		size?: IconArrowDownSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconArrowDownProps & SVGAttributes<SVGSVGElement> = $props();

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
	<line x1="12" x2="12" y1="5" y2="19" />
	<polyline points="19 12 12 19 5 12" />
</svg>
