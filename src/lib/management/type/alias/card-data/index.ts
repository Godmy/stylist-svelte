export type CardData = {
	id: string;
	title: string;
	description?: string;
	content?: any;
	status?: string;
	tags?: string[];
	dueDate?: Date;
	assignedTo?: string;
};
