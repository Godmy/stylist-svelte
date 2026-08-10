<script lang="ts">
	import createBorderState from './state.svelte';
	import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';

	let props: RecipeBorder = $props();

	const BORDER_STYLE_MAP: Record<string, string> = {
		solid: 'solid',
		dashed: 'dashed',
		dotted: 'dotted',
		double: 'double',
		none: 'none',
		invisible: 'none',
		bold: 'solid',
		tapered: 'solid'
	};

	const borderStyle = $derived(props.borderStyle ?? 'solid');
	const borderWidth = $derived(borderStyle === 'bold' ? '2px' : (props.borderWidth ?? '1px'));
	const borderColor = $derived(props.borderColor || 'var(--color-border-primary)');
	const borderRadius = $derived(props.borderRadius || '0');
	const animated = $derived(props.animated ?? false);

	const inlineStyle = $derived.by(() => {
		const cssBorderStyle = BORDER_STYLE_MAP[borderStyle] ?? 'solid';
		const parts: string[] = [`--border-color: ${borderColor}`, `border-radius: ${borderRadius}`];

		if (borderStyle === 'none' || borderStyle === 'invisible') {
			parts.push('border: none');
		} else if (props.borderTop || props.borderBottom || props.borderLeft || props.borderRight) {
			if (props.borderTop)
				parts.push(`border-top: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
			if (props.borderBottom)
				parts.push(`border-bottom: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
			if (props.borderLeft)
				parts.push(`border-left: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
			if (props.borderRight)
				parts.push(`border-right: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
		} else {
			parts.push(`border: ${borderWidth} ${cssBorderStyle} ${borderColor}`);
		}

		return parts.join('; ');
	});

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				borderStyle: _bs,
				borderWidth: _bw,
				borderColor: _bc,
				borderRadius: _br,
				borderTop: _bt,
				borderBottom: _bb,
				borderLeft: _bl,
				borderRight: _r,
				animated: _a,
				children: _ch,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div
	class={['layout-border', animated && 'layout-border--animated', props.class]
		.filter(Boolean)
		.join(' ')}
	style={inlineStyle}
	{...restProps}
>
	{#if props.children}
		{@render props.children()}
	{/if}
</div>

<style>
	.layout-border {
		position: relative;
	}

	.layout-border--animated {
		animation: border-pulse 2s ease-in-out infinite;
	}

	@keyframes border-pulse {
		0%,
		100% {
			border-color: var(--border-color);
		}
		50% {
			border-color: color-mix(in srgb, var(--border-color) 60%, transparent);
		}
	}
</style>
