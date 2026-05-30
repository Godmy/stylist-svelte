import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';

export type TypographyTextProps = BehaviorTypography & {
	text?: string;
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
};
