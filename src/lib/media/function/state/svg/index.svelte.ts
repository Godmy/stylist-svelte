import type { InformationHTMLAttributes } from '$stylist/information/type/struct';

export interface SvgProps extends InformationHTMLAttributes<HTMLSpanElement> {
	svg: string;
	size?: number | string;
	strokeWidth?: number;
	class?: string;
}

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

export function createSvgState(props: SvgProps) {
	const svg = $derived(props.svg);
	const size = $derived(props.size);
	const strokeWidth = $derived(props.strokeWidth);
	const className = $derived(props.class ?? '');
	const ariaLabel = $derived.by(() =>
		typeof props['aria-label'] === 'string' ? String(props['aria-label']) : undefined
	);
	const markup = $derived.by(() => buildSvgMarkup(svg, { className, size, strokeWidth, ariaLabel }));

	const restProps = $derived.by(() => {
		const { class: _class, svg: _svg, size: _size, strokeWidth: _strokeWidth, ...rest } = props;
		return rest;
	});

	return {
		get svg() { return svg; },
		get size() { return size; },
		get strokeWidth() { return strokeWidth; },
		get className() { return className; },
		get ariaLabel() { return ariaLabel; },
		get markup() { return markup; },
		get restProps() { return restProps; },
		escapeAttr,
		resolveSize,
		buildSvgMarkup
	};
}

export default createSvgState;
