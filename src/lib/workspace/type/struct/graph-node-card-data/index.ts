export type GraphNodeCardData = {
	id: string;
	name: string;
	type: string;
	description?: string;
	fields?: { name: string; type: string; isRequired?: boolean }[];
};
