<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { IconStyleManager } from '$stylist/design-system/styles';

	export type IconInfoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

	export type IconInfoProps = {
		size?: IconInfoSize;
		class?: string;
		strokeWidth?: number;
	};

	let props: IconInfoProps & SVGAttributes<SVGSVGElement> = $props();

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
	<path d="M12 16v-4" />
	<path d="M12 8h.01" />
</svg>
