import type { StatusState } from '$stylist/token/type/alias/status-state';

import type { TOKEN_STATUS } from '$stylist/information/const/enum/status';
export interface SlotStatus {
	status?: string;
	severity?: (typeof TOKEN_STATUS)[number];
	state?: StatusState;
}

