export type StructWbdDiscussionMessage = {
	id: string;
	questionId: string;
	roundNumber: number;
	alias: string;
	message: string;
	parentId?: string;
	createdAt: string;
	isOwn?: boolean;
};
