import type { StatusState } from '$stylist/information/type/alias/status-state';

import type { TOKEN_STATUS } from '$stylist/information/const/array/status';
export interface SlotStatus {
	status?: string;
	severity?: (typeof TOKEN_STATUS)[number];
	state?: StatusState;
}

