import { TOKEN_FONT_FAMILY } from '$stylist/theme/const/object/font-family';
import { RECORD_FONT_SIZE } from '$stylist/theme/const/object/font-size';
import { RECORD_FONT_WEIGHT } from '$stylist/theme/const/object/font-weight';
import { TOKEN_LETTER_SPACING } from '$stylist/theme/const/object/letter-spacing';
import { TOKEN_LINE_HEIGHT } from '$stylist/theme/const/object/line-height';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TokenFontSize } from '$stylist/theme/type/alias/font-size';
import type { TokenTypographyTone } from '$stylist/theme/type/alias/tone';

export function resolveTypographyInlineStyle(
	styleValue: unknown,
	props: Partial<BehaviorTypography> & {
		fontSize?: TokenFontSize;
		tone?: TokenTypographyTone;
		disabled?: boolean;
	}
): string | undefined {
	const declarations: string[] = [];
	const baseStyle = typeof styleValue === 'string' ? styleValue.trim() : '';

	if (baseStyle) {
		declarations.push(baseStyle.replace(/;\s*$/, ''));
	}

	if (props.fontSize) {
		const resolvedFontSize = RECORD_FONT_SIZE[props.fontSize];
		declarations.push(`--typography-font-size: ${resolvedFontSize}`);
		declarations.push('font-size: var(--typography-font-size)');
	}

	if (props.fontWeight) {
		declarations.push(`--typography-font-weight: ${RECORD_FONT_WEIGHT[props.fontWeight]}`);
		declarations.push('font-weight: var(--typography-font-weight)');
	}

	if (props.fontFamily) {
		const resolvedFontFamily =
			props.fontFamily in TOKEN_FONT_FAMILY
				? TOKEN_FONT_FAMILY[props.fontFamily as keyof typeof TOKEN_FONT_FAMILY]
				: props.fontFamily;
		declarations.push(`--typography-font-family: ${resolvedFontFamily}`);
		declarations.push('font-family: var(--typography-font-family)');
	}

	if (props.lineHeight) {
		declarations.push(`--typography-line-height: ${TOKEN_LINE_HEIGHT[props.lineHeight]}`);
		declarations.push('line-height: var(--typography-line-height)');
	}

	if (props.letterSpacing) {
		declarations.push(`--typography-letter-spacing: ${TOKEN_LETTER_SPACING[props.letterSpacing]}`);
		declarations.push('letter-spacing: var(--typography-letter-spacing)');
	}

	if (props.textTransform) {
		declarations.push(`text-transform: ${props.textTransform}`);
	}

	if (props.textAlign) {
		declarations.push(`text-align: ${props.textAlign}`);
	}

	if (props.lineClamp && props.lineClamp > 0) {
		declarations.push('display: -webkit-box');
		declarations.push('-webkit-box-orient: vertical');
		declarations.push(`-webkit-line-clamp: ${props.lineClamp}`);
		declarations.push('overflow: hidden');
	}

	const resolvedToneColor = props.disabled
		? 'var(--color-text-tertiary)'
		: {
				default: 'var(--color-text-primary)',
				neutral: 'var(--color-text-secondary)',
				primary: 'var(--color-text-primary)',
				secondary: 'var(--color-text-secondary)',
				tertiary: 'var(--color-text-tertiary)',
				success: 'var(--color-success-700, var(--color-text-primary))',
				info: 'var(--color-info-700, var(--color-text-primary))',
				warning: 'var(--color-warning-700, var(--color-text-primary))',
				danger: 'var(--color-danger-700, var(--color-text-primary))',
				error: 'var(--color-error-700, var(--color-text-primary))'
			}[props.tone ?? 'primary'];
	declarations.push(`--typography-color: ${resolvedToneColor}`);
	declarations.push('color: var(--typography-color)');

	if (declarations.length === 0) {
		return undefined;
	}

	return `${declarations.join('; ')};`;
}
