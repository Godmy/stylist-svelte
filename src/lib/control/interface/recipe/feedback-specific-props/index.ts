import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';

export interface FeedbackSpecificProps extends ComputeIntersectAll<[SlotChildren]> {
	type?: 'feedback' | 'error' | 'toast' | 'dialog' | 'boundary';

	actions?: Snippet;

	confirmText?: string;

	cancelText?: string;

	onConfirm?: () => void;

	onCancel?: () => void;

	autoDismiss?: boolean;

	dismissTimeout?: number;

}
