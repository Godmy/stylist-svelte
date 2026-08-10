export interface RecipeDomainAiAgent {
	open?: boolean;
	endpoint?: string;
	systemMessage?: string;
	selectedEntity?: {
		domain: string;
		cluster: string;
		joint: string;
		family: string;
		entityPath: string;
		files: { name: string; path: string }[];
	} | null;
	onClose?: () => void;
	class?: string;
}
