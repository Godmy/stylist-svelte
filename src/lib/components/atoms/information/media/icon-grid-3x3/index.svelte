<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconGrid3X3Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconGrid3X3Props = {
		size?: IconGrid3X3Size;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconGrid3X3Props & SVGAttributes<SVGSVGElement> = $props();

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
	<rect width="18" height="18" x="3" y="3" rx="2" />
	<path d="M3 9h18" />
	<path d="M3 15h18" />
	<path d="M9 3v18" />
	<path d="M15 3v18" />
</svg>
