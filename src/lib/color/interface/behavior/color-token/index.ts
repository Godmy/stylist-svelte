import type { TokenColorTone } from '$stylist/color/type/alias/tone';

export interface BehaviorColorToken {
	variant?: string;
	tone?: TokenColorTone;
	gradient?: string;
	theme?: string;
}
