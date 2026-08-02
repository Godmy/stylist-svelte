import type { StructWbdAuditLogEntry } from '$stylist/wbd/type/struct/audit-log-entry';

export interface SlotWbdAuditLogPanel {
	entries: StructWbdAuditLogEntry[];
	class?: string;
}
