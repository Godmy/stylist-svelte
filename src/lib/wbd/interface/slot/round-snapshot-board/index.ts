import type { StructWbdRoundSnapshot } from '$stylist/wbd/type/struct/round-snapshot';

export interface SlotWbdRoundSnapshotBoard {
	snapshots: StructWbdRoundSnapshot[];
	questionLabels?: Record<string, string>;
	class?: string;
}
