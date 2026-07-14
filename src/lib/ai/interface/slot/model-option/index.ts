// ==================== ModelSelector ====================
export interface SlotModelOption {
	id: string;
	name: string;
	description?: string;
	version?: string;
	capabilities?: string[];
	provider?: string;
	tags?: string[];
}
