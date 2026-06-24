import { escapeAttr } from '$stylist/svg/function/script/attribute';
import { resolveSize } from '$stylist/svg/function/script/size';

export function buildSvgMarkup(
	rawSvg: string,
	options: { className?: string; size?: number | string; strokeWidth?: number; ariaLabel?: string }
): string {
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
