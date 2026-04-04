/**
 * QuoteRequestContract — запрос коммерческого предложения (форма).
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 *
 * Примечание: наследует ThemeAttributes вместо InformationHTMLAttributes
 * для единообразия с остальными commerce-контрактами.
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface QuoteRequestContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]> {}
