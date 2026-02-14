<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	// РўРёРїС‹ РґР»СЏ РёРєРѕРЅРєРё
	export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	export type IconName =
		| 'search'
		| 'plus'
		| 'minus'
		| 'check'
		| 'x'
		| 'chevron-down'
		| 'chevron-up'
		| string;

	export type IconProps = {
		variant?: 'default';
		size?: IconSize;
		name?: IconName;
		strokeWidth?: number;
		children?: any;
		class?: string;
	};

	let props: IconProps & SVGAttributes<SVGSVGElement> = $props();

	const name = $derived(props.name ?? 'box');
	const strokeWidth = $derived(props.strokeWidth ?? 1.5);
	const children = $derived(props.children);

	// Р Р°Р·РјРµСЂС‹ РґР»СЏ РёРєРѕРЅРѕРє
	const SIZE_CLASSES: Record<IconSize, string> = {
		xs: 'w-4 h-4',
		sm: 'w-6 h-6',
		md: 'w-8 h-8',
		lg: 'w-10 h-10',
		xl: 'w-12 h-12'
	};

	const size = $derived((props.size ?? 'md') as IconSize);
	const sizeClasses = $derived(SIZE_CLASSES[size]);
	const iconClasses = $derived(
		`inline-block text-[var(--color-text-primary)] ${sizeClasses} ${props.class ?? ''}`
	);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				variant: _variant,
				size: _size,
				name: _name,
				strokeWidth: _strokeWidth,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);

	// РџРѕР»СѓС‡Р°РµРј РїСѓС‚СЊ РёРєРѕРЅРєРё
	const iconPath = $derived(getIconPath(name));

	// РљРѕРЅСЃС‚Р°РЅС‚С‹ РґР»СЏ SVG
	const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
	const SVG_VIEWBOX = '0 0 24 24';
	const SVG_FILL = 'none';
	const SVG_STROKE = 'currentColor';
	const SVG_STROKE_LINECAP = 'round';
	const SVG_STROKE_LINEJOIN = 'round';

	// Р’СЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Рµ С„СѓРЅРєС†РёРё
	function getIconPath(name: IconName): string {
		const iconPaths: Record<string, string> = {
			search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
			plus: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
			minus: 'M20 12H4',
			check: 'M5 13l4 4L19 7',
			x: 'M6 18L18 6M6 6l12 12',
			'chevron-down': 'M19 9l-7 7-7-7',
			'chevron-up': 'M5 15l7-7 7 7',
			box: 'M3 3l18 18M3 21l18-18'
		};

		return iconPaths[name as keyof typeof iconPaths] || iconPaths.box;
	}
</script>

<svg
	xmlns={SVG_NAMESPACE}
	class={iconClasses}
	viewBox={SVG_VIEWBOX}
	fill={SVG_FILL}
	stroke={SVG_STROKE}
	stroke-width={strokeWidth}
	stroke-linecap={SVG_STROKE_LINECAP}
	stroke-linejoin={SVG_STROKE_LINEJOIN}
	{...restProps}
>
	<path d={iconPath} />
</svg>

