<script lang="ts">
	import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';

	export type SvgProps = InformationHTMLAttributes<HTMLSpanElement> & {
		svg: string;
		size?: number | string;
		strokeWidth?: number;
		class?: string;
	};

	let {
		svg,
		size,
		strokeWidth,
		class: className = '',
		...restProps
	}: SvgProps = $props();

	function escapeAttr(value: string): string {
		return value
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	}

	function resolveSize(value?: number | string): string {
		if (value === undefined || value === null || value === '') {
			return '';
		}
		return typeof value === 'number' ? `${value}px` : String(value);
	}

	function buildSvgMarkup(rawSvg: string, options: { className?: string; size?: number | string; strokeWidth?: number; ariaLabel?: string }): string {
		const normalized = rawSvg.trim();
		const attrs: string[] = [];

		if (options.className) {
			attrs.push(`class="${escapeAttr(options.className)}"`);
		}

		if (options.strokeWidth !== undefined) {
			attrs.push(`stroke-width="${options.strokeWidth}"`);
		}

		const resolvedSize = resolveSize(options.size);
		if (resolvedSize) {
			const safeSize = escapeAttr(resolvedSize);
			attrs.push(`width="${safeSize}"`);
			attrs.push(`height="${safeSize}"`);
		}

		if (options.ariaLabel) {
			attrs.push(`role="img"`);
			attrs.push(`aria-label="${escapeAttr(options.ariaLabel)}"`);
		} else {
			attrs.push('role="img"');
			attrs.push('aria-hidden="true"');
		}

		attrs.push('focusable="false"');

		return normalized.replace('<svg', `<svg ${attrs.join(' ')}`);
	}

	const ariaLabel = $derived.by(() =>
		typeof restProps['aria-label'] === 'string' ? String(restProps['aria-label']) : undefined
	);

	const markup = $derived.by(() => buildSvgMarkup(svg, { className, size, strokeWidth, ariaLabel }));
</script>

<span class="inline-flex items-center justify-center" {...restProps}>
	{@html markup}
</span>

<style>
	span :global(svg) {
		display: block;
	}
</style>


