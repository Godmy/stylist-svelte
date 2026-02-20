<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconMenuSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconMenuProps = {
		size?: IconMenuSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconMenuProps & SVGAttributes<SVGSVGElement> = $props();

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
	<line x1="4" x2="20" y1="12" y2="12" />
	<line x1="4" x2="20" y1="6" y2="6" />
	<line x1="4" x2="20" y1="18" y2="18" />
</svg>
