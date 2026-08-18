import type { StatusState } from '$stylist/ai/type/alias/status-state';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
export interface SlotStatus {
	status?: string;
	severity?: TokenColorTone;
	state?: StatusState;
}

