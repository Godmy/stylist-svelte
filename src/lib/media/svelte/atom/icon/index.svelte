<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { TokenShape } from '$stylist/layout/type/enum/shape';
	import Svg from '../svg/index.svelte';
	import { IconStyleManager } from '$stylist/media/class/style-manager/icons';

	export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
	export type IconDirection = 'up' | 'down' | 'left' | 'right';
	export type IconVariant =
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'info'
		| 'solid'
		| 'outline'
		| 'ghost'
		| 'link'
		| 'subtle'
		| 'neutral'
		| 'dark'
		| 'light';
	export type IconShape = TokenShape | 'rounded';
	export type IconColor = IconVariant | 'gray';

	export type IconProps = InformationHTMLAttributes<HTMLSpanElement> & {
		name?: string;
		svg?: string;
		size?: IconSize;
		strokeWidth?: number;
		variant?: IconVariant;
		direction?: IconDirection;
		isOpen?: boolean;
		disabled?: boolean;
		class?: string;
		containerClass?: string;
		container?: 'none' | 'wrapper' | 'circle';
		containerSize?: Exclude<IconSize, number>;
		shape?: IconShape;
		color?: IconColor;
		filled?: boolean;
	};

	function normalizeIconName(value: string): string {
		return value
			.trim()
			.replace(/[_\s]+/g, '-')
			.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
			.toLowerCase();
	}

	// Static icon imports for SSR compatibility
	const iconSources: Record<string, string> = {
		// Architecture icons
		'alignments': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
		'architecture': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
		'box': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
		'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
		'chevron-up': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>',
		'components': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M14 14h7v7h-7z"/><path d="M3 14h7v7H3z"/></svg>',
		'models': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>',
		'search': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
		'x': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
		'check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
		'copy': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
		'grid-3x3': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>',
		'info': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
		'stylist-organism': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>',
		'ontology-node-component': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>'
	};

	const iconRegistry: Record<string, string> = Object.fromEntries(
		Object.entries(iconSources).map(([name, svg]) => [name, svg])
	);

	let {
		name = 'box',
		svg,
		size = 'md',
		strokeWidth = 1.5,
		variant = 'default',
		direction,
		isOpen,
		disabled = false,
		class: className = '',
		containerClass = '',
		container = 'none',
		containerSize = 'md',
		shape = 'circle',
		color = 'default',
		filled = false,
		...restProps
	}: IconProps = $props();

	function joinClasses(...values: Array<string | false | null | undefined>) {
		return values.filter(Boolean).join(' ');
	}

	const effectiveName = $derived.by(() => {
		const normalizedName = normalizeIconName(name || 'box');
		const isChevronLike = normalizedName === 'chevron' || normalizedName.startsWith('chevron-');
		if (!isChevronLike || isOpen === undefined) {
			return normalizedName;
		}
		return isOpen ? 'chevron-up' : 'chevron-down';
	});

	const numericSize = $derived.by(() => (typeof size === 'number' ? size : undefined));

	const iconClasses = $derived.by(() =>
		IconStyleManager.getIconChevronClasses({
			size: typeof size === 'number' ? 'md' : size,
			direction,
			variant,
			disabled,
			className
		})
	);

	const containerClasses = $derived.by(() => {
		if (container === 'circle') {
			return IconStyleManager.getIconCircleClasses({
				variant: color !== 'default' ? color : variant,
				size: containerSize,
				filled,
				disabled,
				className: containerClass
			});
		}
		if (container === 'wrapper') {
			return IconStyleManager.getIconWrapperClasses({
				size: containerSize,
				variant,
				shape,
				color,
				disabled,
				className: containerClass
			});
		}
		return containerClass;
	});

	const ariaLabel = $derived.by(() =>
		typeof restProps['aria-label'] === 'string' ? String(restProps['aria-label']) : undefined
	);

	const localSvg = $derived.by(() => {
		if (svg) return svg;
		return iconRegistry[effectiveName] ?? iconRegistry.box ?? '';
	});

</script>

{#if container === 'none'}
	<span class="inline-flex items-center justify-center" {...restProps}>
		<Svg
			svg={localSvg}
			class={iconClasses}
			size={numericSize}
			strokeWidth={strokeWidth}
			aria-label={ariaLabel}
		/>
	</span>
{:else}
	<span class={containerClasses} {...restProps}>
		<span class="inline-flex items-center justify-center">
			<Svg
				svg={localSvg}
				class={iconClasses}
				size={numericSize}
				strokeWidth={strokeWidth}
				aria-label={ariaLabel}
			/>
		</span>
	</span>
{/if}
