export type StructWbdAuditLogEntry = {
	id: string;
	actorLabel: string;
	action: string;
	entityType: 'user' | 'session' | 'question' | 'answer' | 'round' | 'discussion' | 'system';
	entityLabel?: string;
	createdAt: string;
};
