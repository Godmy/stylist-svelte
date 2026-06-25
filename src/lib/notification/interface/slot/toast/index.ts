import type { ToastAction } from '$stylist/notification/interface/slot/toast-action';

import type { TOKEN_STATUS } from '$stylist/information/const/enum/status';
export interface Toast {
	id: string;
	title?: string;
	message: string;
	type: (typeof TOKEN_STATUS)[number];
	duration?: number;
	actions?: ToastAction[];
	onDismiss?: () => void;
}
