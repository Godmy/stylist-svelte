<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import Svg from '../svg/index.svelte';
	import { IconStyleManager } from '$stylist/design-system/styles';
	import {
		TOKEN_ICON_DIRECTION_ROTATION_CLASSES,
		TOKEN_ICON_VARIANT_CLASSES
	} from '$stylist/design-system/styles/information/icons';

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
	export type IconShape = 'circle' | 'square' | 'rounded' | 'pill';
	export type IconColor = IconVariant | 'gray';

	export type IconProps = HTMLAttributes<HTMLSpanElement> & {
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

	const iconSources = {
		...(import.meta as any).glob('/src/lib/svg/architecture/*.svg', {
			eager: true,
			query: '?raw',
			import: 'default'
		}),
		...(import.meta as any).glob('/src/lib/svg/information/*.svg', {
			eager: true,
			query: '?raw',
			import: 'default'
		}),
		...(import.meta as any).glob('/src/lib/svg/interaction/*.svg', {
			eager: true,
			query: '?raw',
			import: 'default'
		})
	} as Record<string, string>;

	function normalizeIconName(value: string): string {
		return value
			.trim()
			.replace(/[_\s]+/g, '-')
			.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
			.toLowerCase();
	}

	const iconRegistry: Record<string, string> = Object.fromEntries(
		Object.entries(iconSources).map(([path, svg]) => {
			const fileName = path.split('/').pop() ?? '';
			const iconName = normalizeIconName(fileName.replace(/\.svg$/i, ''));
			return [iconName, svg];
		})
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

	const rotationClass = $derived.by(() => {
		if (!direction) return '';
		return TOKEN_ICON_DIRECTION_ROTATION_CLASSES[direction];
	});

	const iconClasses = $derived(
		joinClasses(
			typeof size === 'number' ? className : IconStyleManager.getIconClasses(size, className),
			TOKEN_ICON_VARIANT_CLASSES[variant],
			rotationClass,
			disabled && 'opacity-50'
		)
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
