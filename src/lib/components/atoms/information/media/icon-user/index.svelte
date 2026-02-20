<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconUserSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconUserProps = {
		size?: IconUserSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconUserProps & SVGAttributes<SVGSVGElement> = $props();

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
	<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
	<circle cx="12" cy="7" r="4" />
</svg>
