export interface Model {
	id: string;
	name: string;
	description: string;
	capabilities: string[];
	provider: string;
	version: string;
	tags?: string[];
}
