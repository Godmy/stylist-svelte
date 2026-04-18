export interface KanbanCardType {
	id: string;
	title: string;
	description?: string;
	assignee?: string | Record<string, unknown>;
	priority?: string;
	status?: string;
	tags?: string[];
	updatedAt?: Date;
}
