import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { TokenTypographyTone } from '$stylist/typography/type/enum/tone';

export type TypographyTextProps = BehaviorTypography & {
	text?: string;
	tone?: TokenTypographyTone;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
};
