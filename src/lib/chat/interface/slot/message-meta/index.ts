/**
 * MessageMeta types and interfaces following SOLID principles
 */

export interface SlotMessageMeta {
	class?: string;
	timestamp?: string;
	sender?: string;
	status?: 'sent' | 'delivered' | 'read';
}
