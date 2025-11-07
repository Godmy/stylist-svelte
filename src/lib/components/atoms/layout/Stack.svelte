<script lang="ts">
	import type { Snippet } from 'svelte';

	type Direction = 'vertical' | 'horizontal';
	type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
	type Justify = 'start' | 'center' | 'end' | 'between' | 'around';

	const {
		children,
		direction = 'vertical',
		spacing = '1rem',
		align = 'stretch',
		justify = 'start',
		class: className = ''
	}: {
		children: Snippet;
		direction?: Direction;
		spacing?: string | number;
		align?: Align;
		justify?: Justify;
		class?: string;
	} = $props();

	const directionClasses: Record<Direction, string> = {
		vertical: 'flex-col',
		horizontal: 'flex-row'
	};

	const alignClasses: Record<Align, string> = {
		start: 'items-start',
		center: 'items-center',
		end: 'items-end',
		stretch: 'items-stretch',
		baseline: 'items-baseline'
	};

	const justifyClasses: Record<Justify, string> = {
		start: 'justify-start',
		center: 'justify-center',
		end: 'justify-end',
		between: 'justify-between',
		around: 'justify-around'
	};

	const gap = typeof spacing === 'number' ? `${spacing}px` : spacing;
</script>

<div
	style:gap={gap}
	class={`flex ${directionClasses[direction]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}
>
	{@render children()}
</div>
